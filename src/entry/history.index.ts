import technicalImple from '../api/technical.imple';
import config from '../config';
import 單日個股歷史資料 from '../model/單日個股歷史資料.inter';
import graphqlFunc from '../utility/graphql.func';
import {sleep} from '../utility/httpmethod.mod';

// const timestemp = GetTimeStemp('2010', '01'); //時間陣列
const timestemp = GetTimeStemp('2023', '02'); //時間陣列
const companies: {公司代號: string; 公司簡稱: string}[] = []; //公司資料
try {
  Task();
} catch (error) {
  console.error(error);
}

export async function Task() {
  await Task1();
  await task3();
  console.log('上市公司資料獲取完成。');
}

//獲取各股上市總表
async function Task1() {
  const raw = await graphqlFunc(
    config.GraphQLHost,
    `
      query {
        stock(code:""){
          code
          name
        }
      }
    `
  );
  const res = raw['data']['data'];
  const coms: {name: string; code: string}[] = res['stock'];
  for (const key of coms) {
    companies.push({
      公司代號: key.code,
      公司簡稱: key.name,
    });
  }
  return;
}

async function task3() {
  const entity = new technicalImple();

  for (const com of companies) {
    let counter = 1;
    for (const timp of timestemp) {
      let records: 單日個股歷史資料[] = [];
      await sleep(3 * 1000);
      try {
        records = await entity.GETMonthStockStats(com['公司代號'], timp);
        //prefix name
        for (const index in records) records[index].證券名稱 = com['公司簡稱'];
      } catch (error) {
        console.error(`${com['公司代號']}${com['公司簡稱']}, ${timp} - 獲取失敗`);
      }
      let skip = false;
      for (const record of records) {
        const resp = await graphqlFunc(
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
              code: record.證券代號,
              name: record.證券名稱,
              date: record.日期,
              openPrice: record.開盤價,
              closePrice: record.收盤價,
              highestPrice: record.最高價,
              lowestPrice: record.最低價,
              priceDiff: record.漲跌價差,
              tradingVolume: record.成交筆數,
              transAmount: record.成交股數,
              tradingPrice: record.成交金額,
            },
          }
        );
        if (typeof resp === 'string' && resp.includes('failed')) {
          console.error(`${com['公司代號']}${com['公司簡稱']} + ${resp}`);
          skip = true;
          break;
        }
      }
      console.log(
        `${com['公司代號']}${com['公司簡稱']} - ${counter++}/${
          timestemp.length
        }可獲取的時間段`
      );
      if (skip) break;
    }
  }
}
/**
 * 計算時間陣列
 * @param sYear  從幾年開始  例:'2010'。
 * @param sMonth 從幾月開始  例:'01'。
 * @returns string[]  [ "20100101","20100201".... ]
 */
function GetTimeStemp(sYear: string, sMonth: string): string[] {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const result: string[] = [];
  let tmpYear = parseInt(sYear);
  let tmpMonth = parseInt(sMonth);
  while (tmpYear < year + 1) {
    while (tmpMonth < 13) {
      const mon = tmpMonth > 9 ? `${tmpMonth}` : `0${tmpMonth}`;
      result.push(tmpYear.toString() + mon + '01');
      tmpMonth++;
      if (tmpYear === year && tmpMonth > month) {
        tmpYear = 9999;
        tmpMonth = 9999;
      }
    }
    tmpMonth = 1;
    tmpYear++;
  }
  return result;
}
