import UpsertStockHistory from "../database/UpsertStockHistory.func.js";
import { GetDBCompany } from "../database/getDBCompany.func.js";
import { GetTimeStemp } from "../utility/date.mod.js";
import { Sleep } from "../utility/httpmethod.js";
import { GetContent } from "../utility/sql.mod.js";
import { GETStockReordsMonthly } from "./獲取個股歷史資料.js";

//(算日期 -> 比對該日期沒有資料的公司 -> 算完再走下一月)
export async function Process() {
    const timest = GetTimeStemp("2010", "01");
    const Companies = await GetDBCompany()
    for (const tdate of timest) {
        const dd = tdate.slice(0, tdate.length - 2)
        //獲取日期區間
        const range = await GetTimeRange(tdate);
        const records = await GetContent(`SELECT * FROM stock_agent_history.records WHERE 日期 like "%${dd}%" AND 漲跌價差 != "";`)
        const theoryShouldHas = Companies.length * range.length;
        const localRecordHas = records.length;
        if (theoryShouldHas === localRecordHas) continue;
        //
        //
        //
        //刪除紀錄後重新獲取

        for (const ii of Companies) {
            const code = ii?.公司代號;
            if (code === undefined) continue;
            //如果記錄數量正確則跳過
            const rcs = await GetContent(`SELECT * FROM stock_agent_history.records WHERE 證券代號="${code}" AND 漲跌價差 != "" AND 日期 like "%${dd}%";`)
            if (rcs.length === range.length) {
                continue;
            }
            //
            await GetContent(`DELETE FROM stock_agent_history.records WHERE 日期 like "%${dd}%" AND 證券代號="${code}";`).catch(error => {
                console.error(error)
            });
            const rr = await GETStockReordsMonthly(ii?.公司代號, tdate);
            await UpsertStockHistory(ii?.公司代號, tdate, rr);
            await Sleep(1000);
        }
    }
}

async function GetTimeRange(month) {
    const raw = await GETStockReordsMonthly("2330", month);
    const res = [];
    raw.forEach(ele => {
        res.push(ele?.日期)
    })
    return res;
}