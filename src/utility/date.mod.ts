export function GetCurrentTime(): string {
  const currenttime = new Date().getTime();

  return currenttime.toString();
}

export function GetReadalbeTime(str: string): string {
  if (str.includes('NOT SET')) {
    return str;
  }
  const currenttime = new Date(Number(str));
  const year = currenttime.getFullYear().toString();
  const month =
    currenttime.getMonth() < 10
      ? `0${currenttime.getMonth() + 1}`
      : currenttime.getMonth().toString(); // start from 0
  const date =
    currenttime.getDate() < 10
      ? `0${currenttime.getDate()}`
      : currenttime.getDate().toString();

  const hour = currenttime.getHours().toString();
  const minute = currenttime.getMinutes().toString();
  const second =
    currenttime.getSeconds() < 10
      ? `0${currenttime.getSeconds()}`
      : currenttime.getSeconds().toString();
  return `${month}/${date}/${year} ${hour}:${minute}:${second}`;
}

/**
 * 統一變成西元年
 * @param input 例如: "111/2/29"
 * @returns "2022/2/29"
 */
export function NormalizeYear(input: string): string {
  if ((input.match(/\//g) || []).length < 2) return '';
  const ls = input.split('/');
  let N = 0;
  try {
    N = parseInt(ls[0]);
  } catch (error) {
    return '';
  }
  return ls[0].length === 4
    ? input
    : (N + 1911).toString() + '/' + ls[1] + '/' + ls[2];
}

//TODO: Need to figure out:
//系統時間
//時區時間
//換日線時間
