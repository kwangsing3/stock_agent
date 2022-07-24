import {GETTodayStats} from './api/twse_OAPI';

// 分析帶入的標頭屬性
const argv: any = (() => {
  const args: any = {};
  process.argv.slice(2).map(element => {
    const matches = element.match('--([a-zA-Z0-9]+)=(.*)');
    if (matches) {
      args[matches[1]] = matches[2].replace(/^['"]/, '').replace(/['"]$/, '');
    }
  });
  return args;
})();
if (argv['date'] === undefined || argv['stockNo'] === undefined) {
  console.error('缺少標頭屬性 --date="YYYY-MM-DD"  --stockNo=1234 ');
}
//

async function main() {
  //const result = await GETStockStatByDay('0050', '20220201');
  const raw = await GETTodayStats();
  console.log(raw);
}

main();

/*
  1. 獲取每日盤後資料
  2. 獲取個股的單月歷史資料
  3. .....
*/
