import { GetContent } from "../utility/sql.mod.js";

const DATABASE_COMPANY = 'STOCK_AGENT_COMPANY';
const TABLE_COMPANY = 'Company';

//獲取公司列表
export default async () => {
  const raw = await GetContent(`
      Select * from ${DATABASE_COMPANY}.${TABLE_COMPANY};
    `);
  return raw === undefined ? [] : raw;
}
