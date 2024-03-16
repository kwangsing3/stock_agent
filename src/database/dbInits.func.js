import { CreateTable, GetContent } from '../utility/sql.mod.js';

const DATABASE_COMPANY = 'STOCK_AGENT_COMPANY';
const DATABASE_HISTORY = 'STOCK_AGENT_HISTORY';
const TABLE_COMPANY = 'Company';

//初始化內容避免錯誤
export default async function DBinit() {
    console.log("---檢查資料庫結構");
    await GetContent(`CREATE DATABASE IF NOT EXISTS ${DATABASE_COMPANY}`);
    await GetContent(`CREATE DATABASE IF NOT EXISTS ${DATABASE_HISTORY}`);
    await CreateTable(
        [
            { name: '出表日期', type: 'LONGTEXT' },
            { name: '公司代號', type: 'VARCHAR(32) PRIMARY KEY' },
            { name: '公司名稱', type: 'LONGTEXT' },
            { name: '公司簡稱', type: 'LONGTEXT' },
            { name: '外國企業註冊地國', type: 'LONGTEXT' },
            { name: '產業別', type: 'LONGTEXT' },
            { name: '住址', type: 'LONGTEXT' },
            { name: '營利事業統一編號', type: 'LONGTEXT' },
            { name: '董事長', type: 'LONGTEXT' },
            { name: '總經理', type: 'LONGTEXT' },
            { name: '發言人', type: 'LONGTEXT' },
            { name: '發言人職稱', type: 'LONGTEXT' },
            { name: '代理發言人', type: 'LONGTEXT' },
            { name: '總機電話', type: 'LONGTEXT' },
            { name: '成立日期', type: 'LONGTEXT' },
            { name: '上市日期', type: 'LONGTEXT' },
            { name: '普通股每股面額', type: 'LONGTEXT' },
            { name: '實收資本額', type: 'LONGTEXT' },
            { name: '私募股數', type: 'LONGTEXT' },
            { name: '特別股', type: 'LONGTEXT' },
            { name: '編制財務報表類型', type: 'LONGTEXT' },
            { name: '股票過戶機構', type: 'LONGTEXT' },
            { name: '過戶電話', type: 'LONGTEXT' },
            { name: '過戶地址', type: 'LONGTEXT' },
            { name: '簽證會計師事務所', type: 'LONGTEXT' },
            { name: '簽證會計師1', type: 'LONGTEXT' },
            { name: '簽證會計師2', type: 'LONGTEXT' },
            { name: '英文簡稱', type: 'LONGTEXT' },
            { name: '英文通訊地址', type: 'LONGTEXT' },
            { name: '傳真機號碼', type: 'LONGTEXT' },
            { name: '電子郵件信箱', type: 'LONGTEXT' },
            { name: '網址', type: 'LONGTEXT' },
        ],
        DATABASE_COMPANY,
        TABLE_COMPANY
    );
}


