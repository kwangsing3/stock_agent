import 單日個股歷史資料 from '../model/單日個股歷史資料.inter';
import {GET} from '../utility/httpmethod.mod';
import {技術面操作_inter} from './technical.inter';

export default class implements 技術面操作_inter {
  async GETTaiwanTodayStats(): Promise<單日個股歷史資料[]> {
    const targetURL =
      'https://openapi.twse.com.tw/v1/exchangeReport/STOCK_DAY_ALL';
    let raw = await GET(targetURL);
    raw = raw['data'];
    const result: 單日個股歷史資料[] = [];
    for (const key of raw) {
      const tmp: 單日個股歷史資料 = key;
      const today = new Date();
      tmp.日期 =
        today.getFullYear().toString() +
        (today.getMonth() + 1).toString() +
        today.getDate().toString();
      result.push(tmp);
    }
    return result;
  }

  async GETMonthStockStats(
    code: string,
    date: string
  ): Promise<單日個股歷史資料[]> {
    const targetURL = `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${date}&stockNo=${code}`;
    let raw = await GET(targetURL);
    raw = raw['data'];
    return raw;
  }
}
