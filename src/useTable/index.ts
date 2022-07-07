import { reactive, toRefs, ref, readonly } from 'vue-demi';
import type { Ref } from 'vue-demi';
import { RequestType, AnyObject } from './../types';

/**
 * 字段映射配置
 * @默认字段映射  `PAGE_SIZE` `pageSize` 每页条数
 * @默认字段映射  `PAGE_NUMBER` `pageNumber` 页码
 * @默认字段映射  `TOTAL` `total` 总数
 * @默认字段映射  `DATA` `data` 列表数据
 */
export const TABLE_CONFIG = readonly({
  /**
   * @desc 每页条数
   */
  PAGE_SIZE: 'pageSize',
  /**
   * @desc 页码
   */
  PAGE_NUMBER: 'pageNumber',
  /**
   * @desc 总数
   */
  TOTAL: 'total',
  /**
   * @desc 列表数据
   */
  DATA: 'data'
});

/**
 *
 */
export type TableConfigType = typeof TABLE_CONFIG;

export interface TableOptions {
  /**
   * @desc 是否立即执行
   * @defaultValue `true`
   */
  immediate?: boolean;
  /**
   * @desc 默认每页条数
   * @defaultValue `10`
   */
  defaultPageSize?: number;
  /**
   * @desc 默认请求参数
   */
  defaultPayload?: AnyObject;
}

export interface TableReturn {
  /**
   * @desc 页码
   */
  pageNumber: Ref<number>;
  /**
   * @desc 每页条数
   */
  pageSize: Ref<number>;
  /**
   * @desc 请求参数，不含分页
   */
  searchParams: Ref<AnyObject>;
  /**
   * @desc 接口返回列表数据
   */
  data: Ref<Array<AnyObject>>;
  /**
   * @desc 接口返回总条数
   */
  total: Ref<number>;
  /**
   * @desc 请求状态
   */
  loading: Ref<boolean>;
  /**
   * @desc 刷新列表方法
   */
  refresh: () => void;
  /**
   * @desc 重载列表方法
   */
  reload: () => void;
}

/**
 *
 * @param getList 列表请求接口
 * @param config 配置参数（可选）
 * @returns
 */
export function useTable(
  getList: RequestType,
  { immediate = true, defaultPageSize = 10, defaultPayload = {} }: TableOptions = {}
): TableReturn {
  // 参数
  const searchParams = ref({ ...defaultPayload });
  // 列表
  const data = ref([]);
  // 分页
  const pagination = reactive({
    pageNumber: 1, // 页码
    pageSize: defaultPageSize // 条数
  });

  // 总数
  const total = ref(0);

  // loading
  const loading = ref(false);

  // 获取列表
  const getTableList = async () => {
    const params = { ...searchParams.value, ...pagination };
    loading.value = true;
    try {
      const result = await getList(params);
      data.value = result.data;
      total.value = result.total;
    } catch (error) {
      data.value = [];
      total.value = 0;
      throw new Error('请求失败');
    } finally {
      loading.value = false;
    }
  };

  if (immediate) {
    getTableList();
  }

  const refresh = () => {
    pagination.pageNumber = 1;
    getTableList();
  };

  const reload = () => {
    getTableList();
  };

  return {
    ...toRefs(pagination),
    searchParams,
    data,
    total,
    loading,
    refresh,
    reload
  };
}
