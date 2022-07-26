<script setup>
import { CHECKER_TYPE, useChecker } from '../../../src';

const { checked, options, isActive, check, allActive, checkAll } = useChecker({
  type: CHECKER_TYPE.CHECKBOX
});
options.value = [
  {
    value: 'apple',
    label: '苹果',
    disabled: true
  },
  {
    value: 'peach',
    label: '桃子'
  },
  {
    value: 'watermelon',
    label: '西瓜'
  },
  {
    value: 'grape',
    label: '葡萄'
  }
];
</script>

<template>
  <div>
    <p>
      <el-button :type="`${allActive ? 'primary' : ''}`" @click="checkAll"> 全部 </el-button>
      <el-button
        v-for="item in options"
        :key="item.value"
        :value="item.value"
        :disabled="item.disabled"
        :type="`${isActive(item.value) ? 'primary' : ''}`"
        @click="check(item)"
      >
        {{ item.label }}
      </el-button>
    </p>
    <p>当前选中项：{{ checked }}</p>
  </div>
</template>
