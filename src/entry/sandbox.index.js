import { GETAllTaiwanStockYield } from "../func/獲取基本面總表"

(async () => {
    const raw = await GETAllTaiwanStockYield()
    console.log()
})().catch(err => {
    console.error(err)
})