/**
 *  模拟接口请求1： 普通模拟请求
 * @param {*} params
 * @returns
 */
export const request1 = (params: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (params) {
        resolve(params);
      } else {
        reject();
      }
    }, 1000);
  });
};

/**
 *  模拟接口请求2: 不分页列表
 * @param {*} params
 * @returns
 */
export const request2 = (params: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tableData = [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ];
      resolve(tableData);
    }, 5000);
  });
};

/**
 *  模拟接口请求3: 分页列表
 * @param {*} params
 * @returns
 */
export const request3 = (params: any) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tableData = [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ];
      resolve({ list: tableData, count: 4 });
    }, 1000);
  });
};
