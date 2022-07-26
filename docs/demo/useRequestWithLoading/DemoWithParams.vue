<script setup>
import { getCurrentInstance } from 'vue';
import { useRequestWithLoading } from '../../../src';
import { request1 } from '../request';

const { proxy } = getCurrentInstance();

const { loading, doRequest } = useRequestWithLoading(async (payload) => {
  await request1({ id: payload });

  proxy.$message({
    message: '提交成功',
    type: 'success'
  });
});
</script>

<template>
  <div>
    <el-button type="primary" :loading="loading" @click="doRequest(1)">提交</el-button>
  </div>
</template>
