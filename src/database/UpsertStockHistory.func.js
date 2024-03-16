import { Upsert } from '../utility/sql.mod.js';

/**
 * 
 * @param {*} code 
 * @param {*} date 
 * @param {*} input 
 * {
    證券代號: string;
    證券名稱: string;
    日期: string;
    成交股數: string;
    成交金額: string;
    開盤價: string;
    最高價: string;
    最低價: string;
    收盤價: string;
    漲跌價差: string;
    成交筆數: string;
  }
 */
export default async function UpsertStockHistory(
  code = '',
  date = '',
  input
) {
  await Upsert(
    {
      證券代號: input.證券代號,
      證券名稱: input.證券名稱,
      日期: date,
      成交股數: input.成交股數,
      成交金額: input.成交金額,
      開盤價: input.開盤價,
      最高價: input.最高價,
      最低價: input.最低價,
      收盤價: input.收盤價,
      漲跌價差: input.漲跌價差,
      成交筆數: input.成交筆數,
    },
    DATABASE_HISTORY,
    code
  );
  console.log('更新每日盤後:' + code + '日期:' + date);
}

