import { GetContent } from "../utility/sql.mod.js";

const DATABASE_COMPANY = 'STOCK_AGENT_HISTORY';
const TABLE_COMPANY = 'current';

//獲取公司列表
export async function GetDBCompany() {
  const raw = await GetContent(`
      SELECT * from ${DATABASE_COMPANY}.${TABLE_COMPANY};
    `);
  return raw === undefined ? [] : raw;
}