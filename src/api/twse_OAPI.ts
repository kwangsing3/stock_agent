import DailyStockStats from '../model/stockstat';
import DayStockStats from '../model/stockstat';
import {GET} from '../utility/httpmethod';
import {twseAPI} from './twse_OpenAPIs_json';

const host = twseAPI.schemes + '://' + twseAPI.host + twseAPI.basePath;
/*
  https://openapi.twse.com.tw/  Swagger UI
*/

/**
 * 獲取今天的盤後資訊
 * @param params
 */
export async function GETTodayStats(): Promise<DayStockStats[]> {
  const targetURL = host + '/exchangeReport/STOCK_DAY_ALL';
  const raw = await GET(targetURL);
  const result: DayStockStats[] = [];
  for (const key of raw) {
    const tmp = new DailyStockStats(key);
    const today = new Date();
    tmp.date =
      today.getFullYear().toString() +
      (today.getMonth() + 1).toString() +
      today.getDate().toString();
    result.push(tmp);
  }
  return result;
}
