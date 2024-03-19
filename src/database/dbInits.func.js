import { CreateTable, GetContent } from '../utility/sql.mod.js';

const DATABASE_COMPANY = 'STOCK_AGENT_COMPANY';
const DATABASE_HISTORY = 'STOCK_AGENT_HISTORY';
const TABLE_COMPANY = 'Company';

//初始化內容避免錯誤
export default async function DBinit() {
    console.log("---檢查資料庫結構");
    await GetContent(`CREATE DATABASE IF NOT EXISTS ${DATABASE_COMPANY}`);
    await GetContent(`CREATE DATABASE IF NOT EXISTS ${DATABASE_HISTORY}`);
    // 新增公司列表
    await CreateTable(
        [
            { name: '公司代號', type: 'VARCHAR(32) PRIMARY KEY' },
            { name: '公司名稱', type: 'LONGTEXT' },
            { name: '公司簡稱', type: 'LONGTEXT' },
            { name: '外國企業註冊地國', type: 'LONGTEXT' },
            { name: '產業別', type: 'LONGTEXT' },
            { name: '營利事業統一編號', type: 'LONGTEXT' },
            { name: '董事長', type: 'LONGTEXT' },
            { name: '總經理', type: 'LONGTEXT' },
            { name: '成立日期', type: 'LONGTEXT' },
            { name: '上市日期', type: 'LONGTEXT' },
            { name: '普通股每股面額', type: 'LONGTEXT' },
            { name: '實收資本額', type: 'LONGTEXT' },
            { name: '私募股數', type: 'LONGTEXT' },
            { name: '特別股', type: 'LONGTEXT' },
            { name: '編制財務報表類型', type: 'LONGTEXT' },
            { name: '英文簡稱', type: 'LONGTEXT' },
            { name: '網址', type: 'LONGTEXT' },
        ],
        DATABASE_COMPANY,
        TABLE_COMPANY
    );
    //新增每日交易紀錄 總和在一起
    await CreateTable([
        { name: "id", type: "INT NOT NULL AUTO_INCREMENT PRIMARY KEY" },
        { name: "證券代號", type: "VARCHAR(32)" },
        { name: "證券名稱", type: "LONGTEXT" },
        { name: "日期", type: "VARCHAR(32)" },
        { name: "成交股數", type: "LONGTEXT" },
        { name: "成交金額", type: "LONGTEXT" },
        { name: "開盤價", type: "LONGTEXT" },
        { name: "最高價", type: "LONGTEXT" },
        { name: "最低價", type: "LONGTEXT" },
        { name: "收盤價", type: "LONGTEXT" },
        { name: "漲跌價差", type: "LONGTEXT" },
        { name: "成交筆數", type: "LONGTEXT" },
    ], DATABASE_HISTORY, "records");
}


