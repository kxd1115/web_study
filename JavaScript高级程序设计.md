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
* 数值转换
  * `Number()`
    * true返回1，false返回0
    * null返回0
    * undefined返回NaN      
  * `parseInt()`    
    * 从字符串的第一个字符开始检测，如果第一个字符不是数字，立刻返回NaN；如果是，则在遇到第一个非数字停止
  * `parseFloat()`
    * 始终忽略字符串开始的0
    * 在遇到第一个小数点之后，碰到第一个非数字停止
    * 如果字符串是整数，则会返回整数

```js
let num1 = Number("Hello World");  // NaN
let num2 = Number("");             // 0
let num3 = Number("0000011");      // 11
let num4 = Number(true);           // 1

let num5 = parseInt("AF", 16);     // 将AF转换为16进制的整数 175
// 建议在使用parseInt()时，始终传递第二个参数，虽然不传递也能运行

let num6 = parseFloat("09.8.2");   // 9.8
```

##### `String`类型
字符串可以使用双引号（"），单引号（'）和反引号（`）标示
```js
let text = "This is the letter sigma: \u03a3.";
console.log(text);
console.log(text.length);  // 28
// 转义序列表只算一个字符
```
字符字面量可以出现在字符串的任何位置，且只算作一个字符

* 字符串一旦被创建，值就不会被改变；除非再创建一个新的字符串保存到该变量

* `toString()`方法
  * `null`和`undefined`没有`toString()`方法 
  * 一般情况不用传递参数，但转换数值时，可以传递（2，8，10，12，16等）得到数值的二进制、八进制……的字符串结果
```js 
let age = 11;
let ageAsString = age.toString();
console.log(ageAsString, typeof ageAsString);  // 11 string
```
* `String()`方法

```js
let value1 = null;
let value2;
console.log(String(value1)); // 字符串状态的"null"
console.log(String(value2)); // 字符串状态的"undefined"
```
* 模版字面量
会保持反引号内部的空格，因此要确保模版的排版
```js
let pageHTML = `
<div>
    <a href="#">
    <span>Jake</span>
</div>`;
console.log(pageHTML);
```

* 字符串插值
可以使用`${}`插入模版字面量
```js
let value = 5;
let exponet = 'second';

// 以前是这样进行字符串插值
let interpolatedString = 
    value + ' to the ' + exponet + ' power is ' + (value*value);
console.log(interpolatedString);          // 5 to the second power is 25

// 现在可以使用模版字面量进行插值
let interpolatedTemplateLiteral = 
    `${value} to the ${exponet} power is ${value * value}`;
console.log(interpolatedTemplateLiteral); // 5 to the second power is 25
```
严格意义上来讲，模版字面量不是字符串，而是一种特殊的句法表达式，只不过求值后得到的是字符串

* 模版字面量标签函数
  * 模版字面量支持定义**标签函数**，通过标签函数可以自定义插值行为
```js
let a = 6;
let b = 9;

function simpleTag(strings, aValExpression, bValExpression, sumExpression) {
    console.log(strings);        // 展示原始字符串数组：["", " + ", " = ", ""]
    console.log(aValExpression); // 表达式求值的结果1：6
    console.log(bValExpression); // 表达式求值的结果2：9
    console.log(sumExpression);  // 表达式求值的结果3：15

    return 'footer';
}

let untaggedResult = `${a} + ${b} = ${a + b}`;
let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;
console.log(untaggedResult); // 6+9=15
console.log(taggedResult);   // footer
```
  * 可以使用剩余操作符将所有表达式参数手机到一个数组中
```js
let a = 6;
let b = 9;

function simpleTag(strings, ...expressions) {
    console.log(strings);        // 展示原始字符串数组：["", " + ", " = ", ""]

    //使用数组储存表达式参数，通过for循环遍历
    for (const expiression of expressions) {
        console.log(expiression);
    }

    return 'footer';
}

let untaggedResult = `${a} + ${b} = ${a + b}`;
let taggedResult = simpleTag`${a} + ${b} = ${a + b}`;
console.log(untaggedResult); // 6+9=15
console.log(taggedResult);   // footer
```
 * 当参数数量不确定时（n参数，加上标签函数的第一个参数strings，则始终是n+1个）
```js
let a = 6;
let b = 9;

function zipTag(strings, ...expressions) {
    return strings[0] + expressions.map( (e, i) => `${e}${strings[i + 1]}` ).join('');
}

let untaggedResult = `${a} + ${b} = ${a + b}`;
console.log(untaggedResult); // 6+9=15

let taggedResult = zipTag`${a} + ${b} = ${a + b}`;
console.log(taggedResult);   // 6+9=15
```

* 原始字符串
  * 使用`String.raw`标签函数，返回原始的模版字面量的内容
```js
console.log(`\u00A9`);           // ©
console.log(String.raw`\u00A9`); // \u00A9
```

##### `Symbol`类型
ES6新增。`Symbol`符号是原始值，且是唯一、不可变的。

* 基本使用方法
```js
let sym = Symbol();
console.log(typeof sym); //symbol
```
无法与`new`关键字一起作为构造函数使用

* 全局符号注册表
使用`Symbol.for()`方法在全部覆盖注册表中创建并重用符号
```js
let fooGlobalSymbol = Symbol.for('foo');      // 创建新符号
console.log(fooGlobalSymbol, typeof fooGlobalSymbol); // Symbol('foo') symbol

let otherFooGlobalSymbol = Symbol.for('foo'); // 重用已有符号
console.log(fooGlobalSymbol === otherFooGlobalSymbol); //true
```
普通符号不等于全局符号

使用`Symbol.KeyFor()`来查询全局符号注册表
```js
console.log(Symbol.keyFor(fooGlobalSymbol)); // foo
```
返回的是某个全局符号对应的字符串健，如果查询的不是全局符号，则返回`undefined`

* 使用符号作为属性
凡是使用字符串或数值作为属性的地方，都可以使用符号
```js
let s1=Symbol('foo'), s2=Symbol('bar'), s3=Symbol('baz'), s4=Symbol('qux');
let o = {
    [s1] : 'foo val'
};
console.log(o); // Symbol(foo): "foo val"
```

* 常用内置符号
用于暴露语言内部行为
`在提到ES规范时，经常会引用符号在ES规范中的名称，前缀是@@，@@iterator指Symbol.iterator`

* Symbol.asyncIterator
* symbol.hasInstance
* Symbol.isConcatSpreadable
* Symbol.iterator
* Symbol.match
* Symbol.replace
* Symbol.search
* Symbol.species
* Symbol.split
* Symbol.toPrimitive
* Symbol.toStringTag
* Symbol.unscopables
 
**以上这些符号属性暂时均未理解，后续再学习**

##### `Object`类型
通过`new`操作符后跟对象类型的名称来创建
```js
let o = new Object();
```
ES中的`Object`是派生其他对象的基类
对应属性和方法（所有对象都适用这些属性和方法）
1. constructor：创建当前对象的函数
2. hasOwnProperty(propertyName)：判断当前对象实例上是否存在给定的属性
3. isPrototypeOf(Object)：判断当前对象是否为另一个对象的原型
4. propertyIsEnumerable(propertyName)：判断给定的属性是否可以使用
5. toLocaleString()：返回对象的字符串表示
6. toString()：返回对象的字符串表示
7. valueOf()：返回对象对应的字符串、数值或布尔值表示

##### 操作符
数学操作符（加减乘除等）、位操作符、关系操作符和相等操作符等

###### 一元操作符：只操作一个值
* 递增/递减操作符
```js
let age1 = 29;
++age1  // 相当于 age1 = age1 + 1
console.log(age1) // 30
--age1  // 相当于 age1 = age1 - 1
console.log(age1) // 29
```
后缀 递增/递减操作符和前缀的有一点区别需要注意
```js
let num1 = 2;
let num2 = 20;
let num3 = num1-- + num2; // 这里仍然使用num1的原始值进行的相加操作
let num4 = num1 + num2;
console.log(num3); // 22
console.log(num4); // 21
```
不管是前缀还是后缀，递增/递减可以作用于任何值

* 一元加减

###### 位操作符
操作内存中表示数据的比特(位)