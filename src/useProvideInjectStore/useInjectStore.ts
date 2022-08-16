import { inject } from 'vue-demi';
import type { InjectionKey } from 'vue-demi';

/**
 * 注入Store
 * @param key `store`（或`provide`）的唯一标识
 * @returns 返回一个返回值是`inject`的函数
 */
export function useInjectStore<T>(key: InjectionKey<T> | string) {
  return () => inject(key);
}
