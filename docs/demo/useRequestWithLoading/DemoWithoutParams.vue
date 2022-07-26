<script setup>
import { getCurrentInstance } from 'vue';
import { useRequestWithLoading } from '../../../src';
import { request1 } from '../request';

const { proxy } = getCurrentInstance();

const { loading } = useRequestWithLoading(async () => {
  await request1({ id: 1 });

  proxy.$message({
    message: '提交成功',
    type: 'success'
  });
});
</script>

<template>
  <div>
    <el-button type="primary" :loading="loading" @click="loading = true">提交</el-button>
  </div>
</template>
