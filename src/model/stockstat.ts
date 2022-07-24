/**
 * 單月的個股歷史資料
 */
export class MonthStockStats {
  /**property**/
  stat = '';
  date = '';
  title = '';
  fields: string[] = [];
  data: DailyStockStat[] = [];
  notes: string[] = [];

  /**method**/
  constructor(raw: any) {
    const getAndReturn = (data: any, key: string) => {
      return Object.prototype.hasOwnProperty.call(data, key) ? data[key] : '';
    };
    this.stat = getAndReturn(raw, 'stat');
    this.date = getAndReturn(raw, 'date');
    this.title = getAndReturn(raw, 'title');
    // DailyStats 每日股價資料
    if (Object.prototype.hasOwnProperty.call(raw, 'data')) {
      const tt = this.title.split(' ');
      const CompanyCode = tt[1];
      const CompanyName = tt[2];
      const list: DailyStockStat[] = [];
      for (const key of raw['data']) {
        const tmp = new DailyStockStat();
        tmp.Code = CompanyCode;
        tmp.Name = CompanyName;
        tmp.date = key[0];
        tmp.TradeVolume = key[1];
        tmp.TradeValue = key[2];
        tmp.OpeningPrice = key[3];
        tmp.HighestPrice = key[4];
        tmp.LowestPrice = key[5];
        tmp.ClosingPrice = key[6];
        tmp.Change = key[7];
        tmp.Transaction = key[8];
        list.push(tmp);
      }
      this.data = list;
    }
  }
}

//單個公司的每日盤後資料
export default class DailyStockStat {
  constructor(raw?: unknown) {
    Object.assign(this, raw);
  }
  Code = ''; //證券代號
  Name = ''; //證券名稱
  date = ''; //日期
  TradeVolume = ''; //成交股數
  TradeValue = ''; //成交金額
  OpeningPrice = ''; //開盤價
  HighestPrice = ''; //最高價
  LowestPrice = ''; //最低價
  ClosingPrice = ''; //收盤價
  Change = ''; //漲跌價差
  Transaction = ''; //成交筆
}
