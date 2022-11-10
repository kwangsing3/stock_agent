export interface 技術面操作_inter {
  /**
   * 獲取今天的所有盤後資訊
   * @param params
   */
  GETTaiwanTodayStats(): Promise<每日盤後資訊[]>;
  /**
   * 獲取個股的歷史收盤資料 (月)
   * @param code 股票代號。 例如: "0050"
   * @param date 獲取日期。(只使用月份) 例如: "20220101"
   * @returns JSON
   */
  GETMonthStockStatsByDate(
    code: string,
    date: string
  ): Promise<單月個股歷史資料>;
}
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
 * 單月的個股歷史資料
 */
export class 單月個股歷史資料 {
  /**property**/
  stat = '';
  date = '';
  title = '';
  fields: string[] = [];
  data: 每日盤後資訊[] = [];
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
      const list: 每日盤後資訊[] = [];
      for (const key of raw['data']) {
        const tmp = new 每日盤後資訊();
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

//單個公司的每日盤後資料
export class 每日盤後資訊 {
  constructor(raw?: unknown) {
    Object.assign(this, raw);
  }
  證券代號 = ''; //證券代號
  證券名稱 = ''; //證券名稱
  日期 = ''; //日期
  成交股數 = ''; //成交股數
  成交金額 = ''; //成交金額
  開盤價 = ''; //開盤價
  最高價 = ''; //最高價
  最低價 = ''; //最低價
  收盤價 = ''; //收盤價
  漲跌價差 = ''; //漲跌價差
  成交筆數 = ''; //成交筆
}
