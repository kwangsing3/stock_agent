import config from '../config';
import {CloseConnect, ConnectToDB, GetContent} from '../service/dbhandler.mod';
import {GET} from '../utility/httpmethod.mod';

const DATABASE = 'Dashboard';
const TABLE = '上市公司資訊';
let formatSTR = '';
try {
  Task();
} catch (error) {
  console.error(error);
}

export async function Task() {
  await ConnectToDB(
    config.MariaDB.host,
    config.MariaDB.username,
    config.MariaDB.password,
    ''
  );
  await Task1();
  const raw = await Task2();
  await Task3(raw);
  console.log(`上市公司資料獲取完成 - 總共${raw.length}筆`);
  await CloseConnect();
}

async function Task1() {
  await GetContent(`CREATE DATABASE IF NOT EXISTS ${DATABASE};`);
  await GetContent(`DROP TABLE IF EXISTS ${DATABASE}.${TABLE} ;`);
  const tmp = new 公司基本資訊();
  for (const ii in tmp) {
    formatSTR +=
      ii +
      (ii !== '公司代號'
        ? typeof ii === 'string'
          ? ' LONGTEXT'
          : ` ${typeof ii}`
        : ' VARCHAR(256) PRIMARY KEY') +
      ',';
  }
  formatSTR = formatSTR.slice(0, formatSTR.length - 1);
  await GetContent(
    `CREATE TABLE IF NOT EXISTS ${DATABASE}.${TABLE}(${formatSTR}) 
    CHARACTER SET 'utf8' 
    COLLATE 'utf8_icelandic_ci';`
  );
}
async function Task2() {
  //獲取各股上市總表
  const result: 公司基本資訊[] = [];
  const urls = 'https://openapi.twse.com.tw/v1/opendata/t187ap03_L';
  const raw: 公司基本資訊[] = (await GET(urls))['data'];
  for (const key of raw) {
    result.push(key);
  }
  return result;
}
async function Task3(input: 公司基本資訊[]) {
  if (input.length < 1) return;
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
      "${key.網址}",
      "${false}"
    )ON DUPLICATE KEY UPDATE 
    出表日期 = "${key.出表日期}",
    公司代號 = "${key.公司代號}",
    公司名稱 = "${key.公司名稱}",
    公司簡稱 = "${key.公司簡稱}",
    外國企業註冊地國 = "${key.外國企業註冊地國}",
    產業別 = "${key.產業別}",
    住址 = "${key.住址}",
    營利事業統一編號 = "${key.營利事業統一編號}",
    董事長 = "${key.董事長}",
    總經理 = "${key.總經理}",
    發言人 = "${key.發言人}",
    發言人職稱 = "${key.發言人職稱}",
    代理發言人 = "${key.代理發言人}",
    總機電話 = "${key.總機電話}",
    成立日期 = "${key.成立日期}",
    上市日期 = "${key.上市日期}",
    普通股每股面額 = "${key.普通股每股面額}",
    實收資本額 = "${key.實收資本額}",
    私募股數 = "${key.私募股數}",
    特別股 = "${key.特別股}",
    編制財務報表類型 = "${key.編制財務報表類型}",
    股票過戶機構 = "${key.股票過戶機構}",
    過戶電話 = "${key.過戶電話}",
    過戶地址 = "${key.過戶地址}",
    簽證會計師事務所 = "${key.簽證會計師事務所}",
    簽證會計師1 = "${key.簽證會計師1}",
    簽證會計師2 = "${key.簽證會計師2}",
    英文簡稱 = "${key.英文簡稱}",
    英文通訊地址 = "${key.英文通訊地址}",
    傳真機號碼 = "${key.傳真機號碼}",
    電子郵件信箱 = "${key.電子郵件信箱}",
    網址 = "${key.網址}";
    `;
    await GetContent(query);
  }
}

//公司基本資料
export class 公司基本資訊 {
  出表日期 = '';
  公司代號 = '';
  公司名稱 = '';
  公司簡稱 = '';
  外國企業註冊地國 = '';
  產業別 = '';
  住址 = '';
  營利事業統一編號 = '';
  董事長 = '';
  總經理 = '';
  發言人 = '';
  發言人職稱 = '';
  代理發言人 = '';
  總機電話 = '';
  成立日期 = '';
  上市日期 = '';
  普通股每股面額 = '';
  實收資本額 = '';
  私募股數 = '';
  特別股 = '';
  編制財務報表類型 = '';
  股票過戶機構 = '';
  過戶電話 = '';
  過戶地址 = '';
  簽證會計師事務所 = '';
  簽證會計師1 = '';
  簽證會計師2 = '';
  英文簡稱 = '';
  英文通訊地址 = '';
  傳真機號碼 = '';
  電子郵件信箱 = '';
  網址 = '';
  包含歷史資料 = false;
}
