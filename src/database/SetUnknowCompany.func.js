import { GetContent, Upsert } from "../utility/sql.mod";

const DATABASE_COMPANY = 'STOCK_AGENT_COMPANY';
const TABLE_COMPANY = 'Company';


/**
 * 輸入未知公司至公司列表
 * @param {*} key
 * {
 *    證券代號: string;
 *    證券名稱: string;
 * }
 */
export default async function SetUnknowCompany(key) {
    await GetContent(
        `Delete from ${DATABASE_COMPANY}.${TABLE_COMPANY} where 公司代號 = "${key['證券代號']}"`
    );
    await Upsert(
        {
            出表日期: '',
            公司代號: key.證券代號,
            公司名稱: '',
            公司簡稱: key.證券名稱,
            外國企業註冊地國: '',
            產業別: '',
            住址: '',
            營利事業統一編號: '',
            董事長: '',
            總經理: '',
            發言人: '',
            發言人職稱: '',
            代理發言人: '',
            總機電話: '',
            成立日期: '',
            上市日期: '',
            普通股每股面額: '',
            實收資本額: '',
            私募股數: '',
            特別股: '',
            編制財務報表類型: '',
            股票過戶機構: '',
            過戶電話: '',
            過戶地址: '',
            簽證會計師事務所: '',
            簽證會計師1: '',
            簽證會計師2: '',
            英文簡稱: '',
            英文通訊地址: '',
            傳真機號碼: '',
            電子郵件信箱: '',
            網址: '',
        },
        DATABASE_COMPANY,
        TABLE_COMPANY
    );
}
