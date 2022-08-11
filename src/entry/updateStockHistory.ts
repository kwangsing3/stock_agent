import {GETMonthStockStatsByDate} from '../api/technical';
import {config} from '../config';
import {CloseConnect, ConnectToDB, GetContent} from '../service/dbhandler';
import {SetRatePerMin} from '../utility/httpmethod';

const DATABASE = '歷史資料';
const timestemp = GetTimeStemp('2010', '01'); //時間陣列
const companies: {公司代號: string; 公司簡稱: string}[] = []; //公司資料
SetRatePerMin(36);
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
  SELECT 公司代號, 公司簡稱 FROM Dashboard.上市公司資訊;
  `);
  for (const key of cList) {
    companies.push({
      公司代號: key['公司代號'],
      公司簡稱: key['公司簡稱'],
    });
  }
  await Task1();
  const raw = await Task2();
  console.log('上市公司資料獲取完成。');
}

async function Task1() {
  await ConnectToDB(
    config.MariaDB.host,
    config.MariaDB.username,
    config.MariaDB.password,
    ''
  );
  await GetContent(`CREATE DATABASE IF NOT EXISTS ${DATABASE};`);
  await CloseConnect();
}
async function Task2() {
  await ConnectToDB(
    config.MariaDB.host,
    config.MariaDB.username,
    config.MariaDB.password,
    `${DATABASE}`
  );
  //獲取各股上市總表
  for (const com of companies) {
    await GetContent(`
    CREATE TABLE IF NOT EXISTS 歷史資料.${com['公司簡稱']}
    (
      Code VARCHAR(64),
      Name VARCHAR(64),
      date VARCHAR(64),
      TradeVolume VARCHAR(64),
      TradeValue VARCHAR(64),
      OpeningPrice VARCHAR(64),
      HighestPrice VARCHAR(64),
      LowestPrice VARCHAR(64),
      ClosingPrice VARCHAR(64),
      Changes VARCHAR(64),
      Transaction VARCHAR(64)
    );
    `);
    for (const timp of timestemp) {
      const raw = (await GETMonthStockStatsByDate(com['公司代號'], timp)).data;
      for (const key of raw) {
        await GetContent(`
        INSERT INTO 歷史資料.${com['公司簡稱']}
        VALUES
        (
          "${key.Code}",
          "${key.Name}",
          "${key.date}",
          "${key.TradeVolume}",
          "${key.TradeValue}",
          "${key.OpeningPrice}",
          "${key.HighestPrice}",
          "${key.LowestPrice}",
          "${key.ClosingPrice}",
          "${key.Change}",
          "${key.Transaction}"
        ) ON DUPLICATE KEY UPDATE date = "${key.date}";
        `);
      }
      //
      //
    }
  }
  await CloseConnect();
  return {};
}

function GetTimeStemp(sYear: string, sMonth: string) {
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
