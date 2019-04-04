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
- [判断滚动元素](#isScrollElement-判断滚动元素)
- [判断对象](#isObject-判断是否是对象)
- [转换查询字符串](#obj2qs-对象转换查询字符串)

#### cssSupports CSS 能力检测

- **参数**
  - `prop` : `String` css 属性名称
  - `value`: [`String` | `undefined`] css 属性值
- **返回值** Boolean
- **描述**

  > 判断浏览器是否支持传入的的 css 属性，以及对应的 css 值。如果不传 value 参数，只判断是否支持 css 属性，否则判断是否支持属性与值。

- **示例**

```js
// 检测是否支持 position 属性
cssSupports('position')

// 判断是否支持 sticky 定位
cssSupports('position', 'sticky')
```

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

### isObject 判断是否是对象

- **参数**
  - `value` : `Obejct`
- **返回值** Boolean
- **描述**

  > 根据给定的值，判断是否是对象

- **示例**

```js
// 判断 body 是否是一个滚动元素。
isObject({})
```

### obj2qs 对象转换查询字符串

- **参数**
  - `obj` : `Obejct`
  - `first`: `Boolean` 是否添加 `&` 符号，默认不添加
- **返回值** Boolean
- **描述**

  > 根据给定的对象将其转换成查询字符串，如果传入的不是对象返回空字符串。

- **示例**

```js
obj2qs({ a: '10', b: '1' })
// a=10&b=1

obj2qs({ a: '10', b: '1' }, true)
// &a=10&b=1
```
