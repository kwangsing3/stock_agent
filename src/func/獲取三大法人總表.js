import { GET } from '../utility/httpmethod';

//三大法人進出總表
export default async function GETThreeGiantAssest(
  date
) {
  const urls = `https://www.twse.com.tw/rwd/zh/fund/T86?date=${date}&selectType=ALL&response=json`;
  const raw = await GET(urls);
  const sample = raw['data'];
  const result = [];
  sample['data'].forEach(key => result.push({
    "證券代號": key[0],
    "證券名稱": key[1].replace(new RegExp(' ', 'g'), ''),
    "外陸資買進股數": key[2],
    "外陸資賣出股數": key[3],
    "外陸資買賣超股數": key[4],
    "外資自營商買進股數": key[5],
    "外資自營商賣出股數": key[6],
    "外資自營商買賣超股數": key[7],
    "投信買進股數": key[8],
    "投信賣出股數": key[9],
    "投信買賣超股數": key[10],
    "自營商買賣超股數": key[11],
    "自營商買進股數": key[12],
    "自營商賣出股數": key[13],
    "自營商買賣超股數": key[14],
    "自營商買進股數": key[15],
    "自營商賣出股數": key[16],
    "自營商買賣超股數": key[17],
    "三大法人買賣超股數": key[18],
  }));
  return result;
}
