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

> 作业
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


> 作业
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

```js
// 求素数
start: for (let num = prompt("请输入大于2的数字", ""); num>=2; num--) {
    for (let i = 2; i < num; i++) { 
        // 只能被1和本身整除
        // 如果能被1和本身之外的整数整除，则不是素数
        if (num % i == 0) continue start;
    }
    
    alert(num);
}
```

## `switch`语句

```js
let a = 2 + 2;

switch (a) {
    case 3:
        alert("to small!");
        break;
    case 4:
        alert("Exactly!");
        break;
    case 5:
        alert("too big");
        break;
    default:
        alert("I don't know such values");
}
// 在没有break的情况下，将会执行 "casr 4"之后的所有alert
```

### `case`分组
```js
let a = 2 + 2;

switch (a) {
    case 4:
        alert("Exactly!");
        break;

    // 3和5显示相同的信息
    case 3:
    case 5:
        alert("Wrong!");
        break;
    default:
        alert("I don't know such values");
}
```

### 类型很关键
switch中的相等是严格相等
```js
let age = prompt("Enter a value?")

switch (age) {
    case "0":
    case "1":
        alert("One or zero");
        break;
    case "2":
        alert("Two");
        break;
    case 3: // 无效分支
        alert("Never executes!");
        break;
    default:
        alert("An unknown value");
}
```

> 作业
```js
switch (browser) {
    case 'Edge':
        alert( "You've got the Edge!" );
        break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert( 'Okay we support these browsers too' );
        break;

    default:
        alert( 'We hope that this page looks ok!' );
}

// 替换为if写法
if (browser === "Edge") {
    alert( "You've got the Edge!" );
} else if (
    browser==='Chrome'  || 
    browser==='Firefox' || 
    browser==='Safari'  || 
    browser==='Opera') {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );
}
```

```js

let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert( 0 );
        break;

    case 1:
        alert( 1 );
        break;

    case 2:
    case 3:
        alert( '2,3' );
        break;
}

// 替换为switch写法
let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert("2, 3");
        break;
}
```

## 函数

### 函数声明
```js
function showMessage() {
    alert( "hello world!" );
}

showMessage();
```

#### 局部变量
在函数中声明的变量，尽在函数内部可见

#### 外部变量
也可以访问外部变量
* 当函数内部声明了一个和外部变量同名的变量时，则会使用局部的该变量，**遮蔽**外部变量

### 参数
* parameter 函数声明中括号内列出的变量
* arguments 调用函数时传递给函数的值

### 默认值

### 返回值
* `return`
  * 空的return或者没有return的函数返回值是`undefined`
  * return和返回值之间不要添加新行

### 函数命名
常用的函数开头
* "get..." 返回一个值 
* "calc..." 计算某些内容
* "create..." 创建某些内容
* "check..." 检查某些内容并返回boolean值
* "show..." 显示某些内容

> 一个函数尽量只包含一个功能（1个行为） 



## 函数表达式
```js
let sayHi = function() {
    alert("Hello");
};
```
> 函数表达式允许省略函数名


### 函数是一个值
### 回调函数
```js
function ask(question, yes, no) {
    if (confirm(question)) {
        yes(); // 回调函数
    } else {
        no();  // 回调函数
    }
}

function showOk() {
    alert("You argeed.");
}

function showCancel() {
    alert("You canceled the execution.");
}

ask("Do you agree?", showOk, showCancel);

// 更简洁的写法
function ask(question, yes, no) {
    if (confirm(question)) {
        yes(); // 回调函数
    } else {
        no();  // 回调函数
    }
}

ask(
    "Do you agree?", 
    // 使用匿名函数
    function() {alert("You argeed.");},
    function() {alert("You canceled the execution.");}
);
```

### 函数声明 VS 函数表达式

* 函数表达式从创建那一刻开始，可以使用
* 函数声明在未被定义之前，就可以被调用

日常工作中优先使用函数声明

## 箭头函数，基础知识
```js
let func = (arg1, arg2, arg3, ..., argN) => expression;

// 等价于
let func = function(arg1, arg2, arg3, ..., argN) {
    return expression;   
};
```
多行使用时需要添加`{}`，并需要return
```js
let sum = (a, b) => {
    let result = a + b;
    return result;
};

alert(sum(2, 3)); // 5
```

> 作业
```js
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

// 用箭头函数重写
let ask = (question, yes, no) => confirm(question) ? yes() : no();

ask(
    "Do you agree?",
    () => { alert("You agreed."); },
    () => { alert("You canceled the execution."); }
);

```

## JavaScript特性回顾

---

# 代码质量

### `Sources`面板
包含文件导航，代码编辑和JavaScript调试 3个板块

### 控制台

#### `debugger`命令
使用`debugger`命令来暂停代码
```js
function hello(name) {
    let phrase = `hello, ${name}!`;

    debugger; // 调试器会在这里停止

    say(phrase);
}
```

### 使用Mocha进行自动化测试
#### 行为驱动开发BDD
* 测试
* 文档
* 示例

#### 规范
```js
describe("title", function() {...})
```
```js
describe("pow", function() {
    it("raises to n-th power", function() {
        assert.equal(pow(2, 3), 8);
        // 检查2**3是否=8
    })
})
```

#### 行为规范
* Mocha 核心框架，提供了包括通用型测试函数`describe`和`it`，以及用于运行测试的主函数
* Chai 提供很多断言支持的库
* Sinon 用于监视函数、模拟内建函数的其他函数的库

```html
<!DOCTYPE html>
<html>
<head>
  <!-- add mocha css, to show results -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.css">
  <!-- add mocha framework code -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/mocha/3.2.0/mocha.js"></script>
  <script>
    mocha.setup('bdd'); // minimal setup
  </script>
  <!-- add chai -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/chai/3.5.0/chai.js"></script>
  <script>
   // chai has a lot of stuff, let's make assert global
    let assert = chai.assert; 
  </script>
</head>

<body>
  <script>
    function pow(x, n) {
      /* function code is to be written, empty now */
      let result = x**n;
      return result;
    }
  </script>

  <!-- the script with tests (describe, it...) -->
  <script>
    describe("pow", function() {
        it("raises to n-th power", function() {
            assert.equal(pow(2, 3), 8);
            assert.equal(pow(3, 4), 81);
        });

        /*
        第二种写法，2个测试
        it("2 raises to power 3 is 8", function() {
            assert.equal(pow(2, 3), 8);
        });
        it("3 raises to power 4 is 81", function() {
            assert.equal(pow(3, 4), 81);
        });
        */
    })
  </script>

  <!-- the element with id="mocha" will contain test results -->
  <div id="mocha"></div>

  <!-- run tests! -->
  <script>
    mocha.run();
  </script>
</body>

</html>
```
#### 改进实现
```js
describe("pow", function() {
    
    function makeTest(x) {
        let expected = x * x * x;
        it(`${x} in the power 3 is ${expected}`, function() {
            assert.equal(pow(x, 3), expected);
        });
    }

    for (let x = 1; x <= 5; x++) {
        makeTest(x);
    }

})
```



#### 嵌套描述
```js
describe("pow", function() {
        
    describe("raises x to power 3", function() {

        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} in the power 3 is ${expected}`, function() {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let x = 1; x <= 5; x++) {
            makeTest(x);
        }

    });

    // 在此处添加更多的测试代码，describe和it都可以添加在这

})
```

> `before/after`
设置对应函数，在运行测试之前/之后执行。
> `beforeEach/afterEach`
设置对应函数在执行**每一个**`it`之前/之后执行

```js
describe("test", function() {

    before( () => alert("Testing started - before all tests") );
    after( () => alert("Testing finished - before all tests") );

    beforeEach( () => alert("Before a test - enter a test") );
    afterEach( () => alert("After a test - enter a test") );

    it("test 1", () => alert(1));
    it("test 2", () => alert(2));

})
```

#### 延伸规范
```js
it("for negative n the result is NaN", function() {
    assert.isNaN(pow(2, -1));
});

it("for non-integer n the result is NaN", function() {
    assert.isNaN(pow(2, 1.5));
});
```
此时需要修改pow函数
```js
function pow(x, n) {
    /* function code is to be written, empty now */
      
    if (n<0) return NaN;
    if (Math.round(n) != n) return NaN;

    let result = x**n;
    return result;
    
}
```

### Polyfill转译器
使用转译器/垫片让代码在还不支持最新特性的旧引擎上工作

#### 转译器
一种可以将源码转移成另一种源码的特殊软件

#### 垫片

---
# Object(对象): 基础知识

多词属性
```js
let user = {
    name = "Dennis",
    age = 29,
    "Like birds" = false,
    // 需要添加引号
}

// 调用时使用中括号
alert(user["Like birds"]); // false
```

#### 计算属性
```js
let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
    [fruit]: 5, // 属性名从变量fruit中得到的
};

// 如果输入的是apple，则该属性的名字是apple
alert(bag.apple);
```

### 属性值简写
```js
let user = {
    name, // 等同于name: name
    age,  // 等同于age: age
};
```

### 属性名称限制
不能使用编程语言的某个保留字，如`for`、`let`等

### 属性存在性测试，`in`操作符
```js
let user = { 
    name:'Dennis', 
    age:29, 
};

alert( "name" in user); // true
```

### `for...in 循环`
```js
for (key in object) {
    //遍历存在的所有的key
}
```
#### 像对象一样排序
如果是整数属性，则按照数字大小进行排序，如果不是，则按照创建时的顺序排序


> 作业
```js
// 作业
let user = {};

user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// 作业：检查对象中是否有属性，有则返回false，否则返回true
function isEmpty(key, obj) {
    for (key in obj) {
        // 进入循环，说明有属性，直接返回false
        return false;
    }
    return true;
}

let schedule = {};
alert(isEmpty(schedule));

// 作业：对象属性求和
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0;
for (key in salaries) {
    sum += salaries[key];
}
alert(sum);

// 将所有是number的属性值*2
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

multiplyNumeric(menu);

function multiplyNumeric(obj) {
    for (key in obj) {
        if (+obj[key]) {
            obj[key] = obj[key]*2;
        }
    }
}
```

## 对象引用和复制

* 当一个对象变量被复制——引用被复制，而对象自身并没有被复制


### 克隆与合并, `Object.assign`
```js
// Object.assign(dest, [src1, src2...])
```
* dest 目标对象
* src 源对象
* 该方法将所有源对象的属性拷贝到目标对象`dest`中

```js
let user = { name: "Dennis" };

let permission1 = { canView: true };
let permission2 = { canEdit: true };

Object.assign(user, permission1, permission2);

console.log(user);
// 目标对象中和源对象相同的属性会被覆盖
```

### 深层克隆
```js
let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50,
    },
};

//alert(user.sizes.height); // 182

let clone = Object.assign({}, user);
console.log(clone);

//alert(clone.sizes === user.sizes); 
// true, 同一个对象

user.sizes.height++;
alert(clone.sizes.height);  // 183

user.name = "Dennis";
alert(clone.name); // "John"
```
此时，`clone`和`user`共用一个sizes（因为user.sizes是一个对象，会以引用形式拷贝）


### 垃圾回收

#### 可达性
**可达**值是那些以某种方式可访问或可用的值。它们一定是存储在内存中的。
1. 举例(这些值明显不可能被释放)：
* 当前执行的函数，它的局部变量和参数
* 当前嵌套调用链上的其他函数、它们的局部变量和函数
* 全局变量
这些值被称作**根(roots)**

2. 如果一个值可以通过引用链从根访问任何其他值，则该值是可达的

`JavaScript`引擎中有一个被称作**垃圾回收器**的东西在后台执行。监视所有对象的状态，并删掉那些已经不可达的对象


* 对外引用不重要，只有传入引用才可以使对象可达

##### 无法到达的岛屿
几个对象相互引用，但外呼没有对其任意对象的引用，这些对象也可能是不可达的，并被从内存中删除

#### 内部算法
垃圾回收的基本算法`mark-and-sweep`

垃圾回收的过程类
* 就好像从根溢出一大桶油漆，它流经所有引用并标记所有可到达的对象。然后移除未标记的