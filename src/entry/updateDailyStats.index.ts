import {CloseConnect, ConnectToDB, GetContent} from '../service/dbhandler.mod';
import config from '../config';
import {DailyStockStat} from '../model/stockstat.class';
import technicalImple from '../api/technical.imple';

const DATABASE = '每日資訊';
const TABLE = '今日盤後資料';

try {
  Task();
} catch (error) {
  console.error(error);
}

export async function Task() {
  await Task1();
  const raw = await Task2();
  await Task3(raw);
  console.log('今日盤後資料獲取完成。');
}

//1. 清除資料庫，並重新建造
//2. 獲取盤後資料
//3. 寫入資料庫

async function Task1() {
  await ConnectToDB(
    config.MariaDB.host,
    config.MariaDB.username,
    config.MariaDB.password,
    `${DATABASE}`
  );
  let query = `DROP TABLE ${DATABASE}.${TABLE};`;
  await GetContent(query);
  query = `CREATE TABLE IF NOT EXISTS ${DATABASE}.${TABLE} 
  (
    Code  VARCHAR(128),
    Name  VARCHAR(128),
    date  VARCHAR(128),
    TradeVolume  VARCHAR(128),
    TradeValue  VARCHAR(128),
    OpeningPrice  VARCHAR(128),
    HighestPrice  VARCHAR(128),
    LowestPrice  VARCHAR(128),
    ClosingPrice  VARCHAR(128),
    Changes  VARCHAR(128),
    Transaction  VARCHAR(128)
  );`;
  await GetContent(query);
  await CloseConnect();
  console.log('重建每日盤後資料庫');
}
async function Task2() {
  const entity = new technicalImple();
  const raw = await entity.GETTaiwanTodayStats();
  console.log('完成獲取盤後資料');
  return raw;
}
async function Task3(input: any) {
  await ConnectToDB(
    config.MariaDB.host,
    config.MariaDB.username,
    config.MariaDB.password,
    `${DATABASE}`
  );
  for (const key of input) {
    const data = new DailyStockStat(key);
    const query = `INSERT INTO ${DATABASE}.${TABLE} 
    VALUES (
      '${data.Code}',
      '${data.Name}',
      '${data.date}',
      '${data.TradeVolume}',
      '${data.TradeValue}',
      '${data.OpeningPrice}',
      '${data.HighestPrice}',
      '${data.LowestPrice}',
      '${data.ClosingPrice}',
      '${data.Change}',
      '${data.Transaction}'
    )ON DUPLICATE KEY UPDATE date = "${key.date}";`;
    await GetContent(query);
  }
  await CloseConnect();
}
