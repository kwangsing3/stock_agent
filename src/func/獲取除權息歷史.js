import { GET, POST } from '../utility/httpmethod.js';


//https://www.twse.com.tw/exchangeReport/TWT49U?strDate=20200101&endDate=20240301



/**
 * 獲取全部除權息資訊 
 * @param date
 * @returns
 */
export async function GETAllTaiwanStockYield(date) {
  const cur = new Date();
  const urls = `https://www.twse.com.tw/exchangeReport/TWT49U?strDate=20230901&endDate=${cur.getFullYear()}${cur.getMonth() + 1}${cur.getDate()}`;
  const raw = await GET(urls);
  const sample = raw['data'];
  const res = [];
  if (!Array.isArray(sample['data'])) {
    console.log(`${date} 沒有除權息資料`)
    return [];
  }
  sample['data'].forEach(key => {
    const val = parseFloat(key[5]).toFixed(2);
    res.push({
      "資料日期": key[0],
      "股票代號": key[1],
      "股票名稱": key[2],
      "除權息前收盤價": key[3],
      "除權息參考價": key[4],
      "權值息值": val.toString(),
      "權息": key[6],
      "漲停價格": key[7],
      "跌停價格": key[8],
      "開盤競價基準": key[9],
      "減除股利參考價": key[10],
      "最近一次申報每股淨值": key[13],
      "最近一次申報每股盈餘": key[14],
    })
  });
  return res;
}
