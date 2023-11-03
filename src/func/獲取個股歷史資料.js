import {GET} from '../utility/httpmethod.js';

//獲取一周個股歷史資料
export default async function GETStockHistorysWeek(
  code,
  date
){
  const targetURL = `https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=${date}&stockNo=${code}`;
  const raw = (await GET(targetURL))['data'];
  const res = [];
  const title = raw?.['title'];
  const stName = title.split(' ')[2];

  for (const key of raw['data']) {
    //prefix date
    const date_spli = key[0].split('/');
    const year = (parseInt(date_spli[0]) + 1911).toString();
    res.push({
      證券代號: code,
      證券名稱: stName,
      日期: `${year}${date_spli[1]}${date_spli[2]}`,
      成交股數: key[1],
      成交金額: key[2],
      開盤價: key[3],
      最高價: key[4],
      最低價: key[5],
      收盤價: key[6],
      漲跌價差: key[7],
      成交筆數: key[8],
    });
  }
  return res;
}
