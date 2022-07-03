import { CheckerReturn, RadioCheckerOptions, RadioChecked, OptionsItem } from './types';
import { ref } from 'vue-demi';

export function useRadioChecker({
  config = { value: 'value', disabled: 'disabled' }
}: RadioCheckerOptions = {}): CheckerReturn {
  const { value, disabled } = config;
  const checked = ref<RadioChecked>('');
  const options = ref<Array<OptionsItem>>([]);

  /**
   * 判断选项是否选中
   * @param value 选项value值
   * @returns {boolean} true:选中
   */
  const isActive = (value: string | number) => checked.value === value;

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
