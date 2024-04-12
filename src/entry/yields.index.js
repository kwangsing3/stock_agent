import UpsertYieldHistory from "../database/UpsertStockYieldfunc.js";
import { GETAllTaiwanStockYield } from "../func/獲取除權息歷史.js"
import { CloseConnect, ConnectToDB } from "../utility/sql.mod.js";

(async () => {
    await ConnectToDB('localhost', 'root', 'manager1', '')
    const raw = await GETAllTaiwanStockYield();
    await UpsertYieldHistory(raw);
    console.log("除權息資料更新完成")
})().catch((err) => {
    console.error(err)
}).finally(async () => {
    await CloseConnect();
    console.log("---退出DB資料庫")
})

