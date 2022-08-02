import { TABLE_CONFIG, useTable } from '../src';
import { sleep } from './utils';
import { request3 } from './../docs/demo/request';

describe('useTable', () => {
  it('testTableData', async () => {
    const getList = async (params: any) => {
      // 您可以在此处理分页参数，比如实际入参是page和size
      params.page = params[TABLE_CONFIG.PAGE_NUMBER];
      params.size = params[TABLE_CONFIG.PAGE_SIZE];
      params[TABLE_CONFIG.PAGE_NUMBER] = undefined;
      params[TABLE_CONFIG.PAGE_SIZE] = undefined;
      const response = await request3(params);
      // 您可有在此处理请求结果,比如实际返回的是count和list，而我们需要把count->total,list->data
      return {
        [TABLE_CONFIG.TOTAL]: (response as any)?.count,
        [TABLE_CONFIG.DATA]: (response as any)?.list
      };
    };

    const {
      // 入参
      data,
      total,
      loading,
      // 刷新列表
      refresh
    } = useTable(getList);

    expect(loading.value).toBe(true);
    await sleep(1000);
    expect(total.value).toBeGreaterThan(0);
    expect(data.value.length).toBeGreaterThan(0);
    expect(loading.value).toBe(false);
    refresh();
    expect(loading.value).toBe(true);
    await sleep(1000);
    expect(total.value).toBeGreaterThan(0);
    expect(data.value.length).toBeGreaterThan(0);
    expect(loading.value).toBe(false);
  });
});
