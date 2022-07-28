import {GETTaiwanForignerAssest} from './api/chip';
import {
  GETTaiwanCashFlowsStatement,
  GETTaiwanRevenue,
  GETTaiwanStockBalanceSheet,
  GETTaiwanStockFinancialStatements,
  GETTaiwanStockYearRevenue,
  GetTaiwanStockYield,
} from './api/fundamental';
import {GETMonthStockStatsByDate, GETTaiwanTodayStats} from './api/technical';
import {config} from './config';
import {CloseConnect, ConnectToDB, GetContent} from './service/dbhandler';

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
// if (argv['date'] === undefined || argv['stockNo'] === undefined) {
//   console.error('缺少標頭屬性 --date="YYYY-MM-DD"  --stockNo=1234 ');
// }
//

async function main() {
  // const raw = await GetTaiwanStockYield(/*'2330'*/ '20150206');
  // console.log(raw);
  await ConnectToDB(
    config.MariaDB.host,
    config.MariaDB.username,
    config.MariaDB.password,
    'Dashboard'
  );

  await GetContent(
    'INSERT INTO Dashboard.Dashboard (Name) VALUES("Greeting");'
  );
  await CloseConnect();
}

main();

/*
  1. 獲取每日盤後資料
  2. 獲取個股的單月歷史資料
  3. .....
*/
