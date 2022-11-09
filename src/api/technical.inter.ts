import {DailyStockStat, MonthStockStats} from '../model/stockstat.class';
export default interface 技術面操作_inter {
  msg: string;
  /**
   * 獲取今天的盤後資訊
   * @param params
   */
  GETTaiwanTodayStats(): Promise<DailyStockStat[]>;
  /**
   * 獲取個股的歷史收盤資料 (月)
   * @param code 股票代號。 例如: "0050"
   * @param date 獲取日期。(只使用月份) 例如: "20220101"
   * @returns JSON
   */
  GETMonthStockStatsByDate(
    code: string,
    date: string
  ): Promise<MonthStockStats>;
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
