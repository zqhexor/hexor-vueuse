import { CHECKER_TYPE, useChecker } from '../src';
import { isEqualArray } from './utils';

const fruit = [
  {
    value: 'apple',
    label: '苹果'
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

describe('useChecker', () => {
  it('radio', () => {
    const { checked, options, isActive, check } = useChecker({ type: CHECKER_TYPE.RADIO });
    options.value = fruit;
    check(fruit[1]);
    expect(checked.value).toBe('peach');
    expect(isActive('peach')).toBe(true);
    expect(isActive('apple')).toBe(false);
    expect(isActive('watermelon')).toBe(false);
    expect(isActive('grape')).toBe(false);
  });
  it('checkbox', () => {
    const { checked, options, isActive, check, allActive, checkAll } = useChecker({
      type: CHECKER_TYPE.CHECKBOX
    });
    options.value = fruit;
    check(fruit[0]);
    expect(isActive('apple')).toBe(true);
    expect(isActive('peach')).toBe(false);
    expect(isActive('watermelon')).toBe(false);
    expect(isActive('grape')).toBe(false);
    expect(allActive?.value).toBe(false);
    expect(isEqualArray(checked.value as string[], ['apple'])).toBe(true);
    checkAll?.();
    expect(allActive?.value).toBe(true);
    expect(
      isEqualArray(
        checked.value as string[],
        fruit.map((item) => item.value)
      )
    ).toBe(true);
  });
});
