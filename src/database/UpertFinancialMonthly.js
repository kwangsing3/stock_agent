import { GetContent, Insert } from "../utility/sql.mod.js";

export async function UpsertFinancialMonthly(data, year, month) {
    const tt = await GetContent(`SELECT * FROM ${DATABASE_HISTORY}.financial WHERE 公司代號="${input.公司代號}" 
    AND 年度="${year}" AND 月份="${month}";`);
    if (raw.length > 0) {
        await GetContent(`
        UPDATE ${DATABASE_HISTORY}.financial SET
        公司代號="${data.公司代號}",
        年度="${data.年度}",
        月份="${data.月份}",
        本月營收="${data.本月營收}",
        去年同期="${data.去年同期}",
        本月增減金額="${data.本月增減金額}",
        本月增減百分比="${data.本月增減百分比}",
        本年累計="${data.本年累計}",
        去年累計="${data.去年累計}",
        去年增減金額="${data.去年增減金額}",
        去年增減百分比="${data.去年增減百分比}",
        營收變化原因說明="${data.營收變化原因說明}"
        WHERE 公司代號="${input.公司代號}" AND 年度="${year}" AND 月份="${month}";
        `);
    } else {
        await Insert(
            {
                公司代號: data.公司代號,
                年度: data.年度,
                月份: data.月份,
                本月營收: data.本月營收,
                去年同期: data.去年同期,
                本月增減金額: data.本月增減金額,
                本月增減百分比: data.本月增減百分比,
                本年累計: data.本年累計,
                去年累計: data.去年累計,
                去年增減金額: data.去年增減金額,
                去年增減百分比: data.去年增減百分比,
                營收變化原因說明: data.營收變化原因說明,
            },
            DATABASE_HISTORY,
            "financial",
        );
    }
}


