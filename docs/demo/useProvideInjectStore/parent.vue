<script>
import { defineComponent, toRefs } from 'vue';
import Child from './child.vue';
import { createUserStore } from './store.js';

export default defineComponent({
  name: 'Parent',
  components: {
    Child
  },
  setup() {
    const userStore = createUserStore();
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
    <Child ref="childRef" />
    <hr />
    <h3>父组件内容</h3>
    <p>
      <span>姓名：{{ name }}</span> |
      <span>年龄：{{ age }}</span>
      <br />
      <el-button type="primary" style="margin-top: 8px" @click="getYounger"> 返老还童 </el-button>
    </p>
  </div>
</template>
