/**
 * 判断两个数组的内容是否相等
 * @param arr1
 * @param arr2
 * @returns {boolean} 例如：isEqualArray([1,2],[2,1]) === true
 */
export function isEqualArray<T>(arr1: Array<T>, arr2: Array<T>): boolean {
  return arr1.length === arr2.length && arr1.length === new Set([...arr1, ...arr2]).size;
}

export const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
