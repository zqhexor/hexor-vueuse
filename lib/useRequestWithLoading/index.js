import { reactive, toRef, watch, onBeforeUnmount } from 'vue-demi';

/**
 * 给请求带上loading
 * @param request {Promise<void>} 请求接口
 * @param immediate {boolean} 是否立即执行接口
 * @param defaultPayload {*} 默认请求参数
 * @returns {{doRequest: ()=>{} , loading: Ref<boolean>}}
 */
export function useRequestWithLoading(request, { immediate = false, defaultPayload } = {}) {
  const state = reactive({
    loading: false,
    payload: defaultPayload
  });

  const stop = watch(() => state.loading, async (value) => {
    if (value === false) return;
    try {
      await request(state.payload);
    } finally {
      state.loading = false;
    }
  });

  const setPayload = (payload) => {
    state.payload = payload;
  };

  const doRequest = (payload) => {
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
