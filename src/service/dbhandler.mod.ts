/*
    負責從DB獲取資料或寫入資料
*/
import 公司基本資訊 from '../model/公司基本資訊.inter';
import {CreateTable, GetContent, Insert, Upsert} from '../utility/sql.mod';
const DATABASE = 'STOCK_AGENT';
const COMPANYTABLENAME = 'Company';
//初始化內容避免錯誤
export async function init() {
  await GetContent(`CREATE DATABASE IF NOT EXISTS ${DATABASE}`);
  await CreateComponyTable();
}

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
    DATABASE,
    COMPANYTABLENAME
  );
}
export async function GetDBCompany(): Promise<公司基本資訊[]> {
  const raw = await GetContent(`
      Select * from ${DATABASE}.${COMPANYTABLENAME};
    `);
  return raw === undefined ? [] : raw;
}

export async function SetUnknowCompany(
  input: {
    證券代號: string;
    證券名稱: string;
  }[]
) {
  for (const key of input) {
    await GetContent(
      `Delete from ${DATABASE}.${COMPANYTABLENAME} where 公司代號 = "${key['證券代號']}"`
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
      DATABASE,
      COMPANYTABLENAME
    );
  }
  console.log(`新增未追蹤的公司共${input.length}項`);
}
export async function GetUnknowCompany() {}
