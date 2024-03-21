import { CloseConnect, ConnectToDB } from "../utility/sql.mod.js";
import { GetDBCompany } from '../database/getDBCompany.func.js'
import { GetFinancialMonthly } from "../func/獲取每月營收.func.js";
import { UpsertFinancialMonthly } from "../database/UpertFinancialMonthly.js";
import { Sleep } from "../utility/httpmethod.js";
(async () => {
    await ConnectToDB('localhost', 'root', 'manager1', '')
    const cur = new Date();
    const Companies = await GetDBCompany();
    const etime = GetTimeStemp(cur.getFullYear() - 2, "01");
    for (const key of Companies) {
        if (key.公司代號[0] === "0" || key.公司代號.length != 4) continue;
        for (const t of etime) {
            await Sleep(3000);
            const raw = await GetFinancialMonthly(key.公司代號, t[0], t[1])
            if (raw?.本月 !== undefined) { // 如果有資料
                await UpsertFinancialMonthly(raw, t[0], t[1])
            } else {
                break;
            }
        }
    }
})().catch((err) => {
    console.error(err)
}).finally(async () => {
    await CloseConnect();
    console.log("---退出DB資料庫")
})
/**
return [[年,月]]
*/
function GetTimeStemp(sYear, sMonth) {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    let result = [];
    let tmpYear = parseInt(sYear);
    let tmpMonth = parseInt(sMonth);
    while (tmpYear < year + 1) {
        while (tmpMonth < 13) {
            const mon = tmpMonth > 9 ? `${tmpMonth}` : `0${tmpMonth}`;
            result.push([tmpYear, mon]);
            tmpMonth++;
            if (tmpYear === year && tmpMonth > month) {
                tmpYear = 9999;
                tmpMonth = 9999;
            }
        }
        tmpMonth = 1;
        tmpYear++;
    }
    result = result.reverse();
    return result;
}