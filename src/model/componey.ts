//公司基本資料
export default class CompanyInfo {
  constructor(raw?: unknown) {
    Object.assign(this, raw);
  }
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
}