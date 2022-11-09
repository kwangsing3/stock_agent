export default interface 基本面操作_inter {
  msg: string;
  /**
  個股綜合損益表
  * @param stockid 個股代號
  * @param Yseason 年度季別，例如：20154
  * @returns JSON
  */
  GETTaiwanStockFinancialStatements(
    stockid: string,
    Yseason: string
  ): Promise<any>;
  /**
  個股現金流量表
  * @param stockid 個股代號
  * @param Yseason 年度季別，例如：20154
  * @returns JSON
  */
  GETTaiwanCashFlowsStatement(stockid: string, Yseason: string): Promise<any>;
  /**
  獲取個股資產負債表
  * @param stockid 個股代號
  * @param Yseason 年度季別，例如：20154
  * @returns JSON
  */
  GETTaiwanStockBalanceSheet(stockid: string, Yseason: string): Promise<any>;
  /**
   * 獲取營業收入
   * @param stockid
   * @param Yseason
   * @returns
   */
  GETTaiwanRevenue(stockid: string, Yseason: string): Promise<any>;
  /** 個股股本*/
  GETTaiwanCommonStock(stockid: string, Yseason: string): Promise<any>;
  /*個股年營業收入年增率*/
  GETTaiwanStockYearRevenue(stockid: string, Yseason: string): Promise<any>;
  /**
   * 獲取個股殖利率，本益比，股價淨值比。
   * @param date
   * @returns
   */
  GETTaiwanStockYield(date: string): Promise<any>;
}
/*
  基本面功能:
  三大報表：
  * 資產負債表 GETTaiwanStockBalanceSheet
  * 綜合損益表 TaiwanStockFinancialStatements
  * 現金流量表 TaiwanCashFlowsStatement

  綜合損益趨勢：
  * 營業收入
    營業毛利
    稅後純益
    每股盈餘

  其他表：
  * 殖利率
    股利政策表 TaiwanStockDividend
    除權除息結果表 TaiwanStockDividendResult
    月營收表 TaiwanStockMonthRevenue
    減資恢復買賣參考價格 TaiwanStockCapitalReductionReferencePrice
*/

//#region  三大報表
