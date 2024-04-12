import { GET, POST } from '../utility/httpmethod.js';


//https://www.twse.com.tw/exchangeReport/TWT49U?strDate=20200101&endDate=20240301



/**
 * 獲取全部除權息資訊
 * @param date
 * @returns
 */
export async function GETAllTaiwanStockYield(date) {
  //細節備註:
  /*
    當預告表的內容同時出現於已經除息的結果表時會產生資料衝突，
    於是把結果表擺放在資料後後方，使其更新可以蓋過前一份的資料:)
  */
  const cur = new Date();
  const res = [];
  const urlsf = `https://www.twse.com.tw/rwd/zh/exRight/TWT48U?response=json`;
  const resf = (await GET(urlsf, {}, 30000))['data'];
  resf['data'].forEach(key => {
    let val = key[7].includes("尚未公告") ? "-" : parseFloat(key[7]).toFixed(2).toString();
    res.push({
      "除權息日期": key[0],
      "股票代號": key[1],
      "股票名稱": key[2],
      "除權息前收盤價": "-",
      "除權息參考價": "-",
      "權值息值": val,
      "權息": key[3],
      "開盤競價基準": "",
      "減除股利參考價": "",
      "最近一次申報每股淨值": key[11],
      "最近一次申報每股盈餘": key[12],
    })
  })
  const urls = `https://www.twse.com.tw/exchangeReport/TWT49U?strDate=${cur.getFullYear() - 1}0101&endDate=${cur.getFullYear()}${cur.getMonth() + 1}${cur.getDate()}`;
  const raw = await GET(urls, {}, 30000);
  const sample = raw['data'];

  if (!Array.isArray(sample['data'])) {
    console.log(`${date} 沒有除權息資料`)
    return [];
  }
  sample['data'].forEach(key => {
    const val = parseFloat(key[5]).toFixed(2);
    res.push({
      "除權息日期": key[0],
      "股票代號": key[1],
      "股票名稱": key[2],
      "除權息前收盤價": key[3],
      "除權息參考價": key[4],
      "權值息值": val.toString(),
      "權息": key[6],
      "開盤競價基準": key[9],
      "減除股利參考價": key[10],
      "最近一次申報每股淨值": key[13],
      "最近一次申報每股盈餘": key[14],
    })
  });
  return res;
}


//預告表:
// https://www.twse.com.tw/rwd/zh/exRight/TWT48U?response=json