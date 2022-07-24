import {join} from 'path';
import {twseAPI} from '../api/twse_OpenAPIs_json';
import DailyStockStat from '../model/stockstat';
import {WriteFileAsJSON} from '../utility/fileIO';
import {GET} from '../utility/httpmethod';

const host = twseAPI.schemes + '://' + twseAPI.host + twseAPI.basePath;

async function getStockStatByDay() {
  const targetURL = host + '/exchangeReport/STOCK_DAY_ALL';
  const raw = await GET(targetURL);
  const pat = join(__dirname, '../../output/getTodayStats.json');
  await WriteFileAsJSON(pat, raw);
  const result: DailyStockStat[] = [];
  for (const key of raw) {
    const tmp = new DailyStockStat(key);
    result.push(tmp);
  }
  return result;
}

getStockStatByDay();
