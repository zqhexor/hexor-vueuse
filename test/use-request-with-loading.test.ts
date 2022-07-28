import { useRequestWithLoading } from '../src';
import { sleep } from './utils';

describe('useRequestWithLoading', () => {
  it('loading 3s', async () => {
    const delay = 3000;
    const request = (params: any) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (params) {
            resolve(params);
          }
        }, delay);
      });
    };

    const { loading, doRequest } = useRequestWithLoading(async (payload) => {
      await request({ id: payload });
    });
    expect(loading.value).toBe(false);
    doRequest({ id: 3 });
    await sleep(1000);
    expect(loading.value).toBe(true);
    doRequest({ id: 3 });
    await sleep(2001);
    expect(loading.value).toBe(false);
  });
});
