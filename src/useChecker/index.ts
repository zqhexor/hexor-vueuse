import { useRadioChecker } from './useRadioChecker';
import { useCheckboxChecker } from './useCheckboxChecker';
import { CHECKER_TYPE, type CheckerOptions, type CheckerReturn } from './types';

export { CHECKER_TYPE };

/**
 * 自定义选择器
 * @remarks 默认checkbox
 * @param __namedParameters checker配置参数（可选）
 * @returns checked:选中项；options:选项；isActive：选项是否选中；check：点击选项操作；allActive：是否是全选状态；checkAll:全选
 */
export function useChecker({
  type = CHECKER_TYPE.CHECKBOX,
  min = 0,
  max = undefined,
  config = { value: 'value', disabled: 'disabled' }
}: CheckerOptions = {}): CheckerReturn {
  if (type === CHECKER_TYPE.CHECKBOX) {
    return useCheckboxChecker({ min, max, config });
  }

  return useRadioChecker({ config });
}
