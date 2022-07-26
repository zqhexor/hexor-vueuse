<script setup>
import { CHECKER_TYPE, useChecker } from '../../../src';

const { checked, options, isActive, check } = useChecker({
  type: CHECKER_TYPE.CHECKBOX,
  config: { value: 'id', disabled: 'invalid' }
});
options.value = [
  {
    id: 'apple',
    label: '苹果',
    invalid: true
  },
  {
    id: 'peach',
    label: '桃子'
  },
  {
    id: 'watermelon',
    label: '西瓜'
  },
  {
    id: 'grape',
    label: '葡萄'
  }
];
</script>

<template>
  <div>
    <p>
      <el-button type="primary" :plain="!allActive" @click="checkAll"> 全部 </el-button>
      <el-button
        v-for="item in options"
        :key="item.id"
        :value="item.id"
        :plain="!isActive(item.id)"
        type="primary"
        :disabled="item.invalid"
        @click="check(item)"
      >
        {{ item.label }}
      </el-button>
    </p>
    <p>当前选中项：{{ checked }}</p>
  </div>
</template>
