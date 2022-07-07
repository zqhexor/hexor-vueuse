import { provide, isVue3 } from 'vue-demi';
import type { App, InjectionKey } from 'vue-demi';

type ProvideStoreConfig = {
  global?: boolean;
};

export type ProvideStoreReturn = ReturnType<typeof useProvideStore>;

/**
 *
 * @param key `store`（或`provide`）的唯一标识
 * @param state `store`的内容
 * @param config 配置文件`{ global: false }`是否是全局注册（默认false）
 * @returns 默认返回`provide`函数，如果是全局注册，返回一个包含`install`方法的对象，它提供全局的`provide`
 */
export function useProvideStore<T>(
  key: InjectionKey<T> | string,
  state: T,
  config: ProvideStoreConfig = {}
) {
  if (config.global) {
    // vue3实现
    if (isVue3) {
      return {
        install(app: App) {
          (app as any).provide(key, state);
        }
      };
    } else {
      // vue2实现
      return {
        install(_Vue: App) {
          _Vue.mixin({
            beforeCreate() {
              if (!(this as any)._provided) {
                const provideCache = {};
                Object.defineProperty(this, '_provided', {
                  get: () => provideCache,
                  set: (v) => {
                    Object.assign(provideCache, v);
                  }
                });
              }
              (this as any)._provided[key as any] = state;
            }
          });
        }
      };
    }
  }
  return () => {
    provide(key, state);
    return state;
  };
}
