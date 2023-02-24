import config from '../config';
import graphqlFunc from '../utility/graphql.func';
import {GET} from '../utility/httpmethod.mod';

try {
  Task();
} catch (error) {
  console.error(error);
}

export async function Task() {
  console.log('--獲取公司總表--')
  const raw = await Task2();
  await Task3(raw);
  console.log(`上市公司資料獲取完成 - 總共${raw.length}筆`);
}

async function Task2() {
  //獲取各股上市總表
  const result: 公司基本資訊[] = [];
  const urls = 'https://openapi.twse.com.tw/v1/opendata/t187ap03_L';
  const raw: 公司基本資訊[] = (await GET(urls))['data'];
  for (const key of raw) {
    result.push(key);
  }
  return result;
}
async function Task3(compies: 公司基本資訊[]) {
  const len = compies.length;
  for (const index in compies) {
    try {
      await graphqlFunc(
        config.GraphQLHost,
        `
          mutation ($input: NewStock!){
            createStock(input: $input){
              code
              name
            }
          }
        `,
        {
          input: {
            code: compies[index].公司代號,
            name: compies[index].公司簡稱,
          },
        }
      );
    } catch (error) {
      continue;
    }
    console.log(`更新公司資訊 ${compies[index].公司代號}${compies[index].公司簡稱} (${index+1} / ${len})`)
  }
}

//公司基本資料
interface 公司基本資訊 {
  出表日期: string;
  公司代號: string;
  公司名稱: string;
  公司簡稱: string;
  外國企業註冊地國: string;
  產業別: string;
  住址: string;
  營利事業統一編號: string;
  董事長: string;
  總經理: string;
  發言人: string;
  發言人職稱: string;
  代理發言人: string;
  總機電話: string;
  成立日期: string;
  上市日期: string;
  普通股每股面額: string;
  實收資本額: string;
  私募股數: string;
  特別股: string;
  編制財務報表類型: string;
  股票過戶機構: string;
  過戶電話: string;
  過戶地址: string;
  簽證會計師事務所: string;
  簽證會計師1: string;
  簽證會計師2: string;
  英文簡稱: string;
  英文通訊地址: string;
  傳真機號碼: string;
  電子郵件信箱: string;
  網址: string;
  包含歷史資料: string;
}
