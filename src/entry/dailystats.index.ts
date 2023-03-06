import technicalImple from '../api/technical.imple';
import config from '../config';
import graphqlFunc from '../utility/graphql.func';
//1. 清除資料庫，並重新建造
//2. 獲取盤後資料
//3. 寫入資料庫

try {
  Task();
} catch (error) {
  console.error(error);
}

export async function Task() {
  await Task1();
  await Task2();
  //await Task3(raw);
  console.log('今日盤後資料獲取完成。');
}

async function Task1() {
  console.log('重建每日盤後資料庫');
}
async function Task2() {
  const entity = new technicalImple();
  const raw = await entity.GETTaiwanTodayStats();
  let counter = 1;
  for (const key of raw) {
    await extraProcess({
      code: key.證券代號,
      name: key.證券名稱,
    });
    await graphqlFunc(
      config.GraphQLHost,
      `
        mutation ($input: NewRecord!){
          insertRecord(input: $input){
            date
            openPrice
            closePrice
            highestPrice
            lowestPrice
            priceDiff
            tradingVolume
            transAmount
            tradingPrice
          }
        }
      `,
      {
        input: {
          code: key.證券代號,
          name: key.證券名稱,
          date: key.日期,
          openPrice: key.開盤價,
          closePrice: key.收盤價,
          highestPrice: key.最高價,
          lowestPrice: key.最低價,
          priceDiff: key.漲跌價差,
          tradingVolume: key.成交筆數,
          transAmount: key.成交股數,
          tradingPrice: key.成交金額,
        },
      }
    );
    console.log(`${counter++} / ${raw.length}`);
  }
  console.log('完成獲取盤後資料');
  return raw;
}
// async function Task3(input: 單日個股歷史資料[]) {
//   for (const key of input) {
//     //
//   }
// }

async function extraProcess(key: {code: string; name: string}) {
  //
  let skip = true;
  try {
    const raw = await graphqlFunc(
      config.GraphQLHost,
      `
      query {
        stock(code:${key.code}){
          code
          name
        }
      }
    `
    );
    const res = raw['data']['data'];
    const coms: {name: string; code: string}[] = res['stock'];
    if (coms.length > 1) skip = true;
  } catch (error: unknown) {
    skip = false;
  }
  //如果沒有獲得公司則新增進公司列表
  if (!skip) {
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
          code: key.code,
          name: key.name,
        },
      }
    );
  }
}
