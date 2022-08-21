import { ref } from 'vue-demi';
import type { CheckerReturn, OptionsItem, RadioChecked, RadioCheckerOptions } from './types';

export function useRadioChecker({
  config = { value: 'value', disabled: 'disabled' }
}: RadioCheckerOptions = {}): CheckerReturn {
  const { value = 'value', disabled = 'disabled' } = config;
  const checked = ref<RadioChecked>('');
  const options = ref<Array<OptionsItem>>([]);

  /**
   * 判断选项是否选中
   * @param value 选项value值
   * @returns {boolean} true:选中
   */
  const isActive = (value: string | number | undefined) => checked.value === value;

  /**
   * 点击选项选择操作
   * @param option 选项{value: any, disabled?: boolean}
   */
  function check(option: OptionsItem) {
    if (option[disabled] === true) {
      return;
    }
    checked.value = option[value];
  }

  return {
    checked,
    options,
    isActive,
    check
  };
}
