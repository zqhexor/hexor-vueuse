import { useRadioChecker } from './useRadioChecker';
import { useCheckboxChecker } from './useCheckboxChecker';
import { CHECKER_TYPE, CheckerOptions, CheckerReturn } from './types';

export { CHECKER_TYPE };

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
