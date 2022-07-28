import {EOL} from 'os';
import {join} from 'path';
import {GET, POST} from '../utility/httpmethod';

import * as json2html from 'html2json';

/*
  基本面功能:
  三大報表：
  * 資產負債表 GETTaiwanStockBalanceSheet
  * 綜合損益表 TaiwanStockFinancialStatements
  * 現金流量表 TaiwanCashFlowsStatement

  綜合損益趨勢：
  * 營業收入
   營業毛利
   稅後純益
   每股盈餘

  其他表：
   ＊ 殖利率

    股利政策表 TaiwanStockDividend
    除權除息結果表 TaiwanStockDividendResult
    月營收表 TaiwanStockMonthRevenue
    減資恢復買賣參考價格 TaiwanStockCapitalReductionReferencePrice
*/

//#region  三大報表

/**
個股綜合損益表
 * @param stockid 個股代號
 * @param Yseason 年度季別，例如：20154
 * @returns JSON
 */
export async function GETTaiwanStockFinancialStatements(
  stockid: string,
  Yseason: string
) {
  return postCompareReportMopsfin('IncomeStatement', stockid, Yseason);
}

/**
個股現金流量表
 * @param stockid 個股代號
 * @param Yseason 年度季別，例如：20154
 * @returns JSON
 */
export async function GETTaiwanCashFlowsStatement(
  stockid: string,
  Yseason: string
) {
  return postCompareReportMopsfin('CashflowStatement', stockid, Yseason);
}

/**
獲取個股資產負債表
 * @param stockid 個股代號
 * @param Yseason 年度季別，例如：20154
 * @returns JSON
 */
export async function GETTaiwanStockBalanceSheet(
  stockid: string,
  Yseason: string
): Promise<any> {
  return postCompareReportMopsfin('BalanceSheet', stockid, Yseason);
}
//#endregion
//#region  綜合損益趨勢

/**
 * 獲取營業收入
 * @param stockid
 * @param Yseason
 * @returns
 */
export async function GETTaiwanRevenue(stockid: string, Yseason: string) {
  return postCompareDataMopsfin('Revenue', stockid, Yseason);
}

/** 個股股本*/
export async function GETTaiwanCommonStock(
  stockid: string,
  Yseason: string
): Promise<any> {
  return postCompareDataMopsfin('CommonStock', stockid, Yseason);
}
//#endregion

/*個股年營業收入年增率*/
export async function GETTaiwanStockYearRevenue(
  stockid: string,
  Yseason: string
): Promise<any> {
  return postCompareDataMopsfin('RevenueYOY', stockid, Yseason);
}
/**
 * 獲取個股殖利率，本益比，股價淨值比。
 * @param date
 * @returns
 */
export async function GetTaiwanStockYield(date: string) {
  const urls = `https://www.twse.com.tw/exchangeReport/BWIBBU_d?response=json&date=${date}&selectType=ALL`;
  const raw = await GET(urls);
  const sample = raw['data'];
  const result: any[] = [];
  for (const key of sample['data']) {
    const tmp = {
      證券代號: key[0],
      證券名稱: key[1],
      本益比: key[2],
      '殖利率(%)': key[3],
      股價淨值比: key[4],
    };
    result.push(tmp);
  }
  return result;
}

async function postCompareDataMopsfin(
  swi: string,
  stockid: string,
  Yseason: string
) {
  const host = 'https://mopsfin.twse.com.tw/compare/data';
  const query = `compareItem=${swi}&quarter=true&ylabel=%2&ys=${Yseason}5&revenue=true&bcodeAvg=true&companyAvg=false&companyId=${stockid}`;
  const raw = await POST(host, {}, query);
  let result = raw['data']['json'];
  result = JSON.parse(raw['data']['json']);
  return result;
}
async function postCompareReportMopsfin(
  swi: string,
  stockid: string,
  Yseason: string
): Promise<any> {
  const requURL = 'https://mopsfin.twse.com.tw/compare/report';
  const query = `compareItem=${swi}&quarter=true&ys=${Yseason}&revenue=true&bcodeAvg=true&companyAvg=true&companyId=${stockid}`;
  let raw = await POST(requURL, {}, query);
  raw = raw['data'];
  raw = raw.replace(new RegExp('\\r', 'g'), '');
  raw = raw.replace(new RegExp('\\n', 'g'), '');
  const json: any = json2html.html2json(raw);
  let arr = json['child'][3]['child'];
  arr = arr[3]['child'];
  arr = arr[1]['child'];
  arr = arr[3]['child'];
  //數值
  const sampleList = [];
  for (const key of arr) {
    if (key['node'] === 'text') continue;
    let tar = key['child'][1]['child'][0]['text'];
    tar = tar.replace(new RegExp(',', 'g'), '');
    sampleList.push(Number(tar));
  }
  //項目
  arr = json['child'][3]['child'];
  arr = arr[1]['child'];
  arr = arr[1]['child'];
  arr = arr[3]['child'];
  const result: any = {};
  const assestList: string[] = [];
  for (const key of arr) {
    if (key['node'] === 'text') continue;
    let tar = key['child'][1]['child'][0]['text'];
    tar = tar.replace(new RegExp(' ', 'g'), '');
    tar = tar.replace(new RegExp('　', 'g'), '');
    assestList.push(tar);
  }
  for (const index in assestList) {
    result[assestList[index]] = sampleList[index];
  }
  return result;
}
// https://mopsfin.twse.com.tw/
