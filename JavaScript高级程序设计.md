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
ES中的所有数值都以 IEEE 754 7=64位格式存储，但未操作符并不直接应用64位，而是先把值转换为32位整数，再进行操作

* 有符号整数使用32位的前31位表示整数值，第32位表示数值的符号
  * 比如0表示正，1表示负（这一位叫做**符号位**）
* 负值以一种称为**二补数**(或补码)的二进制编码存储
  1. 确定绝对值的二进制表示
  2. 找到数值的一补数（或反码），就是每个0都变成1，每个1都变成0
  3. 给结果加1
```
18的二进制
0000 0000 0000 0000 0000 0000 0001 0010

-18的二进制
1111 1111 1111 1111 1111 1111 1110 1101   // 反转
                                      1   // 加1
1111 1111 1111 1111 1111 1111 1110 1110   // 最终结果

```

- 按位非(`~`)
返回一个数值的一补数
```js
let num5 = 25;
let num6 = ~num5;
console.log(num6); // -26
```
- 按位与(`&`)
将数值的每一个位对齐，两个位都是以1时返回1，其他则返回0
```js
let result = 25 & 3;
console.log(result); // 1

// 25 = 0000 0000 0000 0000 0000 0000 0001 1001
//  3 = 0000 0000 0000 0000 0000 0000 0000 0011
// 25 & 3 只有在最后一位上都等于1，所以返回1
```
- 按位或(`|`)
至少1位是1时返回1，否则返回0
```js
let result = 25 | 3;
console.log(result); // 27

// 25 = 0000 0000 0000 0000 0000 0000 0001 1001
//  3 = 0000 0000 0000 0000 0000 0000 0000 0011
// OR = 0000 0000 0000 0000 0000 0000 0001 1011
```
- 按位异或(`^`)
2者相等返回0，2者不相等返回1
```js
let result = 25 ^ 3;
console.log(result); // 26

// 25 = 0000 0000 0000 0000 0000 0000 0001 1001
//  3 = 0000 0000 0000 0000 0000 0000 0000 0011
//XOR = 0000 0000 0000 0000 0000 0000 0001 1001
```
- 左移(`<<`)
按照指定的位数将数值所在的所有位向左移动
```js
let oldValue = 25;
let newValue = oldValue << 5;
console.log(newValue); //800

// oldValue = 0000 0000 0000 0000 0000 0000 0001 1001
// newValue = 0000 0000 0000 0000 0000 0011 0010 0000 空位用0补位
```
- 有符号右移(`>>`)
- 无符号右移(`>>>`)

###### 布尔操作符
- 逻辑非(`!`)
- 逻辑与(`&&`)
- 逻辑或(`||`)

###### 乘性操作符
- 乘法操作(`*`)
- 除法操作(`/`)


###### 指数操作符
`**`
```js
console.log(3 ** 2); // 9
```

###### 加性操作符
- 加法操作(`+`)
- 减法操作(`-`)

###### 关系操作符
- 大于(`>`)，小于(`<`)，大于等于(`>=`)和小于等于(`<=`)

###### 相等操作符
- 等于(`==`)和不等于(`!=`)
- 全等(`===`)和不全等(`!==`)

###### 条件操作符
```js
variable = boolean_expression ? true_value : false_value;
// 如果variable是true，则赋值true_value，如果是false，则赋值false_value


let oldValue=10;
let newValue=25;
let max = (newValue > oldValue) ? newValue : oldValue;
console.log(max); // 25
```

###### 赋值操作符
###### 逗号操作符

##### 语句
###### `if`语句
```js
let i = 20;
if (i > 25) {
    console.log("Greater than 25."); 
} else if (i < 0) {
    console.log("Less than 0.");
} else {
    console.log("Less than or equal to 25.");
}
```
###### `do-while`语句
后测试循环语句，循环体内的代码至少会执行一次
```js
let j = 0;
do {//do语句中的循环操作会一直执行到j=30才会停止
    j += 2;
} while (j < 30);
```
###### `while`语句
先测试循环语句， 循环体内的代码有可能不会执行
```js
while (i < 10) {//知道j=10时才会停止
    i += 2;
}
```
###### `for`语句
也是一种先测试语句
```js
let count = 10;
for (let i = 0; i < count; i++) {
    console.log(i); // 0-9
}
```

###### `for-in`语句
一种严格的迭代语句，用于枚举对象中的非符号健属性
`for (property in expression) statement`
```js
for (const propName in window) {
    document.write(propName);
}
```

###### `for-of`语句
一种严格的迭代语句，用于遍历克迭代对象的元素
`for (property of expression) statement`
```js
for (const el of [1,2,3,4,5,6]) {
    document.write(el);
}
```

###### 标签语句
用于给语句添加一个标签
```js
let count = 10;
start: for (let i = 0; i < count; i++) {
    console.log(i); // 0-9
}
```

###### `break`和`continue`语句
* `break` 立即退出循环，并强制执行循环后的下一条语句
* `continue` 立即退出循环，但会再次从循环顶部开始执行

```js
let num = 0;
for (let i = 1; i < 10; i++) {
    if (i % 5 == 0)  {
        // break;
        // 当i除以5的余数是0时，则停止循环并结束循环，循环终止
        continue;
        // 当i除以5的余数是0时，则跳过本次循环，循环会继续执行
    }
    console.log(i);
    num ++;
}
console.log(num);
// break时，值是4
// continue是，值是8
```
###### `with`语句
将代码的作用域设置为特定的对象
`with (expression) statement`
```js
let qs = loaction.serach.substring(1);
let hostName = location.hostname;
let url = location.href;

// 将以上代码使用with语句调整
with(location) {
    let qs = serach.substring(1);
    let hostName = hostname;
    let url = href;
}
```
**with语句影响性能切难于调试，通常不推荐在产品中使用**

###### `switch`语句
与if语句紧密关联的一种流控制语句
```js
let i1 = 25;
switch(i1) {
    case 25:
        console.log("25");
        break;
    case 35:
        console.log("35");
        break;
    case 45:
        console.log("45");
        break;
    default:
        console.log("Other")
}
```

##### 函数
使用`function`关键字声明
```js
// 基本语法
function functionName(arg0,arg1,..., argN) {
  statements
}
```
- 只要碰到`return`语句，函数则会立即停止并退出执行
- 最佳实践是，函数要么返回值，要么不返回值。（可以不给函数指定返回值，此时函数实际上会返回特殊值undefined）

---
### 变量、作用域与内存
#### 原始值与引用值
* 原始值：最简单的数据
* 引用值：由多个值构成的对象


##### 动态属性
引用值可以随时添加修改和删除其属性和方法
```js
let person = new Object();
person.name = "Dennis";
console.log(person.name); // "Dennis"
```

##### 复制值
通过变量把一个原始值赋值到另一个变量时，原始值会被复制到一个新的变量
```js
let num1 = 5;
let num2 = num1; // num2是一个新的原始值为5的变量
```
把引用值从一个变量赋值给另一个变量时，复制的实际上是指针，指向存储在堆内的对象。对一个对象上的操作变化也会在另外一个对象上反应出来
```js
let obj1 = new Object();
let obj2 = obj1;
obj1.name = "Dennis";
console.log(obj2.name); // "Dennis"
```

##### 传递参数

```js
function addTen(num) {
    num += 10;
    return num;
}

let count = 20;
let result = addTen(count);
console.log(count);  // 20
console.log(result); // 30 result被作为参数传递进了函数addTen()，替代num


function setName(obj) {
    obj.name = "Dennis";
}
person = new Object();
setName(person);
console.log(person.name); // Dennis
// 当引用值被传递为参数时，这个对象被复制到参数obj中。在函数内部，obj和person指向同一个对象


function setName(obj) {
    obj.name = "Dennis";

    // 内部重写时，相当于在函数内部创建了一个指针，指向一个新的对象，这个对象在函数结束时就已经销毁
    obj = new Object();
    obj.name = "May";
}
person = new Object();
setName(person);
console.log(person.name); // Dennis

```
* ECMAScript中函数的参数就是局部变量

##### 确定类型
* `typeof` 用于检测原始值的类型
* `instanceof` 用于检测引用值是什么类型的对象
```js
console.log(person of Object);  // 这种情况，只要检测的是引用值和Object构造函数，都会返回true
console.log(colors of Array);  // 变量colors时Array吗？
```

##### 执行上下文与作用域
* 执行上下文
  * 全局上下文
    * 在浏览器中，全局上下文就是我们常说的`window`对象
  * 局部上下文
* 作用域链
  * 决定了各级上下文中的代码在访问变量和函数时的顺序
执行上下文都有一个关联的**变量对象**
```js
function changeColor() {
    let anotherColor = "red";

    function swapColors() {
        let tempColor = anotherColor;
        anotherColor = color;
        color = tempColor;
        // 这里能访问 tempColor、anotherColor、color
    }
    swapColors(); 
    // 这里能访问变量anotherColor、color
}
changeColor(); // 这里只能访问变量color
```

##### 作用域链增强
某些语句会导致作用域链前端临时添加一个上下文，并在代码执行后删除
* `try/catch`语句的`catch`块
* `with`语句
```js
function buildUrl() {
    let qs = "?debug=true";

    with(location) {
        let url = href + qs;
        // 这里的href相当于location.href
        // url使用let声明，被限制在with语句中
    }

    return url;
}
```

##### 变量声明


##### 垃圾回收
执行环境在代码执行时管理内存，通过自动内存管理实现内存分配和闲置资源的回收
* 标记清理（最常用的垃圾回收策略）
当变量进入上下文，则会被加上存在于上下文中的标记。当离开上下文时，则加上离开上下文的标记


* 引用计数（不常用）
对每个值都记录它的被引用次数
记录每一个值的赋值记录，每一次赋值则加1；当保存对该值引用的变量被其他值覆盖，则减1；直到为0时，则收回其内存释放内存


##### 内存管理
解除引用：如果某个数据不再必要，可以在使用完之后把它的值设置为`null`，从而释放其引用
比较适合全局变量和全局对象的属性

1. 通过let和const声明提升性能

##### 内存泄露
要注意出现难以察觉且有害的内存泄露问题
```js
function setName() {
  name = "Jake";
}
// 解释器会把变量当做window的属性来创建
```
定时器也可能会导致内存泄露
```js
let name = "Jake";
setInterval(()=> {
  let name = "Jake";
  return function {
    return name;
  }
}, 100);
// 只要定时器一直运行，引用的name就会一直占用内存
```

##### 静态分配与对象池

---
### 基本引用类型
引用类型虽然有点像类，但跟类并不是一个概念


#### `Date`
```js
// 创建日期对象
let now = new Date();
console.log(now); // Thu Sep 21 2023 13:07:47

let someDate = new Date(Date.parse("May 23,   2019"));
// 等价于 let someDate = new Date("May 23, 2019")
console.log(someDate); // Thu May 23 2019 00:00:00

// 返回日期的毫秒表示，从0开始计月份，月份(0-11) 日期(1-31) 时(0-23)
let y2k = new Date(Date.UTC(2000, 0));
console.log(y2k); // 返回本地时间2000年1月1日零点
```

##### 继承的方法

* `toLocalString()` 返回与浏览器运行的本地环境一致的日期和实践
* `valueOf()` 返回日期的毫秒表示

##### 日期格式化方法
```js
let nowDateString = new Date("2023,01,01");

console.log(nowDateString.toDateString()); // Sun Jan 01 2023
console.log(nowDateString.toTimeString()); // 00:00:00 GMT+0800
console.log(nowDateString.toLocaleDateString()); // 2023/1/1
console.log(nowDateString.toLocaleTimeString()); // 00:00:00
console.log(nowDateString.toUTCString()); // Sat, 31 Dec 2022 16:00:00 GMT
```

##### 日期/时间组件方法
* `getTime()`  返回日期的毫秒表示
* `getMonth()` 返回日期中的月
* `getDate()`  返回日期中的日
* `getFullYear()` 返回4位数年
* `getDay()`   返回日期中的周几（0表示周日）
* `getHours()` 返回日期中的时(0~23)
* `getMinutes()`  返回日期中的分
* `getSeconds()`  返回日期中的秒
等等……
* 以上对应的大部分get都可以替换为set，表示设置日期中的XX表示用于修改日期（如`setDate()` 设置日期中的日） 


#### `RegExp`
通过`RegExp`类型支持正则表达式
* g: 全局模式，查找字符串的全部内容
* i: 不区分大小写
* m: 多行模式
* y: 粘附模式，只查找从lastIndex开始及之后的字符串
* u: Unicode模式
* s: dotAll模式，表示元字符.匹配任何字符
```js
let patternl1 = /at/g;
// 匹配字符串中所有的"at"

let patternl2 = /[bc]at/i;
// 匹配第一个bat或者cat，不区分大小写

let patternl3 = /.at/gi;
// 匹配所有以at结尾的三字符，不区分大小写
```
如果是匹配元字符本身，需要使用"\"进行转义
```js
let patternl3 = /\.at/gi;
// 匹配所有".at"，不区分大小写
```
也可以使用构造函数进行创建
```js
let patternl4 = new RegExp(".at", "gi");
// 匹配所有以at结尾的三字符，不区分大小写


const re1 = /cat/g;
console.log(re1); // /cat/g

const re2 = new RegExp("cat", "g");
console.log(re2); // /cat/g

const re3 = new RegExp("cat", "i");
console.log(re3); // /cat/i
// 还可以基于已有的正则表达式选择性的修改标记
```

##### `RegExp`实例属性

##### `RegExp`实例方法
* `exec()` 用于配合捕获组使用
```js
let text = "mom and dad and baby";
let pattern = /mom( and dad( and baby)?)?/gi;

let matches = pattern.exec(text);
console.log(matches.index); //返回字符串中匹配模式的起始位置
console.log(matches.input); //返回要查找的字符串
console.log(matches[0]);    //返回捕获到的第一个字符串
console.log(matches[1]);    //返回捕获到的第二个字符串
console.log(matches[2]);    //返回捕获到的第三个字符串
```
```js
let text1 = "cat, bat, sat, fat";
let pattern5 = /.at/;

matches1 = pattern5.exec(text1);
console.log(matches1.index);        // 0
console.log(matches1[0]);           // cat
console.log(pattern.lastIndex);     // 0
// 没有g标记，不是全局模式，因此匹配到一个符合的字符串就停止了
```

* `test()`用于测试特定的正则表达式数值序列是否正确
```js
let text2 = "0000-00-0000";
let pattern6 = /\d{4}-\d{2}-\d{4}/;

if (pattern6.test(text2)) {
    console.log("The pattern was matched.");
} else {
    console.log("Oh No!");
}
```

##### `RegExp`构造函数属性
这些属性适用于作用域内的所有正则表达式（也可以称作静态属性）
```js
let text3 = "this has been a short summer";
let pattern7 = /(.)hort/g;

if (pattern7.test(text3)) {
    // 搜索的字符串，简写: $_
    console.log(RegExp.input);        // this has been a short summer
    // 出现在lastMatch前面的文本，简写: $`
    console.log(RegExp.leftContext);  // this has been a 
    // 出现在lastMatch后面的文本， 简写: $'
    console.log(RegExp.rightContext); // summer
    // 最后匹配的文本，简写: $&
    console.log(RegExp.lastMatch);    // short
    // 最后匹配的捕获组，简写: $+
    console.log(RegExp.lastParen);    // s
}
```
* 不要在生产环境中使用他们！！！

#### 原始值包装类型
目前有3种: `Number` `Boolean` `String`

* isInterger() 辨别一个数值是否是整数
```js
console.log(Number.isInterger(1)); // true
```
* charAt() 返回给定索引位置的字符
```js
let message = "abcde";
console.log(message.charAt(2)); // c
```
* 字符串操作方法
1. `concat()`
2. `slice()` 切片
3. `substr()`
4. `substring()`
```js
let text4 = "hello ";
let result = text4.concat("world!");
console.log(result); // hello world!
console.log(text4.substr(2)); // 第二位后面的字符内容：llo 
console.log(text4.substr(1, 3)); // 第2位开始，展示3位字符：ell 
console.log(text4.substring(1,3)); // 第2-3位字符（前包后闭）：el 
```

* 字符串位置方法

1. `indexOf()`     从字符串开头开始查找对应字符的位置
2. `lastIndexOf()` 从字符串结束开始查找对应字符的位置
```js
let result = "hello world!";
console.log(result.indexOf("l")); //2
console.log(result.lastIndexOf("l")); //9


// 传递第二个参数，限制开始的位置
console.log(result.indexOf("l", 6)); //0
console.log(result.lastIndexOf("l", 6)); //3
```

* 字符串包含方法

1. startsWith() 判断是否是从某个字符串开始，接收第二个参数，表示开始查询的位置
2. endsWith() 判断是否是某个字符串结尾
3. includes() 判断是否包含某个字符串，接收第二个参数，表示开始查询的位置

* `trim()`
创建一个字符串的副本，删除前后所有的空格
* `repeat()`
接收整数参数，表示要将字符串复制多少次
* `padStart(a, b)`和`padEnd(a, b)`
  * a 表示长度
  * b 可选的填充字符串是什么

* 大小写转换
1. `toLowerCase()`
2. `toLocaleLowerCase()`
3. `toLocaleUpperCase()`
4. `toUpperCase()`

* 字符串模式匹配方法
1. `match()` 与`RegExp`中的`exec()`方法相同
2. `serach()` 返回第一个匹配的位置索引


#### 单例内置对象
##### `Global`
在全局作用域中定义的变量和函数都会变成Global对象的属性

* `URL`编码方法

1. `encodeURI()`
2. `encodeURIComponet()`

* `eval()`方法

* `window`对象
浏览器将`window`对象实现为`Global`对象的代理
```js
var color = "red";
function sayColor() {
    console.log(window.color);
}
window.sayColor(); //red
```

#### `Math`
保存数学公式、信息和计算

* `min()`和`max()`
```js
console.log(Math.max(3,45,1,2,6)); // 45
console.log(Math.min(3,45,1,2,6)); // 1
```
* 四舍五入
1. Math.ceil() 向上舍入最近的整数
2. Math.floor() 向下舍入最近的整数
3. Math.round() 执行四舍五入
4. Math.fround() 返回最接近的单精度浮点值

* `random()`
返回一个`[0,1)`范围内的随机数


### 集合引用类型

#### Object
除了使用`new`操作符创建`Object`实例，还可以使用`对象字面量`表示法
```js
let person = {
  name: "Dennis";
  age: 29;
};
console.log(person.age);
```
* 比较适合函数有大量可选参数的情况
```js
function displayInfo(args) {
    let output = "";

    if (typeof args.name == "string") {
        output += "Name: " + args.name + "\n";
    }

    if (typeof args.age == "number") {
        output += "Age: " + args.age + "\n";
    }

    alert(output);
}

displayInfo({
    name: "Dennis",
    age: 29
});
```
属性一般是通过**点语法**来存取，但也可以使用中括号来存取属性

#### `Array`
数组，每个槽位可以存储任意类型的数据
* 动态大小，随着数据添加而自动增长


##### 创建数组
* 使用`new Array()`或者`Array`构造函数
```js
let colors = new Array();

// 设置数组容纳的元素数量
let colors = new Array(20);

// 直接使用Array
let colors = Array(3) // 创建一个包含3个元素的数组
let colors = Array("Grey") // 创建一个只包含元素"Grey"的数组
```
* 使用**数组字面量**表示法
```js
let colors = ["red", "blue", "green"];
let names = [];
let values = [1, 3];
```
* `Array.from()`
用于将类数组结构转换为数组实例
```js
console.log(Array.from("Dennis")); // ["D", "e", "n", "n", "i", "s"]

// 对现有数组进行浅复制
const a1 = [1,2,3,4];
const a2 = Array.from(a1);
console.log(a1); // [1,2,3,4]
console.log(a2); // [1,2,3,4]
console.log(a1 === a2); // false
```
`from()`包含第二个和第三个可选参数
第二个可选的映射函数参数：增强新数组的值
第三个可选参数：指定函数中this的值

* `Array.of()`
可以把一组参数转换为数组
```js
console.log(Array.of(1,2,3,4));   // [1,2,3,4]
console.log(Array.of(undefined)); // [undefined]
```

##### 数组空位
```js
const options = [,,,,,];
console.log(options.length); // 5
console.log(options);        // 空数组
```

##### 数组索引
数组的`length`属性也可以修改数组的长度
```js
let colors = ["red", "blue", "black"];
colors.length = 2;
console.log(colors); // ["red", "blue"]
// 变成了一个长度为2的数组

colors.length = 4;
// 变成一个长度为4的数组
```

##### 检测数组
使用`instanceof`判断一个对象是不是数组
使用`Array.isArray()`方法确定一个值是否是一个数组

##### 迭代器方法
* `keys()` 返回数组索引
* `values()` 返回数组元素
* `entries()` 返回索引/值对


##### 复制和填充方法
* 批量复制: `copyWithin()`
```js
let ints, reset = () => ints = [0,1,2,3,4,5,6,7,8,9];
reset();

// 从ints中复制索引0开始的内容，插入到索引5开始的位置
// 在源索引或目标索引到达数组的边界停止
ints.copyWithin(5);
console.log(ints); // [0,1,2,3,4, 0,1,2,3,4]
reset();

// 从ints中复制索引5开始的内容，插入到索引0开始的位置
ints.copyWithin(0, 5);
console.log(ints); // [5,6,7,8,9, 5,6,7,8,9]
reset();

// 从ints中复制索引[0,3)的内容，插入到索引4开始的位置
ints.copyWithin(4, 0, 3);
console.log(ints); // [5,6,7,8,9, 5,6,7,8,9]
reset();
```
默认忽略索引值超出数组边界，过期和过高的情况

* 填充数组: `fill()`
```js
const zeroes = [0,0,0,0,0];

// 用5填充整个数组
zeroes.fill(5);
console.log(zeroes); // [5,5,5,5,5]

// 用6填充索引≥3的元素
zeroes.fill(6, 3);
console.log(zeroes); // [5,5,5,6,6]

// 用7填充1≤索引＜3的元素
zeroes.fill(7,1,3);
console.log(zeroes); // [5,7,7,6,6]
```
默认忽略索引值超出数组边界，过低和过高的情况

##### 转换方法
* `toString()`方法会返回有数组中每个值的等效字符串拼接的一个逗号分隔的字符串
```js
let colors = ["red", "blue", "green"];
console.log(colors.toString()); // red,blue,green
console.log(colors.valueOf());  // ["red", "blue", "green"]
console.log(colors);            // ["red", "blue", "green"]
```
* `toLocaleString()`稍微有一点区别，会调用数组每个值的`toLocaleString()`方法
```js
let person1 = {
    toLocaleString() {
        return "Dennis";
    },

    toString() {
        return "Kangxiaodong";
    }
};

let person2 = {
    toLocaleString() {
        return "May";
    },

    toString() {
        return "May";
    }
};

let people = [person1, person2];
alert(people); // Kangxiaodong,May
alert(people.toLocaleString()); // Dennis,May
alert(people.toString()); // Kangxiaodong,May
```
* `join()` 方法，得到`toString()`相同的结果，且能够更改分隔符
```js
let colors = ["red", "blue", "green"];
// 让字符串的分隔符变成 ||
alert(colors.join("||")); //red||blue||green
```

##### 栈方法
栈是一种后进先出的结构（LIFO）
数据项的插入（称之为**推入**，push），删除（称之为**弹出**，pop）只在栈顶发生
```js
let colors1 = new Array();
let count = colors1.push("red", "blue"); // 推入2项
console.log(count); // 返回数组的长度，2
console.log(colors1);

let item = colors1.pop(); // 取得最后一项
console.log(item); // blue
```

##### 队列方法
以先进先出（FIFO）形式限制访问
推入: push()，删除: shift()
```js
let colors1 = new Array();
let count = colors1.push("red", "blue"); // 推入2项
console.log(count); // 返回数组的长度，2
console.log(colors1);

let item = colors1.shift(); // 取得第一项
console.log(item); // red
```
ES6提供了一种新的方法`unshift()`，执行和`shift()`相反的操作，在数组的开通添加值
```js
let item = colors1.unshift("white"); // 在数组开头添加值
console.log(item); // 数组长度：3
```

##### 排序方法
* `reverse()` 反向排列
* `sort()`    在比较时，会通过`String()`转型函数将元素转换为`string`再进行比较
```js
let values = [0,1,5,10,15];
console.log(values.sort()); // [0,1,10,15,5]

// sort()可以接收一个比较函数
values.sort( (a, b) => a < b ? 1 : a > b ? -1 : 0 );
console.log(values); // [15,10,5,1,0]
// 如果数组的元素都是数值，还有更简单的方法
values.sort( (a, b) => b - a ); // 同上
console.log(values); // [15,10,5,1,0]
```

##### 操作方法
* `concat()` 在现有数组的基础上创建一个新的数组
```js
let valuse2 = values.concat("yellow");
console.log(valuse2); // [15,10,5,1,0, 'yellow']

let newValues = [12, 13];
newValues[Symbol.isConcatSpreadable] = false; // 修改该参数，让concat的数组参数不被打平

let values3 = values.concat(newValues);
console.log(values3); // [15,10,5,1,0, [12, 13]]
```

* `slice()` 原有数组的切片

* `splice()` 在数组中插入元素
  * 删除：传递2个参数
  * 插入：传递3个参数
  * 替换：在删除元素的同时在指定位置插入新元素，传递3个参数
  插入和替换的区别在于是否要删除元素
```js
// 从索引0开始删除1个元素
let remove = colors.splice(0, 1); // 删除第一项
console.log(remove); // red
console.log(colors); // ['blue', 'green']

// 从索引1开始，删除0个元素，添加元素white
let insert = colors.splice(1, 0, "white");
console.log(insert); // 空数组
console.log(colors); // ['blue', "white", 'green']

// 从索引1开始，删除1个元素，添加元素yellow
let replace = colors.splice(1, 1, "yellow");
console.log(replace); // white
console.log(colors);  // ['blue', "yellow", 'green']
```

##### 搜索和位置方法
1. 严格相等

从前往后开始搜索
* `indexOf()` 
* `includes()` 

从后往前开始搜索
* `lastIndexOf()` 

均有两个参数：要查找的元素和一个可选的起始搜索位置
```js
let numbers = [1,2,3,4,5,6,2,1];
console.log(numbers.indexOf(2)); // 1
console.log(numbers.lastIndexOf(2)); // 6
console.log(numbers.includes(2)); // true
```

2. 断言函数
接收三个参数：元素，索引和数组本身
* `find()`
* `findIndex()`
```js
// 返回数组中第一个＞3的元素
console.log(numbers.find( (number, index, array) => number > 3 )); // 4
// 返回数组中第一个＞5的元素的索引
console.log(numbers.findIndex( (number, index, array) => number > 5 )); // 5
```

3. 迭代方法
5个迭代方法，2个参数，A：以数组项为参数的函数，B：作用域对象
A中的函数接收3个参数（类似断言函数，元素，索引和数组本身）
对数组每一项都运行传入的函数
* `every()`：如果数组的每一项都返回`true`，则返回`true`
* `filter()`：返回`true`时，将对应选项组成新的数组
* `forEach()`：没有返回值
* `map()`：返回每次调用的结果组成的数组
* `some()`：如果有一项返回`true`，则返回`true`

```js
let numbers1 = [1,2,3,4,4,3,2,1]

let everyResult = numbers1.every( (item, index, array) => item>=1 );
console.log(everyResult); // true

let filterResult = numbers1.filter( (item, index, array) => item>=3 );
console.log(filterResult); // [3,4,4,3]

let mapResult = numbers1.map( (item, index, array) => item * 2 );
console.log(mapResult); // [2,4,6,8,8,6,4,2]
```

4. 归并方法
* `reduce()` 从第一项开始遍历
* `reduceRight()` 从最后一项开始遍历

```js
let values1 = [1,2,3,4,5]

/*
遍历数组的每一项，并最终返回值
prev 上一个归并项
cur 当前归并项
当前归并项的索引和数组本身
*/ 
let sum = values1.reduce( (prev, cur, index, array) => prev+cur );
console.log(sum); // 15
```

#### 定型数组`(typed array)`
一种特殊的包含数值类型的数组

##### `ArrayBuffer`
构造函数，用于在内存中分配特定数量的字节空间，一经创建，大小就不能调整，但可以被`slice`切片复制到新数组
```js
const buf = new ArrayBuffer(16) // 在内存中分配16字节
alert(buf.byteLength);          // 16

const buf2 = buf.slice(4, 12);
alert(buf2.byteLength);         // 8
```
分配失败时会抛出错误，声明时会将所有二进制初始化为0

##### `DataView`
专门为文件I/O和网络I/O设计
```js
const buf = new ArrayBuffer(16);

// DataView默认使用整个ArrayBuffer
const fullDataView = new DataView(buf);
console.log(fullDataView.byteOffset);       // 16   
console.log(fullDataView.byteLength);       // 0
console.log(fullDataView.buffer === buf);   // true

// 接收一个可选的字节偏移量和字节长度
// byteOffset = 0 表示视图从缓冲起点开始
// byteLength = 8 限制视图为8个长度
const firstHalfDataView = new DataView(buf, 0, 8);
console.log(firstHalfDataView.byteOffset); // 0
console.log(firstHalfDataView.byteLength); // 8
console.log(firstHalfDataView.buffer === buf); // true

// 这里仅一个参数，表示视图从第7个字节开始
const secondHalfDataView = new DataView(buf, 7);
console.log(secondHalfDataView.byteLength); // 9
```
1. `ElementType`
对存储在缓冲内的数据类型没有预设。API强制开发者在读、写时指定一个`ElementType`
* Int8/Uint8   
  * 1字节
  * 8位`有/无`符号整数
* Int16/Uint16
  * 2字节 
  * 16位`有/无`符号整数
* Int32/Uint32
  * 4字节 
  * 32位`有/无`符号整数
* Float32
  * 4字节 
  * 32位IEEE-754浮点数
* Float64
  * 8字节 
  * 64位IEEE-754浮点数


1. 字节序
大端字节序：最高有效位保存在第一个字节，最低有效位保存在最有一个字节
小端字节序：最低有效位保存在第一个字节，最高有效位保存在最有一个字节

1. 边界情况
`DataView`读写操作的前提是必须有充足的缓冲区，否则会抛出`RangeError`

##### 定型数组
另一种形式的`ArrayBuffer`视图
```js
const buf1 = new ArrayBuffer(12);

// 创建一个Int32Array，每个元素4个字节
const ints1 = new Int32Array(buf1);
console.log(ints1.length); // 3

const ints2 = new Int16Array([2,4,5,7]);
console.log(ints2.length); // 4
console.log(ints2.buffer.byteLength); // 8，每项2个字节，一共8字节

// 基于普通数组来创建
const ints3 = Int32Array.from([1,2,3,4,6]);
console.log(ints3.buffer.byteLength); // 20

// 基于传入的参数创建一个FloatArray
const floats1 = Float32Array.of(3.14, 2.718, 1.618, 1.01);
console.log(floats1.buffer.byteLength); // 16
console.log(floats1[3]); // 1.0099999904632568

// 使用BYTES_PRE_ELEMENT属性，返回定型数组中每个元素的大小
console.log(floats1.BYTES_PER_ELEMENT); // 4
console.log(ints2.BYTES_PER_ELEMENT);   // 2
```
1. 定型数组行为
定型数组和普通数组很相似，有很多相同的操作符、方法和属性
 * 迭代方法，搜索和位置方法，归并方法，排序法方法，迭代器方法，复制和填充方法，转换方法
slice()、find()、filter()、keys()、map()、sort()等
其中返回新数组的方法返回的数组包含的元素类型是相同的
 * 栈方法，concat()不适用

2. 合并、复制和修改定型数组

* `set()` 把提供的数组复制给当前定型数组指定的索引位置
* `subarray()` 基于原始定型数组中复制的值返回一个新定型数组

```js
const ints3 = Int32Array.from([1,2,3,4,6]);

// 长度已固定，因此这里插入时，直接替换掉了旧值
ints3.set([1,1], 1);
console.log(ints3); // [1,1,1,4,6]

const ints3Copy = ints3.subarray();
console.log(ints3Copy); // [1,1,1,4,6]

const ints3Copy1 = ints3.subarray(4, 5);
console.log(ints3Copy1); // [6]
```

3. 下溢和上溢
不会影响其他索引
```js
const unsignedInts = new Uint8Array(2);

//上溢的位不会影响相邻索引，索引只取最低有效位上的8位
unsignedInts[1] = 256;
console.log(unsignedInts); // [0, 0]

unsignedInts[1] = 511;
console.log(unsignedInts); // [0, 255]

// 下溢会被转换为其无符号的等价值
unsignedInts[1] = -1;
console.log(unsignedInts); // [0, 255]

const ints10 = new Int8Array(2);
// 上溢自动变成二补数形式
ints10[1] = 128;
console.log(ints10); // [0, -128]

// 下溢自动变成二补数形式
ints10[1] = 255;
console.log(ints10); // [0, -1]

```

#### `Map`
ES6新增的一种集合类型

##### 基本API
初始化之后，可以使用`set()`添加键值对，
* 使用`get()`和`has()`进行查询
* `size`属性获取键值对的数量
* `delete()`和`clear()`进行删除值

```js
// 构造一个空映射
const m = new Map();

// 使用嵌套数组初始化映射
const m1 = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"]
]);
console.log(m1.size); // 3

// 使用自定义迭代器额初始化映射
const m2 = new Map({
    [Symbol.iterator]: function*() {
        yield ["key1", "val1"];
        yield ["key2", "val2"];
        yield ["key3", "val3"];
    }
});
console.log(m2.size); // 3

m.set("firstName", "Yue").set("lastName", "May");

console.log(m.has("firstName")); // true
console.log(m.get("firstName")); // Yue
console.log(m.size); // 2

m.delete("firstName");  // 只删除一个键值对
console.log(m);

m.clear(); // 清除所有键值对
console.log(m);
```
##### 顺序与迭代
```js
for (let key of m2.keys()) {
    console.log(key);
}
// key1 key2 key3

for (let value of m2.values()) {
    console.log(value);
}
// val1 val2 val3
```

#### `WeakMap`
ES6新增的弱映射，API是`Map`的子集
初始化操作和`Map`基本是一样的，不能使用`clear()`

##### 弱键
表示key不属于正式引用，不会影响垃圾回收，但value不是

##### 使用弱映射
DOM节点元数据
`WeakMap`非常适合保存关联元数据（因为对应实例不会妨碍垃圾回收）

#### `Set`
ES6新增的集合类型，像一种加强的`Map`，大多数API和行为都是共有的（像一个没有`key`的`map`）
* `add()`增加值
* `has()`查询
* `size`取得元素数量
* `delete()`和`clear()`删除元素

#### `WeakSet`
ES6新增的"弱集合"，API是`Set`的子集

##### 弱值
value不属于正式引用，不阻止垃圾回收

##### `WeakSet`的值不可迭代

---
### 迭代器与生成器

#### 迭代器模式
把有些结构称为`可迭代对象`(Iterable)
* 任何实现`可迭代对象Iterable`接口的数据结构都可以被实现`迭代器Iterator`接口的结构**消费**
* 每个迭代器都会关联一个**可迭代对象**

#### 可迭代协议
很多内置类型都实现了`Iterable`接口
* 字符串
* 数组
* 映射
* 集合
* `arguments`对象
* `NodeList`等DOM集合类型

#### 迭代器协议
迭代器API使用`next()`方法，在可迭代对象中遍历数据
成功调用后，返回一个`IteratorResult`对象，包含迭代器返回的下一个值
```js
let arr = ["foo", "bar"];

// 迭代器（给数组创建迭代器接口）
let iter = arr[Symbol.iterator]();

// 执行迭代
console.log(iter.next()); // {value: 'foo', done: false}
console.log(iter.next()); // {value: 'bar', done: false}
console.log(iter.next()); // {value: undefined, done: true}
```

#### 生成器
ES6新增的一个极为灵活的结构，拥有在一个函数块内暂停和恢复代码执行的能力

##### 生成器基础
在函数名称前面加一个星号(*)表示是一个生成器
```js
function* generator() {}
```
* 调用生成器函数会产生一个**生成器对象**
* 生成器对象一开始处于暂停执行的状态
* 生成器实现了`Iterator`接口，因此可以使用`next()`方法
```js
function* generatorFn() {}

const g = generatorFn();

console.log(g);         // generatorFn {<suspended>}
console.log(g.next);    // f next() { [native code] }
console.log(g.next());  // {value: undefined, done: true}
```
* 生成器在初次调用`next()`方法之后开始执行

##### 通过yield中断执行
生成器函数遇到`yield`关键字之后，执行会停止，函数作用域的状态会被保留
* 在生成器对象上调用`next()`恢复执行

```js
function* generatorFn1() {
    yield 'foo';
    yield 'bar';
    return 'baz';
}

let g1 = generatorFn1();

console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
console.log(g1.next());
```

* `yield`关键字只能在生成器函数内部使用

1. 将生成器对象作为一个可迭代对象
```js
function* nTimes(n) {
    while(n--) {
        yield;
    }
}

for (let _ of nTimes(3)) {
    console.log('foo');
}
```
2. 使用yield实现输入输出

3. 产生可迭代对象
可以使用星号增强`yield`的行为
```js
function* generatorFn2() {
    yield* [1,2,3]; // 将一个可迭代对象序列化为一连串可以单独产出的值
}

let generatorObject = generatorFn();

for (const x of generatorFn2()) {
    console.log(x);
}
// 1
// 2
// 3
```

4. 使用`yield*`实现递归算法
```js
function* nTimes1(n) {
    if (n>0) {
        yield* nTimes1(n-1);
        yield n - 1;
    }
}

for (const x of nTimes1(4)) {
    console.log(x);
}
// 0
// 1
// 2
// 3
```

##### 生成器作为默认迭代器
```js
class Foo {
    constructor() {
        this.values = [1,3,2];
    }

    *[Symbol.iterator]() {
        yield* this.values;
    }
}

const f = new Foo();
for (const x of f) {
    console.log(x);
}
```
##### 提前终止生成器
1. `return()`
    * 所有生成器都有`return()`方法
    * 强制生成器进入关闭状态，且无法恢复
2. `throw()`
    * 会在暂停的时候将一个提供的错误注入到生成器对象中，如果错误未处理，生成器就会关闭
    * 如果生成器函数**内部**处理了这个错误，那么生成器就不会关闭，而且还可以恢复执行