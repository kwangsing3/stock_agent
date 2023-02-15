import 單日個股歷史資料 from './單日個股歷史資料.inter';

export default interface 公司 {
  公司代號: string;
  公司名稱: string;
  每日歷史紀錄: 單日個股歷史資料[];
}
