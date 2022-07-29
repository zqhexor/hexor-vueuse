<script setup>
import { ref } from 'vue';
import { useRequestWithLoading } from '../../../src';
import { request2 } from '../request';

const data = ref([]);
const { loading, doRequest } = useRequestWithLoading(
  async (payload) => {
    data.value = await request2(payload);
  },
  { immediate: true, defaultPayload: 1 }
);
</script>

<template>
  <el-table v-loading="loading" :data="data" :max-height="400" style="width: 100%">
    <el-table-column prop="date" label="日期" width="180" />
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="address" label="地址" />
  </el-table>
</template>
