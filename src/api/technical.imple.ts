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
    const res: 單日個股歷史資料[] = [];
    for (const key of raw['data']) {
      //prefix date
      const date_spli: string[] = key[0].split('/');
      const year = (parseInt(date_spli[0]) + 1911).toString();
      res.push({
        證券代號: code,
        證券名稱: '',
        日期: `${year}${date_spli[1]}${date_spli[2]}`,
        成交股數: key[1],
        成交金額: key[2],
        開盤價: key[3],
        最高價: key[4],
        最低價: key[5],
        收盤價: key[6],
        漲跌價差: key[7],
        成交筆數: key[8],
      });
    }
    return res;
  }
}
/**
 export default interface 單日個股歷史資料 {
  證券代號: string;
  證券名稱: string;
  日期: string;
  成交股數: string;
  成交金額: string;
  開盤價: string;
  最高價: string;
  最低價: string;
  收盤價: string;
  漲跌價差: string;
  成交筆數: string;
}
 */
