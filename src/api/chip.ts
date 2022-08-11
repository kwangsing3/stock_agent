import {GET} from '../utility/httpmethod';

const host = 'https://www.twse.com.tw';

/*
  籌碼面：
      個股融資融劵表 TaiwanStockMarginPurchaseShortSale
      台灣市場整體融資融劵表 TaiwanStockTotalMarginPurchaseShortSale
      法人買賣表 TaiwanStockInstitutionalInvestorsBuySell
      台灣市場整體法人買賣表 TaiwanStockTotalInstitutionalInvestors
      外資持股表 TaiwanStockShareholding
      股東持股分級表 TaiwanStockHoldingSharesPer
      借券成交明細 TaiwanStockSecuritiesLending
      融券借券賣出表 TaiwanDailyShortSaleBalances
      證券商資訊表 SecuritiesTraderInfo  提供證券商相關資訊，用於台股分點資料表(TaiwanStockTradingDailyReport )，使用卷商代碼，查詢特定卷商所有股票進出
      台股分點資料表(query by 股票代碼) TaiwanStockTradingDailyReport
      台股分點資料表(query by 券商代碼) TaiwanStockTradingDailyReport


      *外資歷史持股變化
*/

/** 外資歷史持股變化 */
export async function GETTaiwanForignerAssest(date: string) {
  const urls = `https://www.twse.com.tw/fund/T86?date=${date}`;
  const raw = await GET(urls);
  const sample = raw['data'];
  const result: any[] = [];
  for (const key of sample['data']) {
    const tmp = {
      證券代號: key[0],
      證券名稱: key[1].replace(new RegExp(' ', 'g'), ''),
      外資買進股數: key[2],
      外資賣出股數: key[3],
      外資買賣超股數: key[4],
      投信買進股數: key[5],
      投信賣出股數: key[6],
      投信買賣超股數: key[7],
      自營商買賣超股數: key[8],
      '自營商買進股數(自行買賣)': key[9],
      '自營商賣出股數(自行買賣)': key[10],
      '自營商買賣超股數(自行買賣)': key[11],
      '自營商買進股數(避險)': key[12],
      '自營商賣出股數(避險)': key[13],
      '自營商買賣超股數(避險)': key[14],
      三大法人買賣超股數: key[15],
    };
    result.push(tmp);
  }

  return result;
}
