import { GetContent, Insert, Upsert } from '../utility/sql.mod.js';
const DATABASE_HISTORY = 'STOCK_AGENT_HISTORY';
// 
export default async function UpsertYieldHistory(data) {
  for (const input of data) {
    const tt = await GetContent(`SELECT * FROM ${DATABASE_HISTORY}.yields WHERE 股票代號 = "${input.股票代號}" AND 除權息日期 = "${input['除權息日期']}";`);
    if (tt.length > 0) {
      await GetContent(`
      UPDATE ${DATABASE_HISTORY}.yields SET
      除權息日期 = "${input['除權息日期']}",
      股票代號 = "${input['股票代號']}",
      股票名稱 = "${input['股票名稱']}",
      除權息前收盤價 = "${input['除權息前收盤價']}",
      除權息參考價 = "${input['除權息參考價']}",
      權值息值 = "${input['權值息值']}",
      權息 = "${input['權息']}",
      開盤競價基準 = "${input['開盤競價基準']}",
      減除股利參考價 = "${input['減除股利參考價']}",
      最近一次申報每股淨值 = "${input['最近一次申報每股淨值']}",
      最近一次申報每股盈餘 = "${input['最近一次申報每股盈餘']}"
      WHERE 股票代號 = "${input.股票代號}" AND 除權息日期 = "${input.除權息日期}";
      `);
    } else {
      await Insert(
        {
          除權息日期: input['除權息日期'],
          股票代號: input['股票代號'],
          股票名稱: input['股票名稱'],
          除權息前收盤價: input['除權息前收盤價'],
          除權息參考價: input['除權息參考價'],
          權值息值: input['權值息值'],
          權息: input['權息'],
          開盤競價基準: input['開盤競價基準'],
          減除股利參考價: input['減除股利參考價'],
          最近一次申報每股淨值: input['最近一次申報每股淨值'],
          最近一次申報每股盈餘: input['最近一次申報每股盈餘'],
        },
        DATABASE_HISTORY,
        "yields",
      );
    }
    console.log('新增除權息紀錄:' + input.股票代號);
  }
}

