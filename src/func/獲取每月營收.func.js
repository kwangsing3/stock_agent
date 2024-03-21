import { POST } from '../utility/httpmethod.js';
import { DOMParser } from '@xmldom/xmldom';
import { select } from 'xpath';

/**
 * 
 * @param {*} code 公司代號
 * @param {*} year 民國年
 * @param {*} month 月份
 * @returns 
 */
export async function GetFinancialMonthly(code, year, month) {
    const url = `https://mops.twse.com.tw/mops/web/ajax_t05st10_ifrs`
    const data = `encodeURIComponent=1&step=1&firstin=1&off=1&keyword4=&code1=&TYPEK2=&checkbtn=&queryName=co_id&inpuType=co_id&TYPEK=all&isnew=false&co_id=${code}&year=${year}&month=${month}`
    let str = (await POST(url, data))['data'];
    const matchword = `<TABLE class='hasBorder' style='width: 60%; margin-left: 20%;' align='center'>`;
    let tabStart = str.indexOf(`<TABLE class='hasBorder' style='width: 60%; margin-left: 20%;' align='center'>`);
    const tabEnd = str.indexOf(`</table>`, tabStart);
    let tmp = "";
    tabStart += matchword.length;
    while (tabStart < tabEnd) tmp += str[tabStart++]
    tmp = tmp.replace(/,/g, "")
    tmp = tmp.replace(/&nbsp;/g, "")

    const st = new DOMParser().parseFromString("<RES>" + tmp + "</RES>", "text/xml");
    const root = select("//TD", st);
    const valuList = [];
    for (const index in root) {
        const val = root[index]?.lastChild?.data?.replace(/ /g, "")
        valuList.push(val)
    }

    if (valuList?.length === 9) {
        return {
            公司代號: code,
            本月: valuList[0],
            去年同期: valuList[1],
            本月增減金額: valuList[2],
            本月增減百分比: valuList[3],
            本年累計: valuList[4],
            去年累計: valuList[5],
            去年增減金額: valuList[6],
            去年增減百分比: valuList[7],
            營收變化原因說明: valuList[8] === undefined ? "" : valuList[8],
        }
    }
    else
        return {}
}

