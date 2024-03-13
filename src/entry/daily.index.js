import DBinitFunc from "../module/daily/DBinit.func.js"
import {CloseConnect, ConnectToDB} from '../utility/sql.mod.js'
import { GETDailyStats } from "../func/獲取每日盤後總表.js"
import { SetUnknowCompany, UpsertStockHistory } from "../service/dbhandler.mod.js"
import getDBCompanyFunc from "../func/getDBCompany.func.js"
/*
    腳本邏輯:
    獲取每天盤後資料 -> 歸類公司紀錄(如果不認識就新增進總表) -> 補正缺少的歷史盤後資訊 -> 更新其餘統計表
*/

(async ()=>{
    console.log("---執行每日流程")
    await ConnectToDB('localhost','root','manager1','')
    
    1; //### 固定初始話資料庫表單
    await DBinitFunc();
    
    2; //### 獲取每天盤後資料
    const companysINDB = await getDBCompanyFunc();
    const data = await GETDailyStats();
    const missCom = FetchUnkownCompany(data, companysINDB); //尋找不認識的公司
    for(const key of missCom) await SetUnknowCompany(key)
    
    console.log(`新增未追蹤的公司共${missCom.length}項`);

    3; //###歸納盤後資料, 執依照公司代號寫入每日的盤後資料進資料庫
    for(const key of data)await UpsertStockHistory(key.證券代號, key.日期, key)
    
})().catch((err)=>{
  console.error(err)
})
.finally(async ()=>{
  await CloseConnect();
  console.log("---退出DB資料庫")
})
//整理出未歸類的公司
function FetchUnkownCompany(DailyStat, Companies){
  const res= [];
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

