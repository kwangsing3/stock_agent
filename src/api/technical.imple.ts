import {單月個股歷史資料} from '../model/單月個股歷史資料';
import {單日盤後資訊} from '../model/每日盤後資訊';
import {GET} from '../utility/httpmethod.mod';
import {技術面操作_inter} from './technical.inter';

export default class implements 技術面操作_inter {
  async GETTaiwanTodayStats(): Promise<單日盤後資訊[]> {
    const targetURL =
      'https://openapi.twse.com.tw/v1/exchangeReport/STOCK_DAY_ALL';
    let raw = await GET(targetURL);
    raw = raw['data'];
    const result: 單日盤後資訊[] = [];
    for (const key of raw) {
      const tmp: 單日盤後資訊 = key;
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
  ): Promise<單月個股歷史資料> {
    const targetURL = `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${date}&stockNo=${code}`;
    let raw = await GET(targetURL);
    raw = raw['data'];
    return new 單月個股歷史資料(raw);
  }
}
