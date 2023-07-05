import {GetCurrentDate} from '../utility/date.mod';
import {GET} from '../utility/httpmethod';

//獲取當日盤後資料總表
export async function GETDailyStats(): Promise<
  {
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
  }[]
> {
  const targetURL =
    'https://openapi.twse.com.tw/v1/exchangeReport/STOCK_DAY_ALL';
  const raw = (await GET(targetURL))['data'];
  const result: {
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
  }[] = [];
  for (const key of raw) {
    result.push({
      證券代號: key.Code,
      證券名稱: key.Name,
      日期: GetCurrentDate(),
      成交股數: key.TradeVolume,
      成交金額: key.TradeValue,
      開盤價: key.OpeningPrice,
      最高價: key.HighestPrice,
      最低價: key.LowestPrice,
      收盤價: key.ClosingPrice,
      漲跌價差: key.Change,
      成交筆數: key.Transaction,
    });
  }
  return result;
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
