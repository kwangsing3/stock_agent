import {init} from '../../service/dbhandler.mod.js';
const DATABASE_HISTORY = 'STOCK_AGENT_HISTORY';

export default async ()=>{
    console.log("---檢查資料庫結構");
    await init();
}


