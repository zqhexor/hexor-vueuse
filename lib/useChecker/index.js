import { ref, computed, readonly } from 'vue-demi';

/**
 * 选择器类型
 * @type {{CHECKBOX: string, RADIO: string}}
 */
export const CHECKER_TYPE = readonly({
  CHECKBOX: 'checkbox',
  RADIO: 'radio'
});

/**
 * @param type 选择器类型
 * @param min 最少选择个数
 * @param max 最大选择个数
 * @param config 字段映射配置，默认需要value和disabled字段
 * @returns {*[]}
 */
export function useChecker({ type = CHECKER_TYPE.CHECKBOX, min = 0, max = undefined, config = { value: 'value', disabled: 'disabled' } } = {}) {
  const {value = 'value', disabled = 'disabled'} = config;
  // 选中项
  const checkedRef = ref(null);
  // 选项 ref(Array<{value: any, disabled?: boolean}>)
  const optionsRef = ref([]);

  if (type === CHECKER_TYPE.CHECKBOX) {
    checkedRef.value = [];
  } else {
    checkedRef.value = '';
  }

  // 可用选项
  const enabledOptionsRef = computed(() => optionsRef.value.filter((option) => option[disabled] !== true));

  // 最大选项默认值
  const maxDefaultRef = computed(() => {
    return max || enabledOptionsRef.value.length;
  });

  /**
   * 判断选项是否选中
   * @param value 选项value值
   * @returns {boolean} true:选中
   */
  const isActive = (value) => {
    return type === CHECKER_TYPE.RADIO ? checkedRef.value === value : checkedRef.value.includes(value);
  };

  // 选择全部操作
  const checkAll = () => {
    if (checkedRef.value.length === enabledOptionsRef.value.length) {
      checkedRef.value = [];
    } else {
      checkedRef.value = enabledOptionsRef.value.map((item) => item[value]);
    }
  };

  // 全选按钮状态（是否选中）
  const allActiveRef = computed(() => checkedRef.value.length === enabledOptionsRef.value.length);

  /**
   * 点击选项选择操作
   * @param option 选项{value: any, disabled?: boolean}
   */
  function check(option) {
    if (option[disabled] === false) {
      return;
    }
    if (type === CHECKER_TYPE.RADIO) {
      checkRadio(option[value]);
    } else {
      checkCheckbox(option[value]);
    }
  }

  function checkRadio(value) {
    checkedRef.value = value;
  }

  function checkCheckbox(value) {
    const valueLen = checkedRef.value.length;
    const max = maxDefaultRef.value;

    const index = checkedRef.value.indexOf(value);

    if (index > -1) {
      // 取消选项
      (valueLen > min) && checkedRef.value.splice(index, 1);
      return;
    }
    if (max === 1) {
      // 激活选项，最大选择数为1时，往往需要特殊处理，直接替换原来的
      checkedRef.value.splice(0, 1, value);
      return;
    }
    // 其他激活选项的情况
    (valueLen < max) && checkedRef.value.push(value);
  }

  return {
    // 选中项 ref(Array<string|number> | string | number)
    checkedRef,
    // 选项 ref(Array<{value: any, disabled?: boolean}>)
    optionsRef,
    // 判断选项是否为选中项 (value: any) => boolean
    isActive,
    // 点击选项函数 (option:{value: any, disabled?: boolean}) => void
    check,
    // 全选是否选中 ref<Boolean>
    allActiveRef,
    // 点击全选函数 () => void
    checkAll
  };
}
