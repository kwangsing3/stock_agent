/* eslint-disable @typescript-eslint/no-explicit-any */
import * as mariadb from 'mariadb';
import 每日盤後資訊 from '../model/單日個股歷史資料.inter';
let pool: mariadb.Pool;
export function ConnectToDB(
  host: string,
  user: string,
  password: string,
  db: string
) {
  try {
    pool = mariadb.createPool({
      host: host,
      user: user,
      password: password,
      connectionLimit: 5,
      database: db,
      connectTimeout: 1000 * 10,
    });
  } catch (error) {
    console.log(`無法使用DBhandler服務:${error}`);
  }
}
/**
 * 向資料庫拉取語法要求的資料
 * @param query SQL命令
 * @returns 資料內容
 */
export async function GetContent(query: string): Promise<any> {
  const conn = await pool.getConnection();
  const data = await conn.query(query);
  if (conn) {
    conn.end();
  } else {
    throw new Error('DataBase 連接錯誤');
  }

  return data;
}
/**
 * 關閉與資料庫的連線
 */
export async function CloseConnect() {
  await pool.end().catch((err: any) => {
    throw err;
  });
}

////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 資料庫內容相關操作
////////////////////////////////////////////////////////////////////////////////

export async function GetCodeByName(compName: string): Promise<string> {
  const codeR: {公司代號: string}[] = await GetContent(`
  SELECT 公司代號 FROM Dashboard.上市公司資訊
  WHERE 公司簡稱 = "${compName}";
  `);
  const res = codeR[0]['公司代號'];
  return res;
}
export async function GetNameByCode(code: string): Promise<string> {
  const codeR: {公司簡稱: string}[] = await GetContent(`
  SELECT 公司簡稱 FROM Dashboard.上市公司資訊
  WHERE 公司代號 = "${code}";
  `);
  const res = codeR[0]['公司簡稱'];
  return res;
}

////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////// 資料庫內容相關操作
////////////////////////////////////////////////////////////////////////////////

export async function GetMonthRecordByCode(
  code: string,
  Ymonth: string
): Promise<每日盤後資訊[]> {
  const codeR: {公司簡稱: string}[] = await GetContent(`
  SELECT 公司簡稱 FROM Dashboard.上市公司資訊
  WHERE 公司代號 = "${code}";
  `);
  if (codeR[0]['公司簡稱'] === undefined) return [];
  return await GetMonthRecordByName(codeR[0]['公司簡稱'], Ymonth);
}
export async function GetMonthRecordByName(
  companyName: string,
  Ymonth: string
): Promise<每日盤後資訊[]> {
  const raw: 每日盤後資訊[] = await GetContent(`
  SELECT * FROM 歷史資料.${companyName} 
  WHERE 日期 like "${Ymonth}%";
  `);
  return raw;
}
