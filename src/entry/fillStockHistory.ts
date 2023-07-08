// 填充個股歷史資訊

import GETStockHistorysWeek from '../func/獲取個股歷史資料';
import {
  DB_GETStockHistory,
  GetDBCompany,
  UpsertStockHistory,
} from '../service/dbhandler.mod';
import {SetRatePerMin} from '../utility/httpmethod';
import {CloseConnect, ConnectToDB} from '../utility/sql.mod';

(async () => {
  SetRatePerMin(10);
  await ConnectToDB('localhost', 'root', 'manager1', '');
  try {
    const Coms = await GetDBCompany();
    // const timestemp = GetTimeStemp('2010', '01'); //時間陣列
    const timestemp = GetTimeStemp('2023', '02'); //時間陣列

    for (const Com of Coms) {
      //比對缺少的日期
      const noDate: string[] = [];
      const his = await DB_GETStockHistory(Com.公司代號);
      for (const dd of timestemp) {
        let skip = false;
        for (const hh of his) {
          if (hh.日期 === dd) {
            skip = true;
            break;
          }
        }
        if (!skip) noDate.push(dd);
      }
      //搜尋缺少的日期後加入
      for (const date of noDate) {
        const data = await GETStockHistorysWeek(Com.公司代號, date);
        for (const key of data) {
          await UpsertStockHistory(Com.公司代號, key.日期, key);
        }
      }
      console.log();
    }

    console.log();
  } catch (error) {
    console.error(error);
  }
  await CloseConnect();
})();

/**
 * 計算時間陣列
 * @param sYear  從幾年開始  例:'2010'。
 * @param sMonth 從幾月開始  例:'01'。
 * @returns string[]  [ "20100101","20100201".... ]
 */
function GetTimeStemp(sYear: string, sMonth: string): string[] {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const result: string[] = [];
  let tmpYear = parseInt(sYear);
  let tmpMonth = parseInt(sMonth);
  while (tmpYear < year + 1) {
    while (tmpMonth < 13) {
      const mon = tmpMonth > 9 ? `${tmpMonth}` : `0${tmpMonth}`;
      result.push(tmpYear.toString() + mon + '01');
      tmpMonth++;
      if (tmpYear === year && tmpMonth > month) {
        tmpYear = 9999;
        tmpMonth = 9999;
      }
    }
    tmpMonth = 1;
    tmpYear++;
  }
  return result;
}
