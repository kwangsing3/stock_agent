import { CloseConnect, ConnectToDB } from '../utility/sql.mod.js'
import { GETDailyStats } from "../func/獲取每日盤後總表.js"
import DBinit from '../database/dbInits.func.js'
import SetUnknowCompany from '../database/SetUnknowCompany.func.js'
import UpsertStockHistory from '../database/UpsertStockHistory.func.js'
import { Process } from '../func/補足缺少的交易資料.func.js'
import { GetDBCompany } from '../database/getDBCompany.func.js'
/*
    腳本邏輯:
    獲取每天盤後資料 -> 歸類公司紀錄(如果不認識就新增進總表) -> 補正缺少的歷史盤後資訊 -> 更新其餘統計表
*/


(async () => {
  console.log("---執行每日流程")
  await ConnectToDB('localhost', 'root', 'manager1', '')
  1; //### 固定初始話資料庫表單
  await DBinit();

  await Process();
  return
  2; //### 獲取每天盤後資料
  const companysINDB = await GetDBCompany();
  const data = await GETDailyStats();
  const missCom = CompareUnkownCompany(data, companysINDB); //比對不認識的公司
  for (const key of missCom) await SetUnknowCompany(key)
  console.log(`新增未追蹤的公司共${missCom.length}項`);
  //###歸納盤後資料, 執依照公司代號寫入每日的盤後資料進資料庫
  for (const key of data) await UpsertStockHistory(key.證券代號, key.日期, key)
  3; //開始比對缺少交易資料的公司 
  await Process();

})().catch((err) => {
  console.error(err)
}).finally(async () => {
  await CloseConnect();
  console.log("---退出DB資料庫")
})


//篩選出未歸類的公司
function CompareUnkownCompany(DailyStat, Companies) {
  const res = [];
  for (const key of DailyStat) {
    let skip = false;
    for (const ii of Companies) {
      if (ii.公司代號 === key.證券代號 && ii.公司簡稱 === key.證券名稱) {
        skip = true;
        break;
      }
    }
    if (skip) continue;
    else
      res.push({
        證券代號: key.證券代號,
        證券名稱: key.證券名稱,
      });
  }
  return res;
}

