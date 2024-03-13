/*
    負責從DB獲取資料或寫入資料
*/

import {CreateTable, GetContent, Upsert} from '../utility/sql.mod.js';
const DATABASE_COMPANY = 'STOCK_AGENT_COMPANY';
const DATABASE_HISTORY = 'STOCK_AGENT_HISTORY';
const TABLE_COMPANY = 'Company';
//初始化內容避免錯誤
export async function init() {
  await GetContent(`CREATE DATABASE IF NOT EXISTS ${DATABASE_COMPANY}`);
  await GetContent(`CREATE DATABASE IF NOT EXISTS ${DATABASE_HISTORY}`);
  await CreateComponyTable();
}

//初始化公司列表
export async function CreateComponyTable() {
  await CreateTable(
    [
      {name: '出表日期', type: 'LONGTEXT'},
      {name: '公司代號', type: 'VARCHAR(32) PRIMARY KEY'},
      {name: '公司名稱', type: 'LONGTEXT'},
      {name: '公司簡稱', type: 'LONGTEXT'},
      {name: '外國企業註冊地國', type: 'LONGTEXT'},
      {name: '產業別', type: 'LONGTEXT'},
      {name: '住址', type: 'LONGTEXT'},
      {name: '營利事業統一編號', type: 'LONGTEXT'},
      {name: '董事長', type: 'LONGTEXT'},
      {name: '總經理', type: 'LONGTEXT'},
      {name: '發言人', type: 'LONGTEXT'},
      {name: '發言人職稱', type: 'LONGTEXT'},
      {name: '代理發言人', type: 'LONGTEXT'},
      {name: '總機電話', type: 'LONGTEXT'},
      {name: '成立日期', type: 'LONGTEXT'},
      {name: '上市日期', type: 'LONGTEXT'},
      {name: '普通股每股面額', type: 'LONGTEXT'},
      {name: '實收資本額', type: 'LONGTEXT'},
      {name: '私募股數', type: 'LONGTEXT'},
      {name: '特別股', type: 'LONGTEXT'},
      {name: '編制財務報表類型', type: 'LONGTEXT'},
      {name: '股票過戶機構', type: 'LONGTEXT'},
      {name: '過戶電話', type: 'LONGTEXT'},
      {name: '過戶地址', type: 'LONGTEXT'},
      {name: '簽證會計師事務所', type: 'LONGTEXT'},
      {name: '簽證會計師1', type: 'LONGTEXT'},
      {name: '簽證會計師2', type: 'LONGTEXT'},
      {name: '英文簡稱', type: 'LONGTEXT'},
      {name: '英文通訊地址', type: 'LONGTEXT'},
      {name: '傳真機號碼', type: 'LONGTEXT'},
      {name: '電子郵件信箱', type: 'LONGTEXT'},
      {name: '網址', type: 'LONGTEXT'},
    ],
    DATABASE_COMPANY,
    TABLE_COMPANY
  );
}

/**
 * 輸入未知公司至公司列表
 * @param {*} key
 * {
 *    證券代號: string;
 *    證券名稱: string;
 * }
 */
export async function SetUnknowCompany(key) {
  await GetContent(
    `Delete from ${DATABASE_COMPANY}.${TABLE_COMPANY} where 公司代號 = "${key['證券代號']}"`
  );
  await Upsert(
    {
      出表日期: '',
      公司代號: key.證券代號,
      公司名稱: '',
      公司簡稱: key.證券名稱,
      外國企業註冊地國: '',
      產業別: '',
      住址: '',
      營利事業統一編號: '',
      董事長: '',
      總經理: '',
      發言人: '',
      發言人職稱: '',
      代理發言人: '',
      總機電話: '',
      成立日期: '',
      上市日期: '',
      普通股每股面額: '',
      實收資本額: '',
      私募股數: '',
      特別股: '',
      編制財務報表類型: '',
      股票過戶機構: '',
      過戶電話: '',
      過戶地址: '',
      簽證會計師事務所: '',
      簽證會計師1: '',
      簽證會計師2: '',
      英文簡稱: '',
      英文通訊地址: '',
      傳真機號碼: '',
      電子郵件信箱: '',
      網址: '',
    },
    DATABASE_COMPANY,
    TABLE_COMPANY
  );
}
//獲取沒有詳細資料的公司列表
export async function GetUnknowCompany() {
  const raw = await GetContent(`
    select * from ${DATABASE_COMPANY}.${TABLE_COMPANY} where 公司名稱 = ""
  ;`);
  return raw;
}
/**
 * 
 * @param {公司基本資訊} input 
 */
export async function UpsertUnknowCompany(input) {
  await Upsert(
    {
      出表日期: input.出表日期,
      公司代號: input.公司代號,
      公司名稱: input.公司名稱,
      公司簡稱: input.公司簡稱,
      外國企業註冊地國: input.外國企業註冊地國,
      產業別: input.產業別,
      住址: input.住址,
      營利事業統一編號: input.營利事業統一編號,
      董事長: input.董事長,
      總經理: input.總經理,
      發言人: input.發言人,
      發言人職稱: input.發言人職稱,
      代理發言人: input.代理發言人,
      總機電話: input.總機電話,
      成立日期: input.成立日期,
      上市日期: input.上市日期,
      普通股每股面額: input.普通股每股面額,
      實收資本額: input.實收資本額,
      私募股數: input.私募股數,
      特別股: input.特別股,
      編制財務報表類型: input.編制財務報表類型,
      股票過戶機構: input.股票過戶機構,
      過戶電話: input.過戶電話,
      過戶地址: input.過戶地址,
      簽證會計師事務所: input.簽證會計師事務所,
      簽證會計師1: input.簽證會計師1,
      簽證會計師2: input.簽證會計師2,
      英文簡稱: input.英文簡稱,
      英文通訊地址: input.英文通訊地址,
      傳真機號碼: input.傳真機號碼,
      電子郵件信箱: input.電子郵件信箱,
      網址: input.網址,
    },
    DATABASE_COMPANY,
    TABLE_COMPANY
  );
}
/**
 * 
 * @param {*} code 
 * @param {*} date 
 * @param {*} input 
 * {
    證券代號: string;
    證券名稱: string;
    日期: string;
    成交股數: string;
    成交金額: string;
    開盤價: string;
    最高價: string;
    最低價: string;
    收盤價: string;
    漲跌價差: string;
    成交筆數: string;
  }
 */
export async function UpsertStockHistory(
  code='',
  date = '',
  input
) {
  await CreateTable(
    [
      {name: '證券代號', type: 'LONGTEXT'},
      {name: '證券名稱', type: 'LONGTEXT'},
      {name: '日期', type: 'VARCHAR(32) PRIMARY KEY'},
      {name: '成交股數', type: 'LONGTEXT'},
      {name: '成交金額', type: 'LONGTEXT'},
      {name: '開盤價', type: 'LONGTEXT'},
      {name: '最高價', type: 'LONGTEXT'},
      {name: '最低價', type: 'LONGTEXT'},
      {name: '收盤價', type: 'LONGTEXT'},
      {name: '漲跌價差', type: 'LONGTEXT'},
      {name: '成交筆數', type: 'LONGTEXT'},
    ],
    DATABASE_HISTORY,
    code
  );
  await Upsert(
    {
      證券代號: input.證券代號,
      證券名稱: input.證券名稱,
      日期: date,
      成交股數: input.成交股數,
      成交金額: input.成交金額,
      開盤價: input.開盤價,
      最高價: input.最高價,
      最低價: input.最低價,
      收盤價: input.收盤價,
      漲跌價差: input.漲跌價差,
      成交筆數: input.成交筆數,
    },
    DATABASE_HISTORY,
    code
  );
  console.log('更新每日盤後:' + code + '日期:' + date);
}

export async function DB_GETStockHistoryByDate(
  code= '',
  date= ''
) {
  const data = await GetContent(`
    select * from ${DATABASE_HISTORY}.${code} where 日期 = ${date};
  `);
  return data;
}
export async function DB_GETStockHistory(code= '') {
  const data = await GetContent(`
    select * from ${DATABASE_HISTORY}.${code} ;
  `);
  return data;
}
