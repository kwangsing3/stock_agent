import {join} from 'path';
import {MonthStockStats} from '../model/stockstat';
import {WriteFileAsJSON} from '../utility/fileIO';
import {GET} from '../utility/httpmethod';

const host = 'https://www.twse.com.tw';

/*
  資料來源為直接分析twse網頁內容
*/

/**
 * 獲取個股的歷史收盤資料 (月)
 * @param code 股票代號。 例如: "0050"
 * @param date 獲取日期。(只使用月份) 例如: "20220101"
 * @returns JSON
 */
export async function GETMonthStockStatsByDate(
  code: string,
  date: string
): Promise<MonthStockStats> {
  const targetURL = `${host}/exchangeReport/STOCK_DAY?response=json&date=${date}&stockNo=${code}`;
  const raw = await GET(targetURL);
  const pat = join(__dirname, '../../../output/getStockStatByDay.json');
  await WriteFileAsJSON(pat, raw);
  const result: MonthStockStats = new MonthStockStats(raw);
  return result;
}
