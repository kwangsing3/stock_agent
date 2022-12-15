// 各種個股的統計資訊

import {單日盤後資訊} from '../model/每日盤後資訊';
import {GetContent, GetNameByCode} from '../service/dbhandler.mod';

interface StatMode {
  /**
   * 獲取近期平均交易量 (近期: 最近30筆交易日紀錄)
   * @param code 公司代號 例如: "0050"
   */
  GetRecentTurnOverByCode(code: string, amount?: number): Promise<number>;
  /**
   * 獲取近期平均交易量 (近期: 最近30筆交易日紀錄)
   * @param companyName 公司名稱 例如: "元大50"
   */
  GetRecentTurnOverByName(
    companyName: string,
    amount?: number
  ): Promise<number>;
}

export default class implements StatMode {
  async GetRecentTurnOverByName(
    companyName: string,
    amount?: number
  ): Promise<number> {
    amount = amount === undefined || amount < 0 ? 30 : amount;
    amount = amount > 1000 ? 1000 : amount; //Max:1000
    const raw: 單日盤後資訊[] = await GetContent(`
    SELECT * FROM 歷史資料.${companyName} 
    ORDER BY 日期 DESC
    LIMIT ${amount};
    `);
    let res = 0;
    for (const key of raw) {
      try {
        res += parseInt(key.成交筆數);
      } catch (error) {
        continue;
      }
    }
    return res / amount;
  }
  async GetRecentTurnOverByCode(
    code: string,
    amount?: number
  ): Promise<number> {
    const name = await GetNameByCode(code);
    return this.GetRecentTurnOverByName(name, amount);
  }
}
