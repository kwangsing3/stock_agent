import 籌碼面操作_inter, {公司籌碼面} from './chip.inter';
import {GET} from '../utility/httpmethod.mod';

export default class implements 籌碼面操作_inter {
  async GETTaiwanForignerAssest(date: string): Promise<公司籌碼面[]> {
    const host = 'https://www.twse.com.tw';
    const urls = `${host}/fund/T86?date=${date}`;
    const raw = await GET(urls);
    const sample = raw['data'];
    const result: 公司籌碼面[] = [];
    for (const key of sample['data']) {
      result.push({
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
      });
    }
    return result;
  }
}
