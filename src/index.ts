/*
  src/entry/*.index.ts
    1. 獲取每日盤後資料
    2. 獲取個股的單月歷史資料
    3. .....
*/

import {GetStockByCode} from './service/mongoDbhandler.mod';

async function main() {
  //const ent = new rankMod();
  //await ent.GetTurnOverRank();

  const raw = await GetStockByCode('0050');
  console.log();
}
main();
