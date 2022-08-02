<script>
import { defineComponent, toRefs } from 'vue';
import { useUserStore } from './store.js';

export default defineComponent({
  name: 'Child',
  setup() {
    const userStore = useUserStore();
    const { getYounger } = userStore.actions;

    return {
      ...toRefs(userStore.state),
      getYounger
    };
  }
});
</script>

<template>
  <div>
    <h3>子组件内容</h3>
    <p>
      <span>姓名：{{ name }}</span> |
      <span>年龄：{{ age }}</span>
      <br />
      <el-button type="primary" style="margin-top: 8px" @click="getYounger"> 返老还童 </el-button>
    </p>
  </div>
</template>
