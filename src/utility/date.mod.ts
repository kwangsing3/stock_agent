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
