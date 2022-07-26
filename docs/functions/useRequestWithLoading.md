# useRequestWithLoading

`useRequestWithLoading`是一个给接口绑上 `loading` 的 API，同时它还兼具阻止重复提交的功能。

# 示例

## 不带参

<demo 
  src="./../demo/useRequestWithLoading/DemoWithoutParams.vue"
  title="不带参"
  desc="如果您封装的函数不带参，可以直接使用`loading`控制接口的调用">
</demo>

## 带参

<demo 
  src="./../demo/useRequestWithLoading/DemoWithParams.vue"
  title="带参"
  desc=" 如果您封装的函数需要参数，可以用`doRequest`触发调用">
</demo>

## 立即执行

<demo 
  src="./../demo/useRequestWithLoading/DemoImmediate.vue"
  title="立即执行请求接口"
  desc="通过设置`immediate`可以控制是否立即执行，`defaultPayload`可以给请求接口携带默认参数">
</demo>
