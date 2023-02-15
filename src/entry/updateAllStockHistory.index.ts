import technicalImple from '../api/technical.imple';
import 單日個股歷史資料 from '../model/單日個股歷史資料.inter';
import {sleep} from '../utility/httpmethod.mod';

const timestemp = GetTimeStemp('2010', '01'); //時間陣列
const companies: {公司代號: string; 公司簡稱: string}[] = []; //公司資料
try {
  Task();
} catch (error) {
  console.error(error);
}

export async function Task() {
  //獲取公司代號資料列表
  await Task2();
  console.log('上市公司資料獲取完成。');
}

async function Task2(): Promise<void> {
  //獲取各股上市總表
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
  const month = now.getMonth();
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
