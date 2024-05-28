import { GetContent } from "../utility/sql.mod.js";

const DATABASE_COMPANY = 'STOCK_AGENT_HISTORY';
const TABLE_COMPANY = 'current';

const allowcode = ["0050", "0056", "00878", "00939", "00940", "2330", "6221", "00923", "2603", "2615", "2609"];

//獲取公司列表
export async function GetDBCompany() {
  let raw = await GetContent(`
      SELECT * from ${DATABASE_COMPANY}.${TABLE_COMPANY} ;
    `);
  raw = raw.filter(ele => allowcode.includes(ele['證券代號']))
  return raw === undefined ? [] : raw;
}