# @zqhexor/vueuse - vueuse 工具库

<!-- 此处填写简单描述信息 -->

This is a collection of utility functions based on Composition API.

🍭 Support Vue 2 & Vue 3

💪 Written in TypeScript

🎪 Interactive docs & demos

## Table of Contents

- [Background](#background)
- [Design](#design)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
- [Usage](#usage)

## Background

<!-- 此处填写需求背景 -->

This is a collection of utility functions based on Composition API.

## Design

<!-- 此处填写设计文档（类图） -->

## Getting Started

### Prerequisites

<!-- 此处填写运行依赖 -->

### Install

Use `npm`:

```bash
npm install @zqhexor/vueuse --save
```

Use `yarn`:

```bash
yarn add @zqhexor/vueuse --save
```

## Usage

```js
import { useChecker, CHECKER_TYPE } from '@zqhexor/vueuse';
<!-- 此处修改填写简单使用示例 -->
const { checked, options, isActive, check } = useChecker({ type: CHECKER_TYPE.RADIO })
options.value = [{ value: 1, label: '选项1' }, { value: 2, label: '选项2' }]
```

For more examples, please refer to the [Documentation](http://110.42.240.50:8000/)
