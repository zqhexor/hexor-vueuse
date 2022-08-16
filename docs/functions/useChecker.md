# useChecker

`useChecker` 是一个用于自定义选择器的 API。

# 示例

## radio 模式

<demo src="./../demo/useChecker/DemoRadio.vue"></demo>

## checkbox 模式

### 全选

<demo src="./../demo/useChecker/DemoCheckBoxAll.vue"></demo>

### 限制选中项

举个 🌰，最少选中一项，最多选中三项

<demo src="./../demo/useChecker/DemoCheckBoxLimit.vue"></demo>

### 最多选中一项的特殊模式的 checkbox

因为限制最多选中项数为 1，所以再点击其他选项时，我们就默认取消当前选中

<demo src="./../demo/useChecker/DemoCheckBoxLimitOne.vue"></demo>

### 禁用项

传入的选项配置 disabled: true。此时全选，代表选中全部非禁用项。

<demo src="./../demo/useChecker/DemoCheckBoxDisabled.vue"></demo>

### 自定义字段映射配置

如果请求接口请求后的数据不是`{ value: '', label: '', disabled: true }`的格式,我们可以通过`config`配置 value 和 disabled 的字段映射

举个 🌰 ，此例中 options 是`{ id: 'apple', invalid: true }`, 我们可以不转换数据，通过 config 配置完成字段映射`{ value:'id', disabled:'invalid' }`

<demo src="./../demo/useChecker/DemoCheckBoxConfig.vue"></demo>

## APIS

#### params

| 参数      | 类型          | 描述          | 默认值    |
| ----------|:------------:|:---------------:|:---------:|
|type       | CHECKER_TYPE | 选择器类型，有`checkbox`和`radio`可供选择 | `checkbox` |
|config     | object       | 字段映射         | `{ value: 'value', disabled: 'disabled' }` |
|min        | number       | 最少选中数，只有`type`为`checkbox`时生效 | `0` |
|max        | number       | 最大选中数，只有`type`为`checkbox`时生效 | - |

#### returns
| 参数      | 类型          | 描述          |
| ----------|:------------:|:---------------|
|checked    | `Ref<RadioChecked\|CheckboxChecked>` | 选中项,`type`为`checkbox`时是响应式数组，`type`为`radio`是响应式字符串或数字 |
|options    | `Ref<Array<OptionsItem>>`      |   选项，包含`{value:'value1'}`此类选项的数组        |
|isActive   | function       |    判断选项是否为选中项，入参是选项的`value` |
|check      | function       |    点击选项函数,入参是选项`OptionsItem`|
|allActive  | `ComputedRef<boolean>`       |    全选是否选中|
|checkAll   | function     |    点击全选函数|

#### CHECKER_TYPE枚举字段
| key      | value          | 描述          |
| ----------|:------------:|:-------------- |
|CHECKBOX   | checkbox    | checkbox类型选择器    |
|RADIO      | radio  | radio类型选择器        |
