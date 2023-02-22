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
  await Task2();
  //await Task3(raw);
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
// async function Task3(input: 單日個股歷史資料[]) {
//   for (const key of input) {
//     //
//   }
// }
