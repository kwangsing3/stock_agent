import { GETAllTaiwanStockYield } from "../func/獲取殖利率總表.js"

(async () => {
    const raw = await GETAllTaiwanStockYield("20240307")
    console.log()
})().catch(err => {
    console.error(err)
})