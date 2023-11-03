import dailyMod from "../module/daily/daily.js";
/*
  src/entry/*.index.js
    1. 獲取每日盤後資料
    2. 獲取個股的單月歷史資料
    3. .....
*/
(async ()=>{
  await dailyMod();
})().catch((err)=>{
  console.error(err);
});
