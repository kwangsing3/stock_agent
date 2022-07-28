import {join} from 'path';
import DailyStockStats, {MonthStockStats} from '../model/stockstat';
import {WriteFileAsJSON} from '../utility/fileIO';
import {GET} from '../utility/httpmethod';
import {twseAPI} from './twse_OpenAPIs_json';

const OPIhost = twseAPI.schemes + '://' + twseAPI.host + twseAPI.basePath;
const host = 'https://www.twse.com.tw';
/*
  技術面：
    台股總覽 TaiwanStockInfo¶ 這張資料表主要是列出台灣所有上市上櫃的股票名稱，代碼和產業類別
    個股股價日成交資訊 TaiwanStockPrice
    台灣還原股價資料表 TaiwanStockPriceAdj
    台灣股價歷史逐筆資料表 TaiwanStockPriceTick
    個股PER、PBR資料表 TaiwanStockPER
    加權指數 TaiwanVariousIndicators5Seconds
    當日沖銷交易標的及成交量值 TaiwanStockDayTrading
    加權、櫃買報酬指數 TaiwanStockTotalReturnIndex
*/

/**
 * 獲取今天的盤後資訊
 * @param params
 */
export async function GETTaiwanTodayStats(): Promise<DailyStockStats[]> {
  const targetURL = OPIhost + '/exchangeReport/STOCK_DAY_ALL';
  let raw = await GET(targetURL);
  raw = raw['data'];
  const result: DailyStockStats[] = [];
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
  let raw = await GET(targetURL);
  raw = raw['data'];
  const result: MonthStockStats = new MonthStockStats(raw);
  return result;
}
