<script setup>
import { ref } from 'vue';
import { TABLE_CONFIG, useTable } from '../../../src';
import { request3 } from '../request';

const getList = async (params) => {
  // 您可以在此处理分页参数，比如实际入参是page和size
  params.page = params[TABLE_CONFIG.PAGE_NUMBER];
  params.size = params[TABLE_CONFIG.PAGE_SIZE];
  params[TABLE_CONFIG.PAGE_NUMBER] = undefined;
  params[TABLE_CONFIG.PAGE_SIZE] = undefined;
  const response = await request3(params);
  // 您可有在此处理请求结果,比如实际返回的是count和list，而我们需要把count->total,list->data
  return {
    [TABLE_CONFIG.TOTAL]: response?.count,
    [TABLE_CONFIG.DATA]: response?.list
  };
};

const {
  pageSize,
  pageNumber,
  // 入参
  searchParams,
  // 列表数据
  data,
  total,
  loading,
  // 刷新列表
  refresh,
  // 重载列表
  reload
} = useTable(getList);

const searchContent = ref({
  name: ''
});

const search = () => {
  searchParams.value = { ...searchContent.value };
  refresh();
};
</script>

<template>
  <div>
    <div style="display: flex; margin-bottom: 8px; justify-content: flex-end">
      <el-input
        v-model.trim="searchContent.name"
        placeholder="请输入名称"
        style="width: 220px; margin-right: 8px"
      ></el-input>
      <el-button type="primary" @click="search">搜索</el-button>
    </div>
    <el-table v-loading="loading" :data="data" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180" />
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="address" label="地址" />
    </el-table>
    <el-pagination
      v-model:current-page="pageNumber"
      v-model:page-size="pageSize"
      style="margin-top: 8px"
      :page-sizes="[10, 20, 50]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="refresh"
      @current-change="reload"
    >
    </el-pagination>
  </div>
</template>
