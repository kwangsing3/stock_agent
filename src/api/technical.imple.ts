import {DailyStockStat, MonthStockStats} from '../model/stockstat.class';
import {GET} from '../utility/httpmethod.mod';
import 技術面操作_inter from './technical.inter';

export default class implements 技術面操作_inter {
  async GETTaiwanTodayStats(): Promise<DailyStockStat[]> {
    const targetURL =
      'https://openapi.twse.com.tw/v1/exchangeReport/STOCK_DAY_ALL';
    let raw = await GET(targetURL);
    raw = raw['data'];
    const result: DailyStockStat[] = [];
    for (const key of raw) {
      const tmp = new DailyStockStat(key);
      const today = new Date();
      tmp.date =
        today.getFullYear().toString() +
        (today.getMonth() + 1).toString() +
        today.getDate().toString();
      result.push(tmp);
    }
    return result;
  }
  async GETMonthStockStatsByDate(
    code: string,
    date: string
  ): Promise<MonthStockStats> {
    const targetURL = `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${date}&stockNo=${code}`;
    let raw = await GET(targetURL);
    raw = raw['data'];
    const result: MonthStockStats = new MonthStockStats(raw);
    return result;
  }
  msg!: string;
}
