import type { ComputedRef, Ref } from 'vue-demi';

/**
 * 选择器类型
 */
export enum CHECKER_TYPE {
  CHECKBOX = 'checkbox',
  RADIO = 'radio'
}

export type CheckboxChecked = Array<string | number>;

export type RadioChecked = string | number;

export interface OptionsItem {
  /**
   * @desc 实际值
   */
  value?: string | number;
  /**
   * @desc 是否禁用
   */
  disabled?: boolean;
  [propName: string]: any;
}

export interface CheckerReturn {
  /**
   * @desc 选中项
   * @remarks radio模式值为string|number；checkbox模式值为数组
   */
  checked: Ref<RadioChecked | CheckboxChecked>;
  /**
   * @desc 选项
   */
  options: Ref<Array<OptionsItem>>;
  /**
   * @desc 判断选项是否为选中项
   */
  isActive: (value: string | number | undefined) => boolean;
  /**
   * @desc 点击选项函数
   */
  check: (value: OptionsItem) => void;
  /**
   * @desc 全选是否选中
   */
  allActive?: ComputedRef<boolean>;
  /**
   * @desc  点击全选函数
   */
  checkAll?: () => void;
}

export interface CheckerOptionsConfig {
  /**
   * @desc 实际值对应字段映射
   * @defaultValue `value`
   */
  value?: string;
  /**
   * @desc 禁用对应字段映射
   * @defaultValue `disabled`
   */
  disabled?: string;
}

export interface CheckerOptions {
  /**
   * @desc 选择器类型
   * @defaultValue `checkbox`
   */
  type?: CHECKER_TYPE;
  /**
   * @desc 最少选中项
   * @defaultValue 0
   */
  min?: number;
  /**
   * @desc 最多选中项
   */
  max?: number;
  /**
   * @desc 选项配置
   * @defaultValue `{ value: 'value', disabled: 'disabled' }`
   */
  config?: CheckerOptionsConfig;
}

export type RadioCheckerOptions = Omit<CheckerOptions, 'type' | 'min' | 'max'>;

export type CheckboxCheckerOptions = Omit<CheckerOptions, 'type'>;
