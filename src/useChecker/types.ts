import type { Ref, ComputedRef } from 'vue-demi';

// 选择器类型
export enum CHECKER_TYPE {
  CHECKBOX = 'checkbox',
  RADIO = 'radio'
};

export type CheckboxChecked = Array<string | number>;

export type RadioChecked = string | number;

export interface OptionsItem {
  value?: string | number;
  disabled?: boolean;
  [propName: string]: any;
}

export interface CheckerReturn {
  // 选中项
  checked: Ref<RadioChecked | CheckboxChecked>;
  // 选项
  options: Ref<Array<OptionsItem>>;
  // 判断选项是否为选中项
  isActive: (value: string | number) => boolean;
  // 点击选项函数
  check: (value: OptionsItem) => void;
  // 全选是否选中
  allActive?: ComputedRef<boolean>;
  // 点击全选函数
  checkAll?: () => void;
}

export interface CheckerOptionsConfig {
  value: string;
  disabled: string;
}

export interface CheckerOptions {
  type?: CHECKER_TYPE;
  min?: number;
  max?: number;
  config?: CheckerOptionsConfig;
}

export type RadioCheckerOptions = Omit<CheckerOptions, 'type' | 'min' | 'max'>;

export type CheckboxCheckerOptions = Omit<CheckerOptions, 'type'>;
