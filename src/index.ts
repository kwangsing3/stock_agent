import fundamentalImple from './api/fundamental.imple';

/*
  src/entry/*.index.ts
    1. 獲取每日盤後資料
    2. 獲取個股的單月歷史資料
    3. .....
*/

async function main() {
  const entity = new fundamentalImple();
  await entity.GETAllTaiwanStockYield('20221109');
}
main();
