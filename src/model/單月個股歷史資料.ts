import {單日盤後資訊} from './每日盤後資訊';

/**
 * 單月的個股歷史資料
 */
export class 單月個股歷史資料 {
  /**property**/
  stat = '';
  date = '';
  title = '';
  fields: string[] = [];
  data: 單日盤後資訊[] = [];
  notes: string[] = [];
  /**method**/
  constructor(raw: any) {
    const getAndReturn = (data: {[x: string]: any}, key: string) => {
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
      const list: 單日盤後資訊[] = [];
      for (const key of raw['data']) {
        const tmp = new 單日盤後資訊();
        tmp.證券代號 = CompanyCode;
        tmp.證券名稱 = CompanyName;
        tmp.日期 = key[0];
        tmp.成交股數 = key[1];
        tmp.成交金額 = key[2];
        tmp.開盤價 = key[3];
        tmp.最高價 = key[4];
        tmp.最低價 = key[5];
        tmp.收盤價 = key[6];
        tmp.漲跌價差 = key[7];
        tmp.成交筆數 = key[8];
        list.push(tmp);
      }
      this.data = list;
    }
  }
}
