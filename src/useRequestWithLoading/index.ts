import type { Ref } from 'vue-demi';
import { reactive, toRef, watch, onBeforeUnmount } from 'vue-demi';
import { RequestType } from './../types';

export interface RequestWithLoadingConfigOptions {
  /**
   * @desc 是否立即执行
   * @defaultValue `false`
   */
  immediate?: boolean;
  /**
   * @desc 默认请求参数
   */
  defaultPayload?: any;
}

/**
 *
 */
export interface RequestWithLoadingReturn {
  /**
   *  @desc loading状态， 改变loading状态可触发请求，建议在模板中使用
   */
  loading: Ref<boolean>;
  /**
   *  @desc 触发请求，可传入参数
   */
  doRequest: (payload: any) => void;
}

/**
 * 请求绑定loading
 * @param request 请求接口
 * @param __namedParameters 配置参数（可选）
 * @returns loading: 建议模板中使用；doRequest:其他情况请使用
 */
export function useRequestWithLoading(
  request: RequestType,
  { immediate = false, defaultPayload }: RequestWithLoadingConfigOptions = {}
): RequestWithLoadingReturn {
  const state = reactive({
    loading: false,
    payload: defaultPayload
  });

  const stop = watch(
    () => state.loading,
    async (value) => {
      if (value === false) return;
      try {
        await request(state.payload);
      } finally {
        state.loading = false;
      }
    }
  );

  const setPayload = (payload: any) => {
    state.payload = payload;
  };

  const doRequest = (payload: any) => {
    setPayload(payload);
    state.loading = true;
  };

  if (immediate) {
    state.loading = true;
  }

  onBeforeUnmount(() => {
    stop();
  });

  return {
    // 建议模板中使用
    loading: toRef(state, 'loading'),
    // 其他情况，请使用doRequest
    doRequest
  };
}
