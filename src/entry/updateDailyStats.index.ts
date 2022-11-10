import {CloseConnect, ConnectToDB, GetContent} from '../service/dbhandler.mod';
import config from '../config';
import technicalImple from '../api/technical.imple';
import {每日盤後資訊} from '../api/technical.inter';

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
async function Task3(input: 每日盤後資訊[]) {
  await ConnectToDB(
    config.MariaDB.host,
    config.MariaDB.username,
    config.MariaDB.password,
    `${DATABASE}`
  );
  for (const key of input) {
    const data = new 每日盤後資訊(key);
    const query = `INSERT INTO ${DATABASE}.${TABLE} 
    VALUES (
      '${data.證券代號}',
      '${data.證券名稱}',
      '${data.日期}',
      '${data.成交股數}',
      '${data.成交金額}',
      '${data.開盤價}',
      '${data.最高價}',
      '${data.最低價}',
      '${data.收盤價}',
      '${data.漲跌價差}',
      '${data.成交筆數}'
    )ON DUPLICATE KEY UPDATE date = "${key.日期}";`;
    await GetContent(query);
  }
  await CloseConnect();
}
