// 填充公司資訊

import 公司基本資訊 from '../model/公司基本資訊.inter';
import {
  GetUnknowCompany,
  UpsertUnknowCompany,
  init,
} from '../service/dbhandler.mod';
import {GET} from '../utility/httpmethod';
import {CloseConnect, ConnectToDB} from '../utility/sql.mod';

(async () => {
  await ConnectToDB('localhost', 'root', 'manager1', '');
  await init();
  try {
    const unknowComs = await GetUnknowCompany();
    //查找公司資訊後填入
    const raw: 公司基本資訊[] = (
      await GET('https://openapi.twse.com.tw/v1/opendata/t187ap03_L')
    )['data'];
    for (const key of raw) {
      for (const ii of unknowComs) {
        if (ii.公司代號 === key.公司代號) {
          await UpsertUnknowCompany(key);
          break;
        }
      }
    }

    console.log();
  } catch (error) {
    console.error(error);
  }
  await CloseConnect();
})();
