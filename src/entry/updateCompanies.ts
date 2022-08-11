import {config} from '../config';
import CompanyInfo from '../model/componey';
import {CloseConnect, ConnectToDB, GetContent} from '../service/dbhandler';
import {GET} from '../utility/httpmethod';

const DATABASE = 'Dashboard';
const TABLE = '上市公司資訊';
let formatSTR = '';
try {
  Task();
} catch (error) {
  console.error(error);
}

export async function Task() {
  await Task1();
  const raw = await Task2();
  await Task3(raw);
  console.log('上市公司資料獲取完成。');
}

async function Task1() {
  await ConnectToDB(
    config.MariaDB.host,
    config.MariaDB.username,
    config.MariaDB.password,
    `${DATABASE}`
  );
  await GetContent(`DROP TABLE ${DATABASE}.${TABLE};`);
  const tmp = new CompanyInfo();
  for (const ii in tmp) {
    formatSTR += ii + ' VARCHAR(256)' + ',';
  }
  formatSTR = formatSTR.slice(0, formatSTR.length - 1);
  await GetContent(
    `CREATE TABLE IF NOT EXISTS ${DATABASE}.${TABLE}(${formatSTR});`
  );
  await CloseConnect();
}
async function Task2() {
  //獲取各股上市總表
  const result: CompanyInfo[] = [];
  const urls = 'https://openapi.twse.com.tw/v1/opendata/t187ap03_L';
  let raw = await GET(urls);
  raw = raw['data'];
  for (const key of raw) {
    const tmp = new CompanyInfo(key);
    result.push(tmp);
  }
  return result;
}
async function Task3(input: CompanyInfo[]) {
  if (input.length < 1) return;
  await ConnectToDB(
    config.MariaDB.host,
    config.MariaDB.username,
    config.MariaDB.password,
    `${DATABASE}`
  );
  for (const key of input) {
    const query = `INSERT INTO ${DATABASE}.${TABLE}
    VALUES
    (
      "${key.出表日期}",
      "${key.公司代號}",
      "${key.公司名稱}",
      "${key.公司簡稱}",
      "${key.外國企業註冊地國}",
      "${key.產業別}",
      "${key.住址}",
      "${key.營利事業統一編號}",
      "${key.董事長}",
      "${key.總經理}",
      "${key.發言人}",
      "${key.發言人職稱}",
      "${key.代理發言人}",
      "${key.總機電話}",
      "${key.成立日期}",
      "${key.上市日期}",
      "${key.普通股每股面額}",
      "${key.實收資本額}",
      "${key.私募股數}",
      "${key.特別股}",
      "${key.編制財務報表類型}",
      "${key.股票過戶機構}",
      "${key.過戶電話}",
      "${key.過戶地址}",
      "${key.簽證會計師事務所}",
      "${key.簽證會計師1}",
      "${key.簽證會計師2}",
      "${key.英文簡稱}",
      "${key.英文通訊地址}",
      "${key.傳真機號碼}",
      "${key.電子郵件信箱}",
      "${key.網址}"
    )ON DUPLICATE KEY UPDATE date = "${key.公司代號}";`;
    await GetContent(query);
  }
  await CloseConnect();
  //
}
