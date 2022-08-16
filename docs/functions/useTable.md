# useTable

`useTable` 是一个用于处理列表分页查询的 API。

## 示例

<demo src="./../demo/useTable/demo.vue" title="可以通过`TABLE_CONFIG`作字段映射"></demo>

## APIS

#### params

| 参数      | 类型          | 描述          | 默认值    |
| ----------|:------------:|:---------------:|:---------:|
|getList         | `() => Promise<any>` | 需包装的请求接口，必传 | - |
|immediate       | boolean              | 是否立即执行         | `true` |
|defaultPageSize | number               | 默认每页条数 | `10` |
|defaultPayload  | any               | 默认请求参数 | - |


#### returns
| 参数      | 类型          | 描述          |
| ----------|:------------:|:---------------|
|pageNumber    | ` Ref<number>` | 页码 |
|pageSize      | ` Ref<number>` | 每页条数 |
|searchParams  | ` Ref<AnyObject>` | 请求参数 |
|data          | ` Ref<Array<AnyObject>>` | 接口返回列表数据 |
|total         | ` Ref<number>` | 接口返回总条数 |
|loading       | ` Ref<boolean>` | 请求状态 |
|refresh       | function | 刷新列表方法 |
|reload        | function | 重载列表方法 |


#### TABLE_CONFIG字段映射
| key      | value          | 描述          |
| ----------|:------------:|:-------------- |
|PAGE_SIZE    | pageSize    | 每页条数    |
|PAGE_NUMBER  | pageNumber  | 页码        |
|TOTAL        | total       | 总数        |
|DATA         | data        | 列表数据    |
