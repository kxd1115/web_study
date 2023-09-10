# JavaScript高级程序设计 笔记

#### DOM
文档对象模型 API

* DOM视图
* DOM事件
* DOM样式
* DOM遍历和范围


#### BOM
浏览器对象模型 API


---
### HTML中的JavaScript

#### `<script>`元素
1. 可以镶嵌在网页中（head中），
2. 使用src属性引用其他位置的js文件

```HTML
<head>

 <script>
    //方式一
    function sayHi() {
        console.log("Hi!");
    }
 </script>
 <script src="example.js">
    //方式二引用外部js文件时，script标签中不应该有内容
 </script>
</head>
```
###
##### 推迟执行脚本
* defer属性
  * js脚本会被延迟到整个页面解析之后再运行
###
##### 异步执行脚本
* async属性
  * 异步脚本保证在页面的load时间前执行
###
##### 动态加载脚本
* async属性
  * 异步脚本保证在页面的load时间前执行

---
### 语言基础

#### 语法
##### 标识符
变量、属性、函数或函数参数的名称


#### 变量
`var`、`const`、`let`可以声明变量
##### `var`关键字
- `var`声明的范围是函数作用域
  - 当在一个函数内部使用`var`声明时，定义的变量会成为函数的**局部变量**
```javascript
var message = "hi";
```
* `var`声明**提升**
  * 把所有变量声明都拉到函数作用域的顶部
```javascript
// 该代码不会报错
function foo() {
    console.log(age);
    var age = 26;
}
foo()
```
##### `let`声明
- `let`声明的作用范围是**块作用域**
  - 块作用域是函数作用域的子集，对函数作用域的限制同样适用
- `let`声明的变量不会在作用域中被**提升**
  
```js
if (true) {
    let age = 26;
    console.log(age);
}
console.log(age); //报错，age没有被定义
```

* 使用`let`在全局作用域中声明的变量不会成为`window`对象的属性(`var`声明的变量则会)

```js
var name = 'Matt';
console.log(window.name); // Matt

let age = 26;
console.log(window.age); //undefined
```

* 关于条件声明的作用域

```js
var name = 'Nicholas';
console.log(name);
let age = 26;
console.log(age);
let age = 36 //此处会报错
```

```js
if (typeof name === 'undefined') {
    let name; //这个name被限制在if块内部
}
name = 'Matt'; // 这里的赋值被视为全局变量
console.log(name);

try {
    console.log(age); //没声明过age，此处会报错
}
catch(error) {
    let age; //这个age被限制在catch块内部
}
age = 36; // 这里的赋值被视为全局变量
console.log(age);
```

* `for`循环中的`let`声明
```js
for (let i=0; i<5; ++i) {
    setTimeout( ()=> console.log(i), 0 );
}
console.log(i); //输出0/1/2/3/4
```

##### const声明
与`let`声明基本相同，区别是，`const`声明变量时必须同时**初始化变量**，且修改声明过的变量会**导致运行错误**
```js
const age1 = 26;
age1=36; //TypeError

//const也不允许重复声明
const name = 'kang'
const name = 'xiaoDong' //SyntaxError

//const 声明的作用域也是块
const name = 'Matt';
if (true) {
    const name = 'Nicholas';
}
console.log(name); // Matt
```
* `const`声明的限制只适用于它指向的变量的引用
* 不能用`const`来声明迭代变量(`const`声明的变量不允许改变，但迭代变量会自增)

```js
let i = 0;
for (const j=7; i<5; ++i) {
    console.log(j);
}
// 7 7 7 7 7

for (const key in {a:1, b:2}) {
    console.log(key);
}
// a b

for (const value of [1,2,3,4,5]) {
    console.log(value);
}
// 1 2 3 4 5
```

#### 数据类型
ECMScript有6种数据类型（也成为**原始类型**）
* `Undefined`、`Null`、`Boolean`、`Number`、`String`、`Symbol`
* `Object`对象是一种复杂数据类型

##### `Typeof`操作符
使用`Typeof`操作符查看变量的数据类型
```js
let message = 'some string';
console.log(typeof(message)); // string
console.log(typeof message);  // string
console.log(typeof null);     // object
// 因为null值被认为是对空对象的引用，所以反馈object
```
##### `Undefined`类型
只有一个值，就是`undefined`。当使用`var`或者`let`声明变量但没初始化时，则相当于给变量赋值`undefined`。
```js
var male;
console.log(male === undefined); //true
```

##### `Null`类型
只有一个值，`null`，表示一个空对象指针
* `null`是由`undefined`派生而来，他们**表面上相等**
```js
console.log(null == undefined);  //true
console.log(null === undefined); //false
```

##### `Boolean`类型
布尔值，`true`和`false`（区分大小写）
* 如果想将一个其他类型的变量转换为布尔值，可以调用特定的Boolean()转型函数
```js
let hello = 'Hello World';
let helloBoolean = Boolean(hello);

console.log(hello);        // Hello World
console.log(helloBoolean); // true
```

不同类型与布尔值之间的转换规则
* string    非空字符串 true；""空字符串  false
* number    非零数值   true；0、NaN     false
* object    任意对象   true；null      false
* undefined N/A：     true；undefined false


##### `Number`类型
表示整数和浮点数（双精度值）

* 当超过js的值范围时
  * 无法表示的正数：`Infinity`（无穷大）
  * 无法表示IDE负数：`-Infinity`（无穷小）
* `NaN`
  * Not a Number
  * 使用`isNaN()`函数判断一个值是否不是一个数值