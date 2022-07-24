import {join} from 'path';
import {WriteFileAsJSON} from '../utility/fileIO';
import {GETTodayStats} from '../api/twse_OAPI';

export async function getTodayStats() {
  const raw = GETTodayStats();
  const pat = join(__dirname, '../../output/getTodayStats.json');
  await WriteFileAsJSON(pat, raw);
  console.log('今日盤後資料獲取完成。');
}

getTodayStats();
