import 公司基本資訊 from './model/公司基本資訊.inter';

/**
 * 獲取＊日均線
 * @param list 盤後紀錄陣列，僅計算前＊天，如不足天數會補上0
 * @param avrdays 均線平均天數
 * @returns 獲取收盤價的＊日平均
 */
export default function GetAverage(
  list: 公司基本資訊[],
  avrdays: number
): number {
  // let sum = 0;
  // const avr = avrdays;
  // const len = list.length > avr ? avr : list.length;
  // for (let index = 0; index < len; index++) {
  //   try {
  //     const element = list[index];
  //     const closePrice = element.收盤價.replace(/,/g, '');
  //     sum += parseInt(closePrice);
  //   } catch (error) {
  //     sum = -1;
  //   }
  //   if (sum === -1) break;
  // }
  // const minus = avr - len;
  // for (let index = 0; index < minus; index++) {
  //   sum += 0;
  // }
  // return sum === -1 ? -1 : sum / avr;
  throw new Error('Method not implemented.');
}
