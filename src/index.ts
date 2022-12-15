import {emit} from 'process';
import config from './config';
import rankMod from './module/rank.class';
import {CloseConnect, ConnectToDB} from './service/dbhandler.mod';
/*
  src/entry/*.index.ts
    1. 獲取每日盤後資料
    2. 獲取個股的單月歷史資料
    3. .....
*/

async function main() {
  const ent = new rankMod();
  await ent.GetTurnOverRank();

  console.log();
}
main();
