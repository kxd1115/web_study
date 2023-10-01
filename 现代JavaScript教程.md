说明：由于javascript高级程序设计第四版翻译和内容排版不是那么适合新手，因此打算调整学习方式，并查漏补缺；看完后再抽空看javascript高级程序设计第四版
* 在javascript.info看在线版本教程

# 基础知识

## 现代模式, "use strict"
可以在脚本最上方添加`use strict`，开启严格模式

## 变量
现在主要使用let声明变量（旧版本主要使用var声明）

## 常量
使用const声明的是常量（值不会变的变量）

* 通常使用大写字母表示**硬编码**的常量（在执行之前就知道值是什么）

## 数据类型
* 原始数据类型
1. `Number`: 保存`±(2^53-1)`范围的数字
2. `BigInt`: 比`Number`的范围更大
3. `String`: 字符串
4. `Boolean`: 逻辑类型, 布尔值
5. `null`: 只有一个值null
6. `undefined`: 未被赋值
7. `Symbol`

* 非原始数据类型
8. `Object`


* `typeof`运算符: 返回参数的类型

## 交互
* `alert`: 弹出一个带有信息的小窗口, **模态窗**
* `prompt`: 参数*title*和一个可选参数*default*
  * `title`: 显示给用户的文本
  * `default`: 可选的第二个参数，指定`input`框的初始值
```js
result = prompt("hello! ", "world!");
alert(`hello! ${result}`); // hello! world!
```
* `confirm`: 显示一个带有`question`以及确定和取消两个按钮的模态窗口

```js
let isBoss = confirm("Are you the boss?");

alert(isBoss);  // 当按下确定按钮时，返回true；取消按钮返回false
```

## 类型转换

### 字符串转换
`alert(value)`将`value`转换为字符串类型，然后显示。
也可以使用`String(value)`将`value`转换为字符串类型。

### 数字型转换
在算术函数和表达式中，会自动进行number类型转换
```js
alert("6"/"2");  // 3
```
使用`Number(value)`将`value`转换为number类型
```js
alert(Number("  123 "));      // 123
alert(Number("  123z "));     // NaN
alert(Number(true));          // 1
alert(Number(false));         // 0
alert(Number(null));          // 0
alert(Number(undefined));     // NaN
```

### 布尔型转换
```js
alert(Number("  123 "));      // true
alert(Number("0"));           // false
alert(Number(0));             // false
alert(Number(""));            // false
alert(Number(null));          // false
alert(Number(undefined));     // false
```
