<h1 align="center">
	mt-utils
</h1>

<p align="center">
  <a href="http://img.shields.io/travis/txs1992/mt-utils.svg">
    <img src="http://img.shields.io/travis/txs1992/mt-utils.svg" />
  </a>
  <a href="https://img.shields.io/npm/dt/mt-utils.svg">
    <img src="https://img.shields.io/npm/dt/mt-utils.svg" />
  </a>
  <a href="https://img.shields.io/npm/dm/mt-utils.svg">
    <img src="https://img.shields.io/npm/dm/mt-utils.svg" />
  </a>
  <a href="https://img.shields.io/npm/v/mt-utils.svg">
    <img src="https://img.shields.io/npm/v/mt-utils.svg" />
  </a>
  <a href="https://img.shields.io/npm/l/mt-utils.svg">
    <img src="https://img.shields.io/npm/l/mt-utils.svg" />
  </a>
  <a href="https://img.shields.io/node/v/passport.svg">
    <img src="https://img.shields.io/node/v/passport.svg" />
  </a>
</p>

> 一个业务中常用的工具函数的封装库

## npm 使用示例

```js
import { cssSupports } from 'mt-utils'

cssSupports('position')
```

## CDN 使用示例

```html
<!-- 记得修改最新的版本号 -->
<script src="https://unpkg.com/mt-utils@0.0.2/lib/index.js"></script>
<script>
  window.MtUtils.cssSupports('position')
</script>
```

## 功能目录

- [CSS 能力检测](#csssupports-css-能力检测)
- [判断对象](#isObject-判断是否是对象)
- [对象序列化](#obj2qs-对象转换查询字符串)
- [判断滚动元素](#isScrollElement-判断滚动元素)
- [获取第一个子级滚动元素](#getScrollElementOfFirstChild-获取第一个子级滚动元素)
- [获取第一个父级滚动元素](#getScrollElementOfFirstParent-获取第一个父级滚动元素)

#### cssSupports CSS 能力检测

- **参数**
  - `prop` : `String` css 属性名称
  - `value`: [`String` | `undefined`] css 属性值
- **返回值** Boolean
- **描述**

  > 判断浏览器是否支持传入的的 css 属性，以及对应的 css 属性值。如果不传 value 参数，只判断是否支持 css 属性，否则判断是否支持属性与值。

- **示例**
  [返回目录](#功能目录)

```js
// 检测是否支持 position 属性
cssSupports('position')

// 判断是否支持 sticky 定位
cssSupports('position', 'sticky')
```

### isObject 判断是否是对象

- **参数**
  - `value` : `Obejct`
- **返回值** Boolean
- **描述**

  > 根据给定的值，判断是否是对象

- **示例**

```js
// 判断传入的值是不是一个对象。
isObject({})
```

[返回目录](#功能目录)

### obj2qs 对象转换查询字符串

- **参数**
  - `obj` : `Obejct`
  - `first`: `Boolean` 是否添加 `&` 符号，默认不添加
  - `transcoding`: `Boolean` 是否对值进行 encodeURIComponent 转码，默认开启转码。
- **返回值** Boolean
- **描述**

  > 根据给定的对象将其转换成查询字符串，如果传入的不是对象返回空字符串。有些时候我们需要必须通过 get 请求将对象或是数组等参数传递给接口，例如下载数据，而直接传递对象接口可能无法解析，所以需要将参数序列化。

- **示例**

```js
// 默认调用，即不添加 ？ 连接符，并转码。
obj2qs({ name: 'mt', age: 10, ids: [1, 2, 3], map: { a: 'b', b: 'c' } })
// 转换结果："name=mt&age=10&ids=%5B1%2C2%2C3%5D&map=%7B%22a%22%3A%22b%22%2C%22b%22%3A%22c%22%7D"

// 不添加 ？ 连接符，并且不转码。
obj2qs(
  { name: 'mt', age: 10, ids: [1, 2, 3], map: { a: 'b', b: 'c' } },
  false,
  false
)
// 转换结果："name=mt&age=10&ids=[1,2,3]&map={"a":"b","b":"c"}"

// 添加 ? 连接符，并开启转码
obj2qs(
  { name: 'mt', age: 10, ids: [1, 2, 3], map: { a: 'b', b: 'c' } },
  true,
  true
)
// 转换结果："?name=mt&age=10&ids=%5B1%2C2%2C3%5D&map=%7B%22a%22%3A%22b%22%2C%22b%22%3A%22c%22%7D"
```

[返回目录](#功能目录)

#### isScrollElement 判断滚动元素

- **参数**
  - `el` : `Element` DOM 元素
  - `direction`: `String` 水平或者垂直滚动，默认 vertical。
    - `可选值`: [`vertical`, `horizontal`]
- **返回值** Boolean
- **描述**

  > 根据给定的 DOM 元素判断该元素是否是一个滚动元素。

- **示例**

```js
// 判断 body 是否是一个滚动元素。
isScrollElement(document.body, 'vertical')
```

[返回目录](#功能目录)

### getScrollElementOfFirstChild 获取第一个子级滚动元素

- **参数**
  - `el` : `Element` DOM 元素
  - `direction`: `String` 水平或者垂直滚动，默认 vertical。
    - `可选值`: [`vertical`, `horizontal`]
- **返回值** [`Element`, `null`]
- **描述**

  > 根据给定的 DOM 元素，获取距离该元素最近的子级动元素(会一直向下查找到最后一级)，如果该元素的子级元素中没有滚动元素，则返回 null。

- **示例**

```js
getScrollElementOfFirstChild(document.querySelector('.content'), 'vertical')
```

[返回目录](#功能目录)

### getScrollElementOfFirstParent 获取第一个父级滚动元素

- **参数**
  - `el` : `Element` DOM 元素
  - `direction`: `String` 水平或者垂直滚动，默认 vertical。
    - `可选值`: [`vertical`, `horizontal`]
- **返回值** [`Element`, `null`]
- **描述**

  > 根据给定的 DOM 元素，获取距离该元素最近的父级滚动元素(向上查找到最顶级)，如果该元素的父级元素中没有滚动元素，则返回 null。

- **示例**

```js
getScrollElementOfFirstParent(document.querySelector('.content'), 'vertical')
```

[返回目录](#功能目录)
