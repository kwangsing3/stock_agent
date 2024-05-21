import { GetDBCompany } from '../database/getDBCompany.func.js';
import { CloseConnect, ConnectToDB, CreateTable, GetContent, Insert } from '../utility/sql.mod.js'
import { GetCurrentDate } from '../utility/date.mod.js'
/*
    何謂價值區間?

    1. 尋找歷年來市場願意用多少殖利率參加除息。
    2. 需要計算先於市場知道預估值利率是多少。
    3. 如果獲得的殖利率高於平均(估價較平均低，或股利增加)，即為價值區間。
*/

const DATABASE_HISTORY = 'STOCK_AGENT_HISTORY';
const TABLE = 'dailyvalue';
(async () => {
    await ConnectToDB('localhost', 'root', 'manager1', '')
    console.log("---執行價值區間")
    0; //###清空並創建資料表
    await GetContent(`DROP TABLE IF EXISTS ${DATABASE_HISTORY}.${TABLE};`);
    await CreateTable([
        { name: "id", type: "INT NOT NULL AUTO_INCREMENT PRIMARY KEY" },
        { name: "證券代號", type: "VARCHAR(32)" },
        { name: "證券名稱", type: "LONGTEXT" },
        { name: "日期", type: "VARCHAR(32)" },
        { name: "當前殖利率", type: "LONGTEXT" },
        { name: "前五次平均殖利率", type: "LONGTEXT" },
        { name: "差異率", type: "LONGTEXT" },
        { name: "收盤價", type: "LONGTEXT" },
        { name: "最近一次股利", type: "LONGTEXT" },
    ], DATABASE_HISTORY, 'dailyvalue');

    1; //###獲取公司列表
    let Companies = await GetDBCompany();

    //Companies = Companies.filter(ele => ele.證券代號 === "0057")
    for (const key of Companies) {
        const averYield = await GetAverageYield(key.證券代號);
        const curYield = await GetCurrentYield(key.證券代號);
        const minus = curYield === averYield ? 0 : curYield / averYield
        await Insert({
            證券代號: key.證券代號,
            證券名稱: key.證券名稱,
            日期: GetCurrentDate(),
            當前殖利率: (最近一次股利 / curetPrice * 100).toFixed(2),
            前五次平均殖利率: averYield.toFixed(2),
            差異率: parseFloat(minus.toFixed(2)),
            收盤價: curetPrice,
            最近一次股利: 最近一次股利
        }, DATABASE_HISTORY, TABLE)
    }

})().catch((err) => {
    console.error(err)
}).finally(async () => {
    await CloseConnect();
    console.log("---退出DB資料庫")
})
let 最近一次股利 = 0;
let curetPrice = 0;
// 獲取最近殖利率的平均值
async function GetAverageYield(code) {
    const raw = await GetContent(`
    SELECT * FROM stock_agent_history.yields
    WHERE 股票代號="${code}" AND 除權息前收盤價 != "-" AND 權息 = "息"
    order by 除權息日期 DESC limit 5
    ;`);
    if (raw.length < 1) return 0
    let sum = 0;
    //當期殖利率
    raw.forEach(key => {
        const thenY = parseFloat(key?.權值息值.replace(/,/g, "")) / parseFloat(key?.除權息前收盤價.replace(/,/g, ""));
        sum += parseFloat(thenY);
    });
    最近一次股利 = raw[0].權值息值;
    return parseFloat((sum / raw.length) * 100);
}
// 獲取當前殖利率
async function GetCurrentYield(code) {
    const raw = await GetContent(`
    SELECT * FROM stock_agent_history.current WHERE 證券代號="${code}"
    ;`);
    if (raw.length < 1) return 0
    //現在收盤價
    const curPrice = curetPrice = raw?.[0]?.收盤價;
    const rs = await GetContent(`
    SELECT * FROM stock_agent_history.yields
    WHERE 股票代號="${code}" AND 除權息前收盤價 != "-" AND 權息 = "息"
    order by 除權息日期 DESC limit 1
    ;`);
    //最新除權息
    if (rs.length < 1) return 0

    const curYield = rs?.[0]?.權值息值;

    return curPrice ? parseFloat((curYield / curPrice * 100)) : 0
}