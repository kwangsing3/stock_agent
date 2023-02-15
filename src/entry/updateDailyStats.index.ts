import technicalImple from '../api/technical.imple';
import 單日個股歷史資料 from '../model/單日個股歷史資料.inter';
//1. 清除資料庫，並重新建造
//2. 獲取盤後資料
//3. 寫入資料庫
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

async function Task1() {
  console.log('重建每日盤後資料庫');
}
async function Task2() {
  const entity = new technicalImple();
  const raw = await entity.GETTaiwanTodayStats();
  console.log('完成獲取盤後資料');
  return raw;
}
async function Task3(input: 單日個股歷史資料[]) {
  for (const key of input) {
    const data: 單日個股歷史資料 = key;
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
    )ON DUPLICATE KEY UPDATE 
    證券代號 = "${key.證券代號}",
    證券名稱 = "${key.證券名稱}",
    日期 = "${key.日期}",
    成交股數 = "${key.成交股數}",
    成交金額 = "${key.成交金額}",
    開盤價 = "${key.開盤價}",
    最高價 = "${key.最高價}",
    最低價 = "${key.最低價}",
    收盤價 = "${key.收盤價}",
    漲跌價差 = "${key.漲跌價差}",
    成交筆數 = "${key.成交筆數}"
    ;`;
  }
}
