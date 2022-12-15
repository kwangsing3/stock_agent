//成交量排行
interface RankModule {
  /**
   * 獲取一個月內交易量排行
   */
  GetTurnOverRank(): string[];
}

export default class implements RankModule {
  GetTurnOverRank(): string[] {
    throw new Error('Method not implemented.');
  }
}
