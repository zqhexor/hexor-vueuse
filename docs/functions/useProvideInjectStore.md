# useProvideStore/useInjectStore

`useProvideStore/useInjectStore` 是利用 provide 和 inject 实现状态管理的一组 API。

# 示例

## 局部状态管理

::: tip
局部状态管理中，`useProvideStore`返回的是一个返回值是`provide`方法的函数，`useInjectStore`返回的是一个返回值是`inject`方法的函数。

故这两个方法一般是在`js`中使用的，使用方法见以下示例（利用函数柯里化，`重新声明两个方法`导出供外部使用，这样做的好处是减少了入参，避免了`key`值多次导出的繁琐）。
:::

<demo src="./../demo/useProvideInjectStore/store.js"></demo>

<demo src="./../demo/useProvideInjectStore/parent.vue" 
  title="局部状态管理" 
  desc="`父组件` 通过执行 `createUserStore` 方法给子组件提供 `store`；`子组件` 通过执行 `useUserStore` 方法接入 `store`">
</demo>

## 全局状态管理

::: tip
全局状态管理模式，需要配置 `{ global: true }`， 此时返回的是一个包含`install`方法的对象, 可以在入口文件处调用`use`方法进行注册。
:::

`vue3` 中的代码示例

```js
import { useProvideStore } from "@zqhexor/vueuse";
const GLOBAL_STORE = Symbol("GLOBAL_STORE");
const store = {};
const store = useProvideStore(GLOBAL_STORE, store, { global: true });

const app = createApp();
app.use(store);
app.mount("#app");
```

`vue2` 中的代码示例

```js
import { useProvideStore } from "@zqhexor/vueuse";
const GLOBAL_STORE = Symbol("GLOBAL_STORE");
const store = {};
const store = useProvideStore(GLOBAL_STORE, store, { global: true });

Vue.use(store);
new Vue({
  el: "#app",
});
```

## APIS

### useProvideStore

#### params

| 参数      | 类型          | 描述          | 默认值    |
| ----------|:------------:|:---------------:|:---------:|
|key       | `Symbol\|string` |`store`（或`provide`）的唯一标识，必传 | - |
|state     | boolean       | `store`的内容，必传         | - |
|config    | object       | 配置选项，是否是全局注册`{ global: false }` | `{ global: false }` |

#### returns
默认返回`provide`函数，如果是全局注册，返回一个包含`install`方法的对象，它提供全局的`provide`

### useInjectStore

#### params

| 参数      | 类型          | 描述          | 默认值    |
| ----------|:------------:|:---------------:|:---------:|
|key       | `Symbol\|string` |`store`（或`provide`）的唯一标识，必传 | - |

#### returns
返回一个返回值是`inject`的函数
