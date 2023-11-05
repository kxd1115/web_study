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

### 作业
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


### 作业
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

### 作业
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

### 作业
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


### 作业
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

## 对象方法, `this`

```js
let user = {
    name: "John",
    age: 30,
};

user.sayHi = function() {
    alert("Hello!");
}

user.sayHi();

// 作为对象属性的函数被称为方法
```

#### 方法简写
```js
let user = {
    name: "John",
    age: 30,
    sayHi() {
        alert("Hello!");
    }
};

user.sayHi();
```

### 方法中的`this`
```js
let user = {
    name: "John",
    age: 30,
    sayHi() {
        // this 指的是"当前的对象"
        alert(this.name);
    }
};

user.sayHi(); 
```

#### `this`不受限制
`this`可以用于任何函数，即使它不是对象的方法
```js
function sayHi() {
    alert(this.name);
}

let user = {
    name: "John",
};

user.f = sayHi;

user.f(); // John（this == user）
```

#### 箭头函数没有自己的`this`
如果在箭头函数中引用this，这个值会取决于外部"正常的"函数
```js
let user = {
    name: "John",
    sayHi() {
        let arrow = () => alert(this.name);
        arrow();
    }
};

user.sayHi(); // John
```

### 作业
```js

// 作业
let calculator = {
    read() {
        this.a = +prompt("请输入第一个值", 0);
        this.b = +prompt("请输入第二个值", 0);
    },
    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b
    }
};

calculator.read();

alert(calculator.sum());
alert(calculator.mul());

// 作业
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function() { // 显示当前的 step
        alert( this.step );
        return this
    }
};

ladder.up().up().down().showStep().down().showStep();
```

## 构造器和操作符`new`

### 构造函数
两个约定
1. 命名以大写字母开头
2. 只能由`new`操作符来执行

#### 构造器中的方法
```js
function User(name) {
    this.name = name;

    this.sayHi = function() {
        alert( "My name is: " + this.name );
    };
}

let john = new User("John");
john.sayHi(); // My name is John
```

### 作业
```js

// 让 a == b
let obj = {};

function A() {
    return obj
};
function B() {
    return obj
};

let a = new A;
let b = new B;

alert( a == b ); // true

// 作业：创建 new Calculator
function Calculator() {

    this.read = function() {
        this.a = +prompt("请输入第一个值", 0);
        this.b = +prompt("请输入第二个值", 0);
    }

    this.sum = function() {
        return this.a + this.b;
    }

    this.mul = function() {
        return this.a * this.b
    }
}

let calculator = new Calculator();

calculator.read();

alert(calculator.sum());
alert(calculator.mul());


// 作业：创建new Accumulator
function Accumulator(startingValue=1) {
    this.value = startingValue;

    this.read = function() {
        return this.value += +prompt("请输入一个数字", 0);
    };
}

let accumulator = new Accumulator(11); // 初始值 1

accumulator.read(); // 添加用户输入的 value
accumulator.read(); // 添加用户输入的 value

alert(accumulator.value); // 显示这些值的总和
```

## 可选链`?.`
如果可选链`?.`**前面的值**为`undefined`或者`null`，它会停止运算并返回`undefined`

```js
let user = {};
alert(user?.address?.street); // undefined
```
> 不要过渡使用可选链
只将`?.`使用在一些东西可以不存在的地方

> `?.`前的变量必须已经声明
否则会报错

### 其他变体`?.()`, `?.[]`
* `?.()` 用于调用一个可能不存在的函数
* `?.[]` 用于访问可能不存在的属性

```js
let user = {};

let key = "firstname";

alert(user.read?.()); // undefined
alert(user?.[key]);   // undefined
```

## `Symbol`类型
只有2种类型可以作为对象的属性键(key):
* 字符串
* symbol

```js
let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2); // false
```
symbol是带有可选描述的"原始唯一值"
> symbol不会被自动转换为字符串
```js
alert(id1); // 类型错误

// 使用toString()
alert(id1.toString()); // Symbol("id")

// 使用symbol.description属性
alert(id1.description); // id
```

### 隐藏属性
symbol允许我们创建对象的隐藏属性，代码的任何其他部分都不能意外访问或重写这些属性。

```js
let user = {
    name: "John",
};

let id = Symbol("id");

user[id] = 1;

alert(user[id]); // 1
```

#### 对象字面量中的`symbol`
需要使用方括号
```js
let id = Symbol("id");

let user = {
    name: "John",
    [id]: 123,
};
```

#### symbol会被`for...in`跳过
```js
for (let key in user) alert(key); // name
```

### 全局symbol
从**全局symbol注册表**中读取symbol，可以保证每次访问相同名字的symbol时，返回的都是相同的symbol。
```js
// 从全局注册表中读取。如果该symbol不存在，则创建
let id = Symbol.for("id");

// 再次读取
let idAgain = Symbol.for("id");

alert(id === idAgain); // true
```

#### `Symbol.keyFor`
在全局注册表中查找symbol的键（只适用于全局symbol）
```js
let sym1 = Symbol.for("name");
let sym2 = Symbol.for("age");

alert( Symbol.keyFor(sym1) ); // name
```
* 不管是不是全局symbol，都有`description`属性

### 系统symbol
JS内部自带的

## 对象 —— 原始值转换
JS中`obj1+obj2`得到的结果不可能是另一个对象，而是先将`obj`自动转换为原始值，然后对原始值进行运算，得到的结果也是原始值！

### 转换规则
1. 所有对象都是true，所以不存在布尔值转换。只有数字和字符串转换

### hint
类型转换在各种情况下有三种变体，称为`hint`
* string
* number
* default
  * 少数情况下发生

#### `Symbol.toPrimitive`
```js
let user = {
    name: "John",
    money: 1000,

    [Symbol.toPrimitive](hint) {
        alert(`hint: ${hint}`);
        return hint == "string" ? `{name: ${this.name}}` : this.money;
    }
};

alert(user); // hint: string -> {name: John}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
```
#### `toString/valueOf`
```js
let user = {
    name: "John",
};

alert(user); // [object Object]
alert(user.valueOf() === user); // true
```
```js
let user = {
    name: "John",
    money: 1000,

    toString() {
        return `{name: ${this.name}}`;
    },

    valueOf() {
        return this.money;
    }

};

alert(user); // {name: John}
alert(+user); // 1000
alert(user + 500); // 1500
```
如果没有`Symbol.toPrimitive`和`valueOf`, `toString`将会处理所有原始转换
```js
let user = {
    name: "John",

    toString() {
        return this.name;
    },

};

alert(user); // John
alert(user + 500); // John500
```
实际运用中，通常只实现`obj.toString()`作为字符串转换的**全能**方法就足够了。

---
# 数据类型

原始类型不是对象

## 数字类型
1. 常规数字以`IEEE-754`存储（双精度浮点数）
2. BigInt，用于表示任意长度的整数


### 编写数字的更多方法
```js
let billion = 1000000000;

// 可行, _扮演语法糖的角色，使数字具有更强的可读性
let billion = 1_000_000_000;

// 10亿，e9表示 1000000000
let billion = 1e9;
```

### 十六进制，二进制，八进制

十六进制数字被广泛用于表示颜色，编码字符以及其他一些东西
```js
alert( 0xff ); // 255
alert( 0xFF ); // 255
```
二进制和八进制很少使用

### toString(base)
`num.toString(base)`返回在给定base进制数字系统中num的字符串表示形式
```js
let num = 255;

// 十六进制
alert( num.toString(16) ); // ff

// 2进制
alert( num.toString(2) );  // 11111111
```
> 如果想直接在数字上调用该方法，使用两个..
```js
alert(123..toString(2));
```

### 舍入
* `Math.floor` 向下舍入
* `Math.ceil` 向上舍入
* `Math.round` 四舍五入
* `Math.trunc` 取整

保留小数点后N位
* 乘除法
```js
let num = 1.234546;

alert(Math.round((num*100))/100); // 123

```
* `toFixed(n)`
```js
let num = 1.234546;

alert(num.toFixed(1)); // 1.2
```

### 不精确的计算
```js
alert( 0.1 + 0.2 == 0.3); // false

alert( 0.1 + 0.2 ); // 0.30000000000000004
```
使用二进制数字系统无法精确存储0.1或0.2，`IEEE-754`数字格式通过将数字舍入到接近的可能数字。

### 测试: `isFinite`和`isNaN`

* ±Infinity是一个特殊的值，比任何值都大（小）
* NaN代表error
都属于Number类型，但不是普通数字

* `isNaN(value)` 将其参数转换为数字，测试它是否是`NaN`
```JS
alert( isNaN(NaN) );   // true
alert( isNaN("str") ); // true
```
* `isFinite(value)` 将其参数转换为数字
  * `NaN/Infintity/-Infinity`会返回`false`
  * 常规数字返回`true`
```js
console.log( isFinite("15") );     // true
console.log( isFinite("str") );    // false
console.log( isFinite(Infinity) ); // false
```
> 空字符串和仅有空格的字符串被所有数字函数视为0

### `parseInt`和`parseFloat`
从字符串中读取数字，直到无法读取为止，并返回已经收集到的数字。
```js
console.log( parseInt("100px") );      // 100
console.log( parseInt("111as11sd") );  // 111
console.log( parseInt("as11sd") );     // NaN 
// 如果字符串的开头不是数字，则直接返回NaN

console.log( parseFloat("1.111as11sd") );   // 1.111
console.log( parseFloat("1.1.2.3") );       // 1.1
```

### 其他数学函数
内建的`Math`对象包含了小型的数学函数和常量库
举例:
1. `Math.random()` 返回一个`[0, 1)`的随机数
2. `Math.max(a, b ,c...)`和`Math.min(a, b ,c...)` 返回最大值和最小值
3. `Math.pow(n, power)` 返回n的给定`power`


### 作业
```js

// 作业1: 返回两次输入的总和
alert(
    +prompt("输入一个数字", 0) + +prompt("输入一个数字", 0)
);

// 作业2: 为什么6.35.toFixed(1) == 6.3 ?
console.log( 1.35.toFixed(1) ); // 1.4
console.log( 6.35.toFixed(1) ); // 6.3

// 修正
console.log( 6.35.toFixed(20) );         // 6.34999999999999964473

// 6.35 * 10 = 63.5
// 63.5 -> 64 -> 6.4
console.log( Math.round((6.35*10))/10 ); // 6.4

// 作业3: 重复，直到输入一个数字
function readNumber() {
    let num = prompt("请输入一个数字", 0);

    if (num===null || num==="") {
        alert(null);
    } else if (isFinite(num)) {
        alert(+num);
    } else {
        readNumber();
    }
}

readNumber()

// 作业4: 从min到max的随机数
// -> 我做的
function random(min, max) {
    let num = Math.random()*10;
    if ( num >= max ) {
        return num - max;
    } else if (num < min) {
        return num + min;
    } else {
        return num;
    }
}

console.log(random(1,6));

// 答案
function random(min, max) {
    return min + Math.random() * (max - min);
}

```

## 字符串

### 访问字符
使用方括号或者`cahtAt()`方法
```js
let str = "Hello";

// 如果没有找到字符，返回undefined
console.log(str[1]); // e

// 如果没有找到字符，返回空字符串
console.log(str.charAt(1)); // e
```
### 字符串是不可变的
字符串不可更改

### 改变大小写
* `toLowerCase()`
* `toUpperCase()`

### 查找子字符串
* `str.indexOf`
```js
let str = "Widget with id";

console.log( str.indexOf("id") ); // 1

// 第二个可选参数，从第n个位置开始查找
console.log( str.indexOf("id", 3) ); // 12
```

```js
let str = 'As sly as a fox, as strong as an ox';

let target = "as";

let pos = 0;
while(true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos == -1) break;

    alert(foundPos);

    pos = foundPos + 1;
}
```

* `str.lastIndexOf(substr, pos)`
  * 从字符串的末尾开始搜索

#### 按位(bitwise) NOT技巧
* `bitwise NOT` ~ 运算符
  * 将数字转换为32-bit整数
    * ~n = ~(n+1)
```js
alert(~2); // -3
alert(~1); // -2
alert(~0); // -1
alert(~-1); // 0
```
简写indexOf检查
```js
let str = "Widget";

if (~str.indexOf("Widget")) {
  alert( 'Found it!' ); // 正常运行
}
```

#### includes, startsWith, endsWith
* `includes` str是否包含某个子字符串
* `startsWith` str是否是以某个子字符串开头
* `endsWith` str是否是以某个子字符串结尾
```js
let str = "Widget";

console.log(str.includes("id"));    // true
console.log(str.includes("id", 3)); // false

console.log(str.startsWith("Wi")); // true 
console.log(str.endsWith("et"));   // true
```

### 获取子字符串
* `substring`
* `substr` 
* `slice`
```js
let str = "Widget";

// 允许负值
console.log(str.slice(1, 2));   // i
console.log(str.slice(1));      // idget

console.log(str.substring(1));  // idget

// 允许前大后小
console.log(str.substring(1, 4));  // idg
console.log(str.substring(4, 1));  // idg

// 从索引4开始，长度为1
console.log(str.substr(4, 1));  // e
// 从索引4开始，长度为2
console.log(str.substr(4, 2));  // et
```

### 比较字符串
按照字母顺序逐字比较
1. 小写字母总是大于大写字母
2. 带变音符号的总目存在"乱序"情况
所有字符串都是用UTF-16编码。
* `str.codePointAt(pos)` 返回pos位置的字符代码
```js
alert("z".codePointAt(0)); // 122
alert("Z".codePointAt(0)); // 90
```
* `String.fromCodePoint(code)` 通过code创建字符
```js
alert(String.fromCodePoint(90));  // Z
```
字符通过数字代码进行比较。越大的代码意味着字符越大。

### 作业
```js

// 作业1: 一个返回首字母大写的函数
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1);
}

alert(ucFirst("dennis"));

// 作业2: 检查spam
function checkSpam(str) {

    let str1 = str.toLowerCase();

    return str1.includes("viagra") || str1.includes("xxx")
}

alert( checkSpam("buy ViAgRA now") );
alert( checkSpam("free XxxX") );

// 作业3: 截断文本
function truncate(str, maxlength) {

    let strLength = str.length;

    if (strLength > maxlength) {
        return str.slice( 0, (maxlength-3) ) + "...";
    } else {
        return str;
    }
    // 简写
    // return (strLength > maxlength) ? str.slice( 0, (maxlength-3) ) + "..." : str;
}

alert(truncate("What I'd like to tell on this topic is:", 20));
alert(truncate("Hi everyone!", 20)); 


// 提取货币
function extractCurrencyValue(str) {
    const regex = /\d+/i;
    return str.match(regex);
}

alert(extractCurrencyValue("$120"));
```

## 数组

```js
let arr = new Array();
let arr = [];
```
元素从0开始编号。
元素可替换。
可以添加新元素。
`length`属性表示数组中的元素总个数
```js
let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[0] ); // Apple
alert( fruits[1] ); // Orange
alert( fruits[2] ); // Plum

fruits[2] = 'banana';
alert( fruits[2] );

fruits[3] = 'Lemon';

alert( fruits.length ); // 4
```

### 使用`at`获取最后一个元素
```js
// JS中无法使用以下方法来获取最后一个元素
// fruits[-1]

fruits.at(-1); // Lemon
```

### pop/push, shift/unshift方法

#### 队列方法(先进先出)
* push 在末端添加一个元素
* shift 取出队列首端的一个元素

#### 栈方法(后进先出)
* push 在末端添加一个元素
* pop 从末端取出一个元素


##### 作用于数组末端
* push
* pop

#### 作用于数组首端
* shift 在首端取出元素
* unshift 在首端添加元素

`push`和`unshift`都能一次添加多个元素

### 内部
数组是一种特殊的对象
```js
let fruits = ["Apple", "Orange", "Plum"];

// 通过引用负值
let arr = fruits;

// 指向同一个数组
alert(arr === fruits); // true
```
> 要将数组视为作用于**有序数据**的特殊结构

### 性能
pop/push的速度比较快，shift/unshift比较慢

### 循环
```js 
for (let fruit of fruits) {
    alert(fruit);
}
// 数组是对象，理论上也可以用for...in，但不推荐，速度会更慢
```

### `length`
length其实是最大数字索引值+1。
如果手动减少length的长度，数组会被截断。
```js
let fruits = ["Apple", "Orange", "Plum"];

fruits.length = 2;

alert(fruits); // Apple,Orange
```

### 多维数组
数组的项也可以是数组。
```js
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

alert( matrix[1][1] ); // 5
```

### 不要使用 == 比较数组

### 作业
```js

// 作业1: 操作数组
let styles = ["Jazz", "Blues"];
console.log(styles);        // ["Jazz", "Blues"]

styles.push("Rokc-n-Roll");
console.log(styles);        // ['Jazz', 'Blues', 'Rokc-n-Roll']

function findMiddleIndex(arr) {
    let index = Math.round(arr.length/2)-1;
    return index;
}

styles[findMiddleIndex(styles)] = "Classics";
console.log(styles);         // ['Jazz', 'Classics', 'Rokc-n-Roll']

console.log(styles.shift()); // Jazz
console.log(styles);         // ['Classics', 'Rokc-n-Roll']

styles.unshift("Rap", "Reggae");
console.log(styles);         // ['Rap', 'Reggae', 'Classics', 'Rokc-n-Roll']


// 作业2: 输入数字求和
function sumInput() {
    let arr = [];
    let num = 0;

    while(true) {

        let input = prompt("请输入一个数字", 0);

        if (input===null || input==="" || !isFinite(input)) break;

        arr.push(input);
        num += isFinite(input);

    }

    return num;
}

alert(sumInput());

// 作业3
function getMaxSubSum(arr) {

    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) {
        // 一项一项按顺序加
        partialSum += item; 
        // 每次按顺序加一项之后，都比下大小，留下当前最大值
        maxSum = Math.max(maxSum, partialSum);
        // 如果始终＜0，就等于0
        if (partialSum<0) partialSum=0;
    }
    // 遍历完成后，返回最大连续子数组的和
    return maxSum
    
}

console.log(getMaxSubSum([1,1,-3,4]));
```

## 数组方法

#### `splice`
`arr.splice`可以处理数组的添加，删除和插入
```js
let arr = ["I", "go", "home"];

arr.splice(1, 1); // 从索引1开始删除1个元素

console.log(arr); // ["I", "home"]

arr.splice(0, 2, "Let's", "dance");
// 从索引0开始，删除2个元素，并使用后面的元素替代

console.log(arr);
```

#### `slice`
```js
arr.slice([start], [end]);
// 会返回一个新数组

let arr = ["I", "go", "home"];

// 将[0,1)的元素切片
console.log(arr.slice(0, 1)); // ["I"]
```

#### `concat`
```js
let arr = [1, 2];

// 连接并生成一个新数组
console.log( arr.concat([3, 4], 5, 6) );
// [1, 2, 3, 4, 5, 6]
```
通常只复制数组中的元素。其他对象会被当做一个整体被添加，但如果类数组对象有`Symbol.isConcatSpreadable`属性，那么它就会被concat当做数组来处理，对象中的元素会被添加进数组。
```js
let arr = [1, 2];

let arrayLike = {
    0: "somthing",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2,
};

console.log(arr.concat(arrayLike));
// something, else
```

### 遍历: `forEach`
允许为数组的每个元素都运行一个函数
```js
let arr = [1, 2];

arr.forEach(alert);
// 1
// 2

arr.forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array} `)
});
// 1 is at index 0 in [1, 2];
// 2 is at index 1 in [1, 2];
```

### 在数组中搜索
* `indexOf(item, from)` 从左向右查找，从from开始搜索item，找到则返回索引，否则返回-1
* `lastIndexOf(item, from)` 从右向左查找，从from开始搜索item，找到则返回索引，否则返回-1
* `includes(item, from)` 从from开始搜索item，找到则返回true，否则返回false
```js

let arr = [1, 2, false, 2];

console.log( arr.includes(2, 2) ); // false
console.log( arr.includes(2) );    // true
console.log( arr.indexOf(2) );     // 1
console.log( arr.lastIndexOf(2) ); // 3
```

> includes可以处理NaN
```js
const arr = [NaN];

alert( arr.includes(NaN) );  // true
alert( arr.indexOf(NaN) );   // -1
```
#### `find`
#### `findIndex`
#### `findLastIndex`
```js
let users = [
    {id:1, name: "John",},
    {id:2, name: "Pete",},
    {id:3, name: "Mary",},
    {id:4, name: "John",},
];

let user = users.find(item => item.id == 1);

alert(user.name); // John

// findIndex、findLastIndex 语法和find的相同
// 寻找John的索引，从前往后查找
alert( users.findIndex( item => item.name == 'John' ) ); // 0

// 寻找John的索引，从后往前查找
alert( users.findLastIndex( item => item.name == 'John' ) ); // 3

```

* `filter`
搜索使函数返回true的元素
```js
let users = [
    {id:1, name: "John",},
    {id:2, name: "Pete",},
    {id:3, name: "Mary",},
    {id:4, name: "John",},
];

// 返回一个符合条件的新数组
let user = users.filter(item => item.id > 2);

console.log( user.length );  // 2
```

### 转换数组

#### `map`
`arr.map`对数组的每个元素都调用函数，并返回结果数组
```js
let users = ["aaa", "22", "ccccc"].map(item => item.length) ;

alert(users); // 3, 2, 5
```

#### `sort(fn)`
对数组进行**原位**排序（原位：在原数组内排序，不生成新数组）

```js
let users = [1, 15, 3, 2];

// 默认按照字符串进行排序
alert(users.sort()); // 1, 15, 2, 3

// 可以使用函数参数
// 当元素都是数字时
alert( users.sort( (a, b) => a - b ) ); // 1, 2, 3, 15
```

#### `reverse`
颠倒`arr`中元素的顺序
```js
let users = [1, 15, 3, 2];

alert(users.reverse()); // 2, 3, 15, 1
```

#### `split`和`join`
```js
// 这是一个字符串
let names = 'Bilbo, Gandalf, Nazgul';

// 使用", "分割，并获得一个数组
let arr = names.split(", ");

console.log(arr);
// ['Bilbo', 'Gandalf', 'Nazgul']

// 存在第二个可选参数，对数组长度的限制
let arr1 = names.split(", ", 1);
console.log(arr1); // ['Bilbo']


```

* `arr.join(glue)` 
  * 与join相反
创建一串由`glue`粘合的`arr`项
```js
// 这是一个数组
let names = ['Bilbo', 'Gandalf', 'Nazgul'];

// 使用", "粘合，并获得一个字符串
let str = names.join(", ");
// 这是一个字符串
console.log(str); // Bilbo, Gandalf, Nazgul
```

#### `reduce`/`reduceRight`
遍历数组，并计算（两个方法的区别在于计算的顺序）

```js
let value = arr.value(function(accumulator, item, index, array) {
    // ...
}, [initial])
```
* `accumulator` 上一个函数调用的结果，第一次等于`initial`（如果提供initial的话）
* `item` 当前数组的元素
* `index` 当前索引
* `array` 数组本身
```js
let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum +current, 0);
// 从数组的第一个元素开始计算
// 第一次时，sum = 0, sum + current => 0 + 1 ; 因为传递了initial=0
// 第二次时，sum = 1, sum + current => 1 + 2 ; 没有传递initial，所以sum是上一次调用的结果
// 第三次时，sum = 3, sum + current => 3 + 3 ; 以此类推...直到遍历完整个数组的元素

alert(result);  // 15
```

### `Array.isArray`
数组是基于对象的，不构成单独的语言类型。
该方法用于判断`Array.isArray(value)`中的value是否是一个数组
```js
console.log( Array.isArray({}) ); // false
console.log( Array.isArray([]) ); // true

// typeof无法区分
console.log( typeof {} ); // object
console.log( typeof [] ); // object
```

### `thisArg`
几乎所有调用函数的数组方法都支持接收一个可选参数`thisArg`（sort除外）


> 注意 sort, reverse和splice方法修改的是数组本身


### 作业
```js
// 作业1
function camelize(size) {
    let arr = size.split("-");
    let arr1 = arr.map(
        // 这里因为如果开头是-, 那么替换后就是一个空字符串""
        // 空字符串没有字符，所以没有index（我的理解）
        (item, index) => index == false ? item : item[0].toUpperCase() + item.slice(1)
    );
    return arr1.join("");
}

/*我的回答
function camelize(size) {
    let arr = size.split("-");
    let arr1 = arr.map(
        item => item.length == 0 ? item : item[0].toUpperCase() + item.slice(1)
    );
    return arr1.join("");
}

let str1 = '-background-color';

console.log( camelize(str1) );
*/


let str1 = '-background-color';

console.log( camelize(str1) );

// 作业：映射到names
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map(item => item.name)

alert( names ); // John, Pete, Mary


// 作业：映射到对象
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = users.map( 
    item => item = {id: item.id, fullName: item.name+" "+item.surname}
)

console.log(usersMapped)

// 作业：过滤范围
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1（匹配值）

alert( arr ); // 5,3,8,1（未修改）

function filterRange(arr, a, b) {
    return arr.filter( item => item>=a && item<=b );
}

// 作业：原位过滤
let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 删除了范围在 1 到 4 之外的所有值

alert( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i<arr.length; i++) {
        if (arr[i]<a || arr[i]>b) {
            arr.splice(i, 1);
            i--; // 删除元素后，需要把索引减一位，因为此时原数组索引已经发生了改变
        }
    }
}

// 作业: 降序
let arr = [5, 2, 1, -10, 8];

// ……你的代码以降序对其进行排序
arr.sort((a, b) => b - a);

alert( arr ); // 8, 5, 2, 1, -10

// 作业: 复制和排序数组
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (no changes)

function copySorted(arr) {
    let newArr = arr.map(item => item);

    return newArr.sort()

    // 更简洁的方法
    // return arr.sort().sort()
}

// 作业: 创建一个可扩展的calculator（还需要再次理解）
function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    }

    this.calculate = function(str) {

        let arr = str.split(" ");
        let a = +arr[0];
        let b = +arr[2];
        let m = arr[1];

        if (!this.methods[m] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[m](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    }
}

let calc = new Calculator;

console.log( calc.calculate("3 - 7") ); // 10

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8

// 作业: 按年龄对用户排序
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); // Pete

function sortByAge(arr) {
    return arr.sort( (a,b) => a.age - b.age );
}

// 作业: 随机排列数组
let arr = [1, 2, 3];
        
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        return array;
    }
}

console.log(shuffle(arr));

// 作业: 获取平均年龄
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// 我的回答
function getAverageAge(arr) {
    let ageSum = 0;
    for (let a of arr) {
        ageSum += a.age;
    }

    return ageSum / arr.length;
}

// 答案
function getAverageAge(users) {
    // 将数组所有项求和，使用reduce方法 
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

// 作业: 数组去重
function unique(arr) {
    /* your code */

    let result = [];

    for (let str of arr) {// 遍历数组
        if (!result.includes(str)) {
            // 如果不包含该元素，则推进新数组
            result.push(str);
        }
    }
    return result;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O

// 作业: 从数组创建键(值)对象
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

function groupById(arr) {
    return arr.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {});
}

console.log(usersById);
```

## `Iterable object`(可迭代对象)
可迭代对象是数组的泛化（任何对象都可以被定制为可在`for...of`循环中使用的对象）

### `Symbol.iterator`
```js
let range = {
    from: 1,
    to: 5,
};
// 希望能使用for...of循环
```
在对象内部添加该方法`Symbol.iterator`，使对象可迭代
1. 该方法必须返回一个**迭代器**iterator（一个有next()方法的对象）
2. 此时for..of仅适用于这个被返回的对象(迭代器)
3. next()方法返回的结果格式必须是`{done: Boolean, value: any}`，当`{done: true}`时，表示循环结束

```js
let range = {
    from: 1,
    to: 5,
};

// 1. for..of调用首先调用这个
range[Symbol.iterator] = function() {

    // ....它返回迭代器对象 iterator object
    // 2. 接下来for..of要求下面的迭代器对象返回下一个值
    return {
        current: this.from,
        last: this.to,

        // 3. next()在for..of的每一轮循环迭代中被调用
        next() {
            // 4. 它会返回 {done:.., value:...}格式的对象
            if (this.current <= this.last) {
                return { done: false, value: this.current++ };
            } else {
                return { done: true };
            }
        }
    };
};

// 现在它可以运行了
for (let num of range) {
    alert(num);
}
```
> range自身没有next()方法
> 仅仅是调用了通过调用range[Symbol.iterator]()创建了另一个对象（所谓的迭代器对象）

合并之后的简化版本
```js
let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

// 现在它可以运行了
for (let num of range) {
    alert(num);
}
```

### 字符串是可迭代的

### 可迭代(iterable)和类数组(array-like)
* `iterable`是实现了`Symbol.iterator`方法的对象
* `Array-like`是有索引和`length`属性的对象，看起来很像数组

可迭代对象和类数组对象通常都**不是数组**，不能使用`push`和`pop`等方法。

#### `Array.from`
接收一个可迭代对象或类数组，并获取一个真正的数组
```js
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2,
};

let arr = Array.from(arrayLike); // (*)
alert(arr.pop()); // World（pop 方法有效）
```
```js
Array.from(obj[, mapFn, thisArg]);

// 可选参数
// mapFn可以是一个函数，该函数在元素被添加到数组之前应用到每个元素
```
```js
let range = "12345"
let arr = Array.from(range, num => num * num);

console.log(arr); // [1, 4, 9, 16, 25]
```

使用Array.from创建代理感知的slice方法(能够处理UTF-16扩展字符)
```js
function slice(str, start, end) {
    return Array.from(str).slice(start, end).join("");
}

let str = '𝒳😂𩷶';

alert( slice(str, 1, 3) );

// 原生方法不支持识别UTF-16扩展字符
alert( str.slice(1, 3) ); // 乱码
```

## Map and Set(映射和集合)

### Map
带键的数据项的集合，允许任何类型的键(key)
方法和属性：
* new Map(): 创建map
* map.set(key, value): 根据键存储值
* map.get(key): 根据键返回值
* map.has(key): 判断是否包含某个键
* map.delete(key): 删除指定键的值
* map.clear(): 清空map
* map.size: 返回当前map的元素个数
```js
let map = new Map();

map.set(1, "str1");
map.set("1", "num1");
map.set(true, "bool1"); 

console.log(map.get(1)); // str1
console.log(map.get("1")); // num1

console.log(map.size); // 3
```
**Map还可以使用对象作为键**
```js
let john = { name: "Jhon" };

map.set(john, 123);
console.log(map.get(john)); // 123
```

### Map迭代
* map.keys(): 用来遍历键
* map.values(): 用来遍历值
* map.entries(): 用来遍历键值对[key, value]
```js
// 遍历所有的键
for (let k of map.keys()) {
    //alert(k);
}
// 遍历所有的值
for (let v of map.values()) {
    //alert(v);
}
// 遍历所有的键值对
// 也可以直接 let e of map
for (let e of map.entries()) {
    alert(e);
}
```
除此之外，`Map`有内建的`forEach`方法，与`Array`类似
```js
map.forEach((value, key, map) => {
    alert(`${key}: ${value}`);
})
```
### Object.entries: 从对象创建Map
```js
let obj = {
    name: "John",
    age: 30,
}

let map = new Map(Object.entries(obj));

console.log(map.get('name')); // John
```
### Object.fromEntries: 从Map创建对象

```js
let price = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 3],
])

console.log(price.meat); // 3
```

### Set
一个特殊的类型集合，值的集合(没有键)，每一个值只会出现一次。
主要方法如下:
* new Set(iterable): 创建一个set
* set.add(value): 添加一个值，返回set本身
* set.delete: 删除值，删除成功会返回true
* set.has(value): 是否包含某个值
* set,clear(): 清空set
* set.size: 返回元素个数
```js
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john);
set.add(pete);
set.add(mary);
set.add(john); // john已经存在，这次添加不会影响set长度

console.log(set.size); // 3
```

### Set迭代(iteration)
可以使用`for...of`或`forEach`

### 作业
```js
// 作业1: 过滤数组中唯一的元素
function unique(arr) {
    // Array.from将可迭代对象为真正的数组
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(values) ); // Hare, Krishna, :-O

// 作业2: 迭代键
let map = new Map();

map.set("name", "John");

// 这里要使用Array.from将可迭代对象转换为真正的数组
let keys = Array.from(map.keys());

// Error: keys.push is not a function
keys.push("more");

console.log(keys);
```

## WeakMap and WeakSet(弱映射和弱集合)

### WeakMap
`WeakMap`和`Map`的区别：键必须是对象，不能是原始值
WeakMap只有以下方法
* weakMap.get(key)
* weakMap.set(key, value)
* weakMap.delete(key)
* weakMap.has(key)
```js
let john = { name: 'john' };

let weakMap = new WeakMap();

weakMap.set(john, "...");

console.log(weakMap)

john = null;  // 覆盖引用

// john被清除后，weakMap中的引用被清理掉了
console.log(weakMap.john); // undefined
```

### WeakSet
1. WeakSet只能被添加对象
2. 对象只有在某个地方被访问的时候，才存在于`WeakSet`中（和WeakMap类似）
3. 只支持add(), has(), delete()方法


## Object.keys, values, entries

以下方法对普通对象也适用
* Object.keys(obj)
* Object.valuse(obj)
* Object.entries(obj)
> 不同之处在于，普通对象使用这些方法返回的是"真正的"数组

### 作业
```js
// 作业: 属性求和
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

alert( sumSalaries(salaries) ); // 650

function sumSalaries(arr) {
    let num = 0;
    for (value of Object.values(arr)) {
    num += value;
    }
    return num;
}

// 作业: 计算属性数量
let user = {
    name: 'John',
    age: 30
};

alert( count(user) ); // 2

function count(obj) {
    return Object.keys(obj).length;
}
```

## 解构赋值

### 数组解构
```js
let arr = ["John", "Smith"];

let [firstName, surname] = arr;

console.log(firstName); // John
console.log(surname);   // Smith
```
可以和split函数(或者其他返回值为数组的函数)结合使用
```js
let [firstName, surname] = "John Smith".split(" ");

console.log(firstName); // John
console.log(surname);   // Smith
```
> 注意细节
1. 解构并不意味着破坏（原来的数组或对象并不会被改变）
2. 忽略使用逗号的元素
```js
// 不需要第二个元素
let [firstName, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert( title ); // Consul
```
3. 等号右侧可以是任何可迭代对象（数组或者Map，Set等都可以）
4. 复制给等号左侧的任何内容
```js
let user = {};

// 可以是对象的属性
[user.firstName, user.surname] = "John Smith".split(" ");

alert(user.firstName); // John
alert(user.surname);   // Smith
```
5. 与.entries()方法进行循环操作
```js
let user = {
    name: "John",
    age: 30
};

for (let [key, value] of Object.entries(user)) {
    alert(`${key}: ${value}`);
}
```
6. 交换变量
```js
let guest = "Jane";
let admin = "Pete";

// 变量的值被交换
[guest, admin] = [admin, guest];

alert( `${guest} ${admin}` ); // Pete Jane
```

#### 其余的`...`
```js
let [name1, name2] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

alert(name1); // Julius
alert(name2); // Caesar
// 其余数组项未被分配到任何地方
```
可以使用`...`来收集其余项
```js
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

// rest 是包含从第三项开始的其余数组项的数组
alert(rest[0]); // Consul
alert(rest[1]); // of the Roman Republic
alert(rest.length); // 2
```

### 默认值
当数组比左边的列表短，缺少的对应变量会被复制undefined，如果想要一个默认值给未赋值的变量，可以使用`=`
```js
let [name1, name2="Caesar", rest] = ["Julius",];

console.log(name2); // Caesar
console.log(rest);  // undefined
```

### 对象解构
```js
// 基本语法
let {var1, var2} = {var1:..., var2:...};
```
```js
let options = {
    title: "Menu",
    width: 100,
    height: 200,
};

let {title, width, height} = options;

alert(title);  // Menu
alert(width);  // 100
alert(height); // 200
```
* 将属性赋值给另一个名字的变量
```js
let {title, width: w, height: h} = options;

alert(title);  // Menu
alert(w);  // 100
alert(h); // 200
```
* 通过`=`设置默认值
```js
let options = {
    title: "Menu",
    width: 100,
};

let {title, width: w=100, height: h=100} = options;
// let {title, width=100, height=100} = options;

alert(title);  // Menu
alert(w);  // 100
alert(h); // 100
```
* 默认值可以是任意表达式，甚至是函数调用。但只会在未提供对应的值时才会被计算/调用

* 也可以仅提取我们所需要的内容
```js
let options = {
    title: "Menu",
    width: 100,
};

// 只提取title
let {title} = options;

alert(title);  // Menu
```
#### 剩余模式`...`
与数组的结构赋值一样，也可以使用`...`来存储剩余对象
```js
let options = {
    title: "Menu",
    width: 100,
};

let {title, ...rest} = options;

alert(title);  // Menu
alert(rest.width);   // 100
```

### 嵌套解构
如果一个对象或数组嵌套了其他的对象和数组，可以使用嵌套解构来提取更深层的数据

#### 智能函数参数
通过解构赋值，用一个对象来传递所有参数，而函数负责把这个对象解构乘各个参数


### 作业
```js

// 作业1 解构赋值
let user = { name: "John", years: 30 };
let {name, years: age, isAdmin=false} = user


alert( name ); // John
alert( age ); // 30
alert( isAdmin ); // false

// 作业2 最高薪资

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(obj) {

    let maxSum = 0;
    let maxKey = '';

    for (let [key, value] of Object.entries(obj)) {
        if (value>maxSum) {
            maxSum = value;
            maxKey = key;
        }
    }
    return `${maxKey}: ${maxSum}`;
}

alert( topSalary(salaries) );
```

## 日期和时间

### 创建
```js
new Date();
```
* 不同的参数
```js
let now = new Date();

alert(now);

// 传入时间戳
let Dec31_1969 = new Date(-24*3600*1000);
alert(Dec31_1969);

// 传入字符串日期
let date = new Date("2023-10-21");
alert(date);

// new Date(year, month, date, hours, minutes, seconds, ms)
// 只有前2个参数是必须的
```

### 访问日期组建
* `getFullYear()` 获取年份(4位数)
* `getMonth()` 获取月份(从0-11)
* `getDate()` 获取当月的具体日期(从1-31)
* `getHours(), getMinutes(), getSeconds(), getMilliseconds()`
  * 获取小时，分钟，秒，毫秒
* `getDay()` 获取一周中的第几天(从0-6)
* `getTime()` 返回日期的时间戳
* `getTimezoneOffset()` 返回UTC与本地时区之间的时间差, 以分钟为单位

### 设置日期组建
* `setFullYear(year, [month], [date])`
* `setMonth()`
* `setDate()`
* `setHours()`
* `setMinutes()`
* `setSeconds()`
* `setMilliseconds()`
* `setTime()`

### 自动校准
在设置时间时，如果给了一个超出范围的数值，它会自动校准
```js
let date = new Date(2023, 5, 33);
alert(date); 
// Sun Apr 02 2023 00:00:00 GMT+0800 (香港标准时间)
// 会直接给出5月31日之后的第二天，也就是2023-06-02
```

### 日期转化为数字，日期差值
当`date`对象被转化为数字时，得到的是对应的时间戳
```js
let date = new Date();
alert(+date); 
// 1698071698598
```

### Date.now()
该方法会返回当前的时间戳
```js
let date = Date.now();
console.log(date); 
// 1698071910526
```
LPFK-NQGL

### 基准测试

### 对字符串调用Date.parse
`Date.parse(str)`方法从一个字符串中读取日期
```js
let ms = Date.parse("2023-10-22");

// 返回一个时间戳
console.log(ms); // 1697932800000
```

### 作业
```js
// 作业1 显示星期
let date = new Date(2023, 10, 24);  
alert( getWeekDay(date) );        

function getWeekDay(date) {
    let weekArr = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    return weekArr[date.getDay()];
}

//N天之前的日期
let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

function getDateAgo(date, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date.getDate()-days); 
    return dateCopy.getDate()
}

// 获取某个月的最后一天
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month, 0);
    return date.getDate();
}

alert( getLastDayOfMonth(2023,2) );

// 今天过去多少秒
alert( getSecondsToday() );

function getSecondsToday() {
    let start = new Date();

    let end = Date.now();

    return (end - start.setHours(0,0,0,0))/1000;
}

// 距离明天还有多少秒
alert( getSecondsToTomorrow() );

function getSecondsToTomorrow() {
    let start = new Date();
    let end = new Date(start.getFullYear(), start.getMonth(), start.getDate()+1)

    return (end-start)/1000;
}
// 格式化相对日期
alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// 昨天的日期，例如 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(date) {
    let now = new Date();
    let start = new Date(date);

    let timeGap = start - now;

    if (timeGap<=1000 && timeGap>=(0-1000)) {
        return "right now";
    } else if (timeGap<=(1000*60) && timeGap>=(0-(1000*60))) {
        return "n sec. ago";
    } else if (timeGap<=(1000*60*60) && timeGap>=(0-(1000*60*60))) {
        return "m min. ago";
    } else {
        return `${start.getDate()}.${start.getMonth()}.${start.getFullYear()} ${start.getHours()}:${start.getMinutes()}`
    }
}
```

## JSON方法, toJSON

### JSON.stringify
* `JSON.stringify` 将对象转换为JSON
* `JSON.parse` 将JSON转换回对象

```js
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    spouse: null
};

let json = JSON.stringify(student);

alert(typeof json); // string
console.log(json);
```
方法`JSON.stringify()`得到的`json`字符串是一个被称为`JSON编码`或`序列化`或`字符串化`或`编组化`的对象
* JSON中的字符串使用双引号，JSON中没有单引号或者反引号。
* 对象属性名称也是双引号
`JSON.stringify()`也可以应用于原始数据类型
> 支持的数据类型:
> Objects, Arrays
> strings, numbers, boolean values`true/false`, null

无法识别: 
> 函数属性, Symbol类型的键值, 存储undefined的属性

### 排除和转换: replacer
```js
// JSON.stringify的完整语法
let json = JSON.stringify(value[, replacer, space])
```
* `value` 要编码的值
* `replacer` 要编码的属性数组或映射函数`function(key, value)`
  * 
* `space` 用于格式化的空格数量
  * 这个参数主要应用于日志记录和美化输出

### 自定义`toJSON`

### JSON.parse
```js
let value = JSON.parse(str, [reviver]);
```
* `str` 要解析的JSON字符串
* `reviver` 可选函数`function(key, value)`, 该函数将为每个(key, value)调用, 并可以对值进行转换

```js
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// 使用第二个参数，将字符串date转换为Date对象
let meetup = JSON.parse(str, function(key, value) {
    if (key == 'date') return new Date(value);
    return value;
});

alert( meetup.date.getDate() );
```

### 作业
```js
let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    occupiedBy: [{name: "John"}, {name: "Alice"}],
    place: room
};

// 循环引用
room.occupiedBy = meetup;
meetup.self = meetup;

alert( JSON.stringify(meetup, function replacer(key, value) {
    /* your code */
    /*
    我做的
    if (key=='self') return undefined;
    if (key=='occupiedBy') return meetup.occupiedBy
    if (key=='place') return room.number
    return value;
    */
    // 答案
    // 排除value=meetup的情况
    return (key != "" && value == meetup) ? undefined : value;
}));
```
---
# 函数进阶内容
## 递归和堆栈

### 递归遍历
```js
let company = { // 是同一个对象，简洁起见被压缩了
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
    development: {
        sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function sumSalaries(dep) {
    if (Array.isArray(dep)) {
        return dep.reduce((pre, result) => pre+result.salary, 0);
    } else {
        let sum = 0;
        for (let salar of Object.values(dep)) {
            sum += sumSalaries(salar);
        }
        return sum;
    }
}

alert(sumSalaries(company)); // 7700
```

### 递归解构

#### 链表
链表元素是一个使用以下元素通过递归定义的对象
* value
* next 属性引用下一个链表元素，或者代表末尾的null
```js
let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
```


### 作业
```js
// 对正整数求和到给定值
// 递归方法
function sumTo(num) {
    if (num<=1) {
        return num;
    } else {
        return num + sumTo(num-1);
    }
}

alert(sumTo(100));
```

## Rest参数与Spread语法

### Rest参数...
在JS中，函数可以传入任意数量的参数
```js
function sum(a, b) {
    return a+b;
}

// 虽然能接收，但是只有前2个起作用
alert(sum(1,2,3,4,5)); // 3
```
在函数定义中声明一个数组来收集参数。语法: `...变量名`
```js
function sumAll(...args) { // args是一个数组
    let sum = 0;

    for (let a of args) sum += a;
    return sum;
}

alert(sumAll(1,2,3,4,5)); // 15
alert(sumAll(1,2,3));     // 6
```
* Rest参数必须放到参数列表的末尾

### `arguments`变量
这是一种特殊类数组对象，可以在函数中被访问。
```js
function showName() {
    alert(arguments.length);
    alert(arguments[0]);
    alert(arguments[1]);
}

showName("Julius", "Dennis");
// 2 Julius Dennis

showName("Ilya");
// 1 Ilya undefined

```
> 建议优先使用Rest参数

### `Spread`语法
看起来和`rest`参数很像，也使用`...`，但二者用途完全相反
```js
let arr = [3, 5, 1];

alert(Math.max(...arr)); // 5
```
在函数调用中使用`...spread`，可以把可迭代对象**展开**到参数列表中

```js
let str = "hello";

// 变成了一个数组
alert([...str]); // h,e,l,l,o
```
该语法与Array.from存在细微差别
* Array.from适用于类数组对象和可迭代对象
* Spread只适用于可迭代对象

### 复制`array/object`
spread可以浅复制对象或数组
```js
let arr = [1, 2, 3, 5];

let arrCopy = [...arr];

alert( arr === arrCopy ); // false
// 可以通过相同的方式复制对象
```

## 变量作用域, 闭包

### 代码块
在代码块`{...}`内声明的变量，只在该代码块内可见
```js
{
    let message = "hello";
    alert( message ); // hello
}

alert(message); // 无法找到该变量
```
对于`if`, `for`, `while`等`{...}`内部的变量，依然是仅在内部可见。

### 嵌套函数
在一个函数内部创建另一个函数，该函数被称为**嵌套**函数。
```js
function makeCounter() {
    let count = 0;

    return function() {
        return count++;
    };
}

let counter = makeCounter();

alert(counter(0)); // 0
alert(counter(1)); // 1
alert(counter(2)); // 2
```
嵌套函数可以直接作为结果返回，之后可以在其他地方使用，并能够随时使用外部变量。

### 语法环境

#### Step 1. 变量
每个运行的函数，代码块以及整个脚本，都被称为**词法环境**
词法环境由2个部分组成:
1. 环境记录: 存储所有局部变量作为其属性的对象
2. 对外部词法环境的引用

#### Step 2. 函数声明
函数也是一个值，但函数声明的初始化会被立即完成。

#### Step 3. 内部和外部的词法环境

#### Step 4. 返回函数

> 在JS中，所有的函数都是天生的闭包

### 垃圾收集
通常情况，函数调用完成后，会将词法环境和其中的所有变量从内存中删除。
但是，如果有一个嵌套函数在函数结束后仍可达，则该嵌套的函数不会从变量中被删除。

#### 实际开发中的优化
V8的副作用，V8会尝试优化删除一些可达的函数（嵌套的函数）

### 作业
```js
// 作业1 
alert(sum(1)(2));
alert(sum(5)(-1));

function sum(num) {
    return function(value) {
        return num + value;
    }
}

// 作业2
function func() {
    // 引擎从函数开始就知道局部变量 x，
    // 但是变量 x 一直处于“未初始化”（无法使用）的状态，直到遇到 let，此时“死区”结束
    // 因此答案是 error

    console.log(x); // ReferenceError: Cannot access 'x' before initialization

    let x = 2;
}

// 作业3
let arr = [1, 2, 3, 4, 5, 6, 7];

alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

arr.filter((item, arr) => item >=3 && item <= 6);
arr.filter((item, arr) => item===1 || item===2 || item===10);

function inBetween(a, b) {
    // 我的答案
    return function(x) {
        if (x>=a && x<=b) return x;
    }
    // 简单写法
    // return x>=a && x<=b;
}

function inArray(arr) {
    return function(x) {
        for (let a of arr) {
            if (x===a) return x;
        }
    }
    // 简单写法，使用arr.includes()方法
    return function(x) {
        return arr.includes(x);
    }
}

// 作业4
let users = [
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

console.log( users.sort(byField('name')) );
console.log( users.sort(byField('age')) );

function byField(value) {
    return function() {
        let num = -1;
        if (this.value>num) return 1;
    }
    // 答案
    // return (a, b) => a[value] > b[value] ? 1 : -1;
}

// 作业5
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        let shooter = function() { // 创建一个 shooter 函数，
            // 应该显示其编号
            // 原错误：alert(i)
            alert(shooters.indexOf(shooter));  // 修改后
        };
        shooters.push(shooter); // 将此 shooter 函数添加到数组中
        i++;
    }

    // ……返回 shooters 数组
    return shooters;
}

let army = makeArmy();
console.log(army);

// ……所有的 shooter 显示的都是 10，而不是它们的编号 0, 1, 2, 3...
army[0](); // 编号为 0 的 shooter 显示的是 10
army[1](); // 编号为 1 的 shooter 显示的是 10
army[5](); // 10，其他的也是这样。

```
## 老旧的`var`
var声明与let类似，但现在版本一般不适用它

### `var`没有块级作用域
* `var`声明的变了只有函数作用域和全局作用域
### `var`允许重新声明
### `var`声明的变量，可以在其声明语句前被使用
* 声明会被提升，但赋值不会
```js
function sayHi() {
  alert(phrase);

  var phrase = "Hello";
}

sayHi();
```

### IIFE
在只有var的时代，程序员发明的一种模仿块级作用域的方法。
```js
// 像这样
(function() {
    // 使该变量变为私有变量
    var message = "Hello";

    alert(message); // Hello

})();
```

## 全局对象
* 全局对象的所有属性都可以被直接访问
* 使用`var`进行声明
* 一般使用直接的方式访问全局对象的属性，如`window.x`。
> 一般不建议使用全局变量

### 使用polyfills

## 函数对象，NFE
在JS中，函数的类型是对象
把函数想象成可被调用的**行为对象**(action object)。
除了直接调用，也支持把它们当做对象来处理：增/删属性，按引用传递等。

### 属性name
函数对象包含一些便于使用的属性
* `name` 用来访问函数的名字
```js
function sayHi() {
    alert("Hi!")
}

alert(sayHi.name); // sayHi
```

### 属性length
返回函数参数的个数
```js
function sayHi() {
    alert("Hi!")
}

alert(sayHi.length); // 0
```

### 自定义属性
可以添加自定义属性
```js
function sayHi() {
    alert("Hi!");

    sayHi.counter++;
}
sayHi.counter = 0;

sayHi();
sayHi();
sayHi();

alert(sayHi.counter); // 3
```
和闭包的区别：当变量绑定到函数上时，可以在外部访问到该自定义属性；处于函数内的变量，在外部无法访问

### 命名函数表达式 NFE
```JS
// 普通函数表达式
let sayHi = function(who) {
    alert(`hello! ${who}`);
}

// 加个名字
let sayHi = function func(who) {
    alert(`hello! ${who}`);
}
```
区别:
1. 添加名字后，它允许函数在内部引用自己
2. 在函数外是不可见的

```js
let sayHi = function func(who) {
    if (who) {
        alert(`hello, ${who}`);
    } else {
        func("Guest");
    }
};

sayHi(); // hello, Guest
```

### 作业
```js

```

## `new Function`语法

### 语法
```js
let func = new Function([arg1, arg2, ...argN], functionBody);
```

### 闭包
通常是指一个特殊的属性`[[Enviroment]]`，用来记录函数自身的创建时的环境的函数
* 使用`new Function`创建的函数，无法访问外部变量，只能访问全局变量
```js
function getFunc() {
    let value = "test";

    let func = new Function('alert(value)');

    return func;
}

getFunc()(); // value is not defined

// 2
var value = "test";

function getFunc() {

    let func = new Function('alert(value)');

    return func;
}

getFunc()(); // test
```

## 调度: `setTimeout`和`setInterval`
有的时候我们想等待特定一段时间之后再执行一个函数（计划调用）
目前有2种实现方式
1. `setTimeout`
    * 将函数推迟到一段时间间隔之后再执行
2. `setInterval`
    * 允许我们重复运行一个函数，从一段时间间隔之后开始运行，之后以该间隔时间重复运行该函数

### `setTimeout`
