/*

    新腳本邏輯:
    獲取每天盤後資料 -> 歸類公司紀錄(如果不認識就新增進總表) -> 補正缺少的歷史盤後資訊 -> 更新其餘統計表

*/
import {GETDailyStats} from '../func/獲取每日盤後總表';
import 公司基本資訊 from '../model/公司基本資訊.inter';
import {
  GetDBCompany,
  SetUnknowCompany as DB_SetUnknowCompany,
  init,
} from '../service/dbhandler.mod';
import {CloseConnect, ConnectToDB} from '../utility/sql.mod';

(async () => {
  await ConnectToDB('localhost', 'root', 'manager1', '');
  await init();
  try {
    //### 獲取每天盤後資料
    const data = await GETDailyStats();

    //### 歸類公司紀錄(如果不認識就新增進總表)
    const companysINDB = await GetDBCompany();
    const missCom = FetchUnkownCompany(data, companysINDB); //尋找不認識的公司
    await DB_SetUnknowCompany(missCom);
    //2.歸納盤後資料

    //### 補正缺少的歷史盤後資訊
    //TODO: 執行依照公司代號寫入每日的盤後資料進資料庫

    //### 更新其餘統計表
    console.log();
  } catch (error) {
    console.error(error);
  }
  await CloseConnect();
})();

//整理出不認識的公司
function FetchUnkownCompany(
  DailyStat: {
    證券代號: string;
    證券名稱: string;
  }[],
  Companies: 公司基本資訊[]
): {
  證券代號: string;
  證券名稱: string;
}[] {
  const res: {
    證券代號: string;
    證券名稱: string;
  }[] = [];
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
