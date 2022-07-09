import { computed, ref } from 'vue-demi';
import type { CheckboxChecked, CheckboxCheckerOptions, CheckerReturn, OptionsItem } from './types';

export function useCheckboxChecker({
  min = 0,
  max = undefined,
  config = { value: 'value', disabled: 'disabled' }
}: CheckboxCheckerOptions = {}): CheckerReturn {
  const { value = 'value', disabled = 'disabled' } = config;
  const checked = ref<CheckboxChecked>([]);
  const options = ref<Array<OptionsItem>>([]);

  // 可用选项
  const enabledOptions = computed(() =>
    options.value.filter((option: OptionsItem) => option[disabled] !== true)
  );

  // 最大选项默认值
  const maxDefaultRef = computed(() => {
    return max || enabledOptions.value.length;
  });

  /**
   * 判断选项是否选中
   * @param value 选项value值
   * @returns {boolean} true:选中
   */
  const isActive = (value: string | number) => checked.value.includes(value);

  // 选择全部操作
  const checkAll = () => {
    if (checked.value.length === enabledOptions.value.length) {
      // 不改变数组引用
      checked.value.splice(0, checked.value.length);
    } else {
      checked.value.splice(0, checked.value.length);
      enabledOptions.value.forEach((item) => checked.value.push(item[value]));
    }
  };

  // 全选按钮状态（是否选中）
  const allActive = computed(() => checked.value.length === enabledOptions.value.length);

  /**
   * 点击选项选择操作
   * @param option 选项{value: any, disabled?: boolean}
   */
  function check(option: OptionsItem) {
    if (option[disabled] === true) {
      return;
    }

    const current = option[value];
    const valueLen = checked.value.length;
    const max = maxDefaultRef.value;

    const index = checked.value.indexOf(current);

    // 取消选项
    if (index > -1) {
      if (valueLen > min) {
        checked.value.splice(index, 1);
      }
      return;
    }
    // 激活选项
    // 激活选项，最大选择数为1时，往往需要特殊处理，直接替换原来的
    if (max === 1) {
      checked.value.splice(0, 1, current);
      return;
    }
    // 其他激活选项的情况
    if (valueLen < max) {
      checked.value.push(current);
    }
  }

  return {
    checked,
    options,
    isActive,
    check,
    allActive,
    checkAll
  };
}
