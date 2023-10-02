说明：由于javascript高级程序设计第四版翻译和内容排版不是那么适合新手，因此打算调整学习方式，并查漏补缺；看完后再抽空看javascript高级程序设计第四版
* 在javascript.info看在线版本教程`javascript.info`

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

## 基础运算，数学运算
* 加减乘除
* 取余%
* 求幂**

注意
```js
// 取决于第一个元素是number还是字符串
console.log("1"+2+2); // "122"
console.log(1+2+"2"); // "32"
```
* 减法始终将字符串转化为数字

一元运算符比二元运算符拥有更高的优先级
```js
let apples = "2";
let apples = "2";
let oranges = "3";

// +将字符串转换为数字，等同于Number(apples)，该方法仅对字符串有效
console.log(+apples + +oranges); // 5
```

### 自增/自减
```js
let counter = 2;
console.log(counter++); // 3，等同于 counter = counter + 1
console.log(counter--); // 1，等同于 counter = counter - 1
```
* 只能用于变量
* 还有前置写法(++counter/--counter)
  * 区别在于，前置写法返回的是新的值，后置返回旧值


## 值的比较


### 字符串比较
字符串是按字符逐个进行比较

### 不同类型比较
会先将其转化为数字再判定大小

```js
let a = 0;
alert(Boolean(a)); // false;

let b = "0";
alert(Boolean(b)); // true;

// 普通相等无法区分o和false
alert(a==b);   // true

// 严格相等可以区分
alert(a===b);  // false
```
* 严格相等`===`在进行比较时不会进行任何的类型转换


## 条件分支: if 和 '?'

### if语句
```js
let year = prompt('In which year was ECMAScript- specification published?', '');

if (year>2015) {
    alert('Too early...');
} else if (year<2015) {
    alert('Too late');
} else {
    alert('Exaxtly!');
}
```

### 条件运算符 '?'
```js
let result = condition ? value1 : value2;
// 计算条件结果，为真返回`value1`，否则返回`value2`
```

## 逻辑运算符

### `||` (或)
当2个操作数中有一个为真时，返回`true`，否则返回`false`


#### 或运算寻找第一个真值
1. 获取变量列表或者表达式中的第一个真值
```js
let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous" ); // SuperCoder
// 遇到第一个true时停止
```
2. 短路求值
```js
true || alert("not printed");  // 不会打印
false || alert("printed");     // printed
```

### `&&` (与)
当2个操作数都是真时，返回`true`，否则返回`false`

#### 与运算寻找第一个假值
```js
let result = value1 && value2 && value3;
// 在遇到第一个false后立刻返回

alert( 1 && 2 && 3 ); // 3
// 如果都是真值，则会返回最后一个
```

* `&&`的优先级高于`||`


### `!` (非)
表示布尔非运算符
```js
result = !value;
// 将操作数转化为布尔类型: true/false
// 返回相反的值

alert( !true ); // false
alert( !0 );    // true
```

* `!!` 将某个值转化为布尔类型
```js
alert( !!0 );        // false
alert( !!"Dennis" ); // true

// 类似于 Boolean(0)的效果
```

!!! ! 作业
```js
let person = prompt("Who is there?", "");

if ( person === "Admin" ) {
    let password = prompt("Password?", "");

    if ( password === "TheMaster" ) {
        alert("Welcome!");
    } else if ( password === null || password === "" ) {
        alert("Canceled");
    } else {
        alert("Wrong password");
    }
} else if ( person === null || person === "" ) {
    alert("Canceled");
} else {
    alert("I don't know you");
}
```

## 空值合并运算符'??'
返回第一个已定义的操作数
* 当一个值不是`null`或者`undefined`时，则称其为**已定义的**
```js
let firstName = null;
let lastName = null;
let nickName = "SuperCoder";

alert( firstName ?? lastName ?? nickName ?? "Anonymous" ); // SuperCoder
```
### 与`||`比较
* `||` 返回第一个**真**值
* `??` 返回第一个**已定义的**值

### 优先级
??的优先级是4，和||相同
* 优先级顺序可以查看MDN
> `https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence`

#### `?? || &&` 一起使用
* 一般情况下禁止一起使用，除非使用括号明确指定了优先级

## 循环: `while`和`for`

### `while`循环
* 条件为真时，执行循环体
```js
while(condition) {
  // 循环体
};
```

### `do...while`循环
* 循环体至少执行一次，然后检查条件是否为真
```js
do {
  // 循环体
} while(condition);
```

### `for`循环
```js
for (begin; codition; step) {
  // 循环体
}
```
```js
for (let i=0; i<3; i++) {
    alert(i); // 0, 1, 2
}
```

#### 省略语句段
for循环中的任何语句段都可以被省略
```js
let i = 0;

// 省略begin语句段
for (; i<3; i++) {
    alert(i); // 0, 1, 2
}

// 省略step语句段
for (; i<3; ) {
    alert(i++); // 0, 1, 2
}

for (;;) {
  // 两个;必须保留
  // 无限循环
}
```

### 跳出循环
* 通常条件为假时，循环终止
* 也可以使用`break`指令强制退出循环

### 继续下一次迭代
* `continue`
  * 停止当前这一次迭代，并强制开启新一轮循环

```js
for (let i = 0; i < 10; i++) {
    // 当余数是0时，停止本次迭代
    if ( i % 2 == 0 ) continue;
    alert(i); // 1, 3, 5, 7, 9
}
```
> 不能与三元运算符`?`一起使用

### break/continue标签
```js
outer: for (let i = 0; i < 3; i++) {
    for (let j = 0; i < 3; j++) {
        let input = prompt(`Value at coords (${i}, ${j})`, '')

        // 如果input是空值或被取消时( !input = true )，则跳出这2个循环
        if (!input) break outer;
    }
}

alert('Done!');
```
使用标签跳出当前循环的外部


!!! ! 作业
```js
outer: for (let input = prompt("请输入一个大于等于100的数字", ""); input; ) {
    if (!input || input > 100) {
        break outer;
    } else {
        let input = prompt("请输入一个大于等于100的数字", "")
    }
}

alert("Great!");
```