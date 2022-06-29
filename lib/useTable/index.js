import { reactive, toRefs, ref, readonly } from 'vue-demi';

export const TABLE_CONFIG = readonly({
    PAGE_SIZE: 'pageSize',
    PAGE_NUMBER:'pageNumber',
    TOTAL: 'total',
    DATA: 'data',
    EXTRA: 'extra'
  })
  
  export function useTable(getList, immediate = true, defaultPageSize = 10) {
    // 参数
    const searchParams = ref({})
    // 列表
    const data = ref([])
    // 分页
    const pagination = reactive({
      pageNumber: 1, // 页码
      pageSize: defaultPageSize, // 条数
    })
  
    // 总数
    const total = ref(0)
  
    // loading
    const loading = ref(false)
  
    // 获取列表
    const getTableList= () => {
      if(typeof getList !== 'function') {
        return
      }
      const params = { ...searchParams.value, ...pagination }
      loading.value = true
      getList(params).then((result) => {
        console.log(result)
        data.value = result.data
        total.value = result.total
      }).finally(()=>{
        loading.value = false
      })
    }
  
    if (immediate) {
      getTableList()
    }
  
    const refresh = () => {
      pagination.pageNumber = 1
      getTableList()
    }
  
    const reload = () => {
      getTableList()
    }
  
    return {
      ...toRefs(pagination),
      searchParams,
      data,
      total,
      loading,
      refresh,
      reload
    }
  }
  