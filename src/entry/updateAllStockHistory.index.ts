import technicalImple from '../api/technical.imple';
import config from '../config';
import {單日盤後資訊} from '../model/每日盤後資訊';
import {CloseConnect, ConnectToDB, GetContent} from '../service/dbhandler.mod';
import {NormalizeYear} from '../utility/date.mod';
import {sleep} from '../utility/httpmethod.mod';

const DATABASE = '歷史資料';
const timestemp = GetTimeStemp('2010', '01'); //時間陣列
const companies: {公司代號: string; 公司簡稱: string}[] = []; //公司資料
try {
  Task();
} catch (error) {
  console.error(error);
}

export async function Task() {
  //獲取公司代號資料列表
  await ConnectToDB(
    config.MariaDB.host,
    config.MariaDB.username,
    config.MariaDB.password,
    'Dashboard'
  );
  const cList = await GetContent(`
  SELECT 公司代號, 公司簡稱 FROM Dashboard.上市公司資訊
  WHERE 包含歷史資料 = false;
  `);
  for (const key of cList) {
    companies.push({
      公司代號: key['公司代號'],
      公司簡稱: key['公司簡稱'],
    });
  }
  await Task1();
  await Task2();
  console.log('上市公司資料獲取完成。');
  await CloseConnect();
}

async function Task1(): Promise<void> {
  await GetContent(`CREATE DATABASE IF NOT EXISTS ${DATABASE};`);
}
async function Task2(): Promise<void> {
  //獲取各股上市總表
  for (const com of companies) {
    await GetContent(`
    CREATE TABLE IF NOT EXISTS ${DATABASE}.${com['公司簡稱']}
    (
      證券代號 VARCHAR(64),
      證券名稱 VARCHAR(64),
      日期 VARCHAR(64),
      成交股數 VARCHAR(64),
      成交金額 VARCHAR(64),
      開盤價 VARCHAR(64),
      最高價 VARCHAR(64),
      最低價 VARCHAR(64),
      收盤價 VARCHAR(64),
      漲跌價差 VARCHAR(64),
      成交筆數 VARCHAR(64)
    )CHARACTER SET = utf8;
    `);
    const entity = new technicalImple();
    let counter = 1;
    for (const timp of timestemp) {
      let raw: 單日盤後資訊[] = [];
      await sleep(3 * 1000);
      try {
        raw = (await entity.GETMonthStockStats(com['公司代號'], timp)).data;
      } catch (error) {
        console.error(`${com['公司代號']}, ${timp} - 獲取失敗`);
      }
      console.log(
        `${com['公司代號']}${com['公司簡稱']} - ${counter++}/${
          timestemp.length
        }`
      );
      for (const index in raw) {
        await GetContent(`
        INSERT INTO ${DATABASE}.${com['公司簡稱']}
        VALUES
        (
          "${raw[index].證券代號}",
          "${raw[index].證券名稱}",
          "${NormalizeYear(raw[index].日期)}",
          "${raw[index].成交股數}",
          "${raw[index].成交金額}",
          "${raw[index].開盤價}",
          "${raw[index].最高價}",
          "${raw[index].最低價}",
          "${raw[index].收盤價}",
          "${raw[index].漲跌價差}",
          "${raw[index].成交筆數}"
        ) ON DUPLICATE KEY UPDATE 
        證券代號 = "${raw[index].證券代號}",
        證券名稱 = "${raw[index].證券名稱}",
        日期 = "${NormalizeYear(raw[index].日期)}",
        成交股數 = "${raw[index].成交股數}",
        成交金額 = "${raw[index].成交金額}",
        開盤價 = "${raw[index].開盤價}",
        最高價 = "${raw[index].最高價}",
        最低價 = "${raw[index].最低價}",
        收盤價 = "${raw[index].收盤價}",
        漲跌價差 = "${raw[index].漲跌價差}",
        成交筆數 = "${raw[index].成交筆數}";
        `);
      }
    }
    await GetContent(`
    UPDATE Dashboard.上市公司資訊
    SET 包含歷史資料 = true
    WHERE 公司代號 = "${com['公司代號']}";
    `);
  }
}

/**
 * 計算時間陣列
 * @param sYear  從幾年開始  例:'2010'。
 * @param sMonth 從幾月開始  例:'01'。
 * @returns string[]  [ "20100101","20100201".... ]
 */
function GetTimeStemp(sYear: string, sMonth: string): string[] {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const result: string[] = [];
  let tmpYear = parseInt(sYear);
  let tmpMonth = parseInt(sMonth);
  while (tmpYear < year + 1) {
    while (tmpMonth < 13) {
      const mon = tmpMonth > 9 ? `${tmpMonth}` : `0${tmpMonth}`;
      result.push(tmpYear.toString() + mon + '01');
      tmpMonth++;
      if (tmpYear === year && tmpMonth > month) {
        tmpYear = 9999;
        tmpMonth = 9999;
      }
    }
    tmpMonth = 1;
    tmpYear++;
  }
  return result;
}
