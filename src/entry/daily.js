import { GETDailyStats } from "./func/獲取每日盤後總表.js";

/*
  src/entry/*.index.js
    1. 獲取每日盤後資料
    2. 獲取個股的單月歷史資料
    3. .....
*/
(async ()=>{
  
  //
  //
  //
  const raw = await GETDailyStats();
  console.log(raw)
  //
  //
  //
  //
})().catch((err)=>{
  console.error(err);
});
