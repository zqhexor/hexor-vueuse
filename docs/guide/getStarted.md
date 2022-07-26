# 快速开始
## 安装

Use `npm`:

```bash
npm install @zqhexor/vueuse --save
```

Use `yarn`:

```bash
yarn add @zqhexor/vueuse --save
```

## 使用

```js
import { CHECKER_TYPE, useChecker } from '@store.bizlib/tsoc-vueuse';
const { checked, options, isActive, check } = useChecker({ type: CHECKER_TYPE.RADIO })
options.value = [{ value: 1, label: '选项1' }, { value: 2, label: '选项2' }]
```
