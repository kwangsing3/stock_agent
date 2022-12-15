import {單月個股歷史資料} from '../model/單月個股歷史資料';
import {單日盤後資訊} from '../model/每日盤後資訊';

export interface 技術面操作_inter {
  /**
   * 獲取今天的所有個股盤後資訊
   * @param params
   */
  GETTaiwanTodayStats(): Promise<單日盤後資訊[]>;
  /**
   * 獲取個股的歷史收盤資料 (月)
   * @param code 股票代號。 例如: "0050"
   * @param date 獲取日期。(需傳入日期但只使用月份) 例如: "20220101"
   * @returns JSON，回傳開盤日紀錄每個月約20天左右。
   */
  GETMonthStockStats(code: string, date: string): Promise<單月個股歷史資料>;
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
