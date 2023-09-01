
## 根据属性选择匹配子串
```css
@media print  {
    h1 {color: aqua;}
    body {background: yellow;}
}

[class |= "kang" i] { color: red;} /*当无法区分大小写时，后面加i*/
[class ~= "kang"] { color: green;}
h1[class *= "don"] { color: blue;}
```
* `foo|="kan"`  这个每太理解
* `foo~="kan"` 匹配所有foo属性值中包含`kan`这一组词的元素
* `foo^="kan"` 匹配所有foo属性值以`kan`开头的元素
* `foo$="kan"` 匹配所有foo属性值以`kan`结尾的元素
* `foo*="kan"` 匹配所有foo属性值包含`kan`的元素

## 结构伪类
* `:only-child` 选择某个父元素唯一的子元素
这里要注意，如果该元素不止一个子元素，那个该选择器不会生效

* `:only-of-type` 选择某个父元素中某一类唯一的元素，且该类型的元素只有一个
* `:first-child` 选择某个父元素的第一个子元素
* `:last-child` 选择某个父元素的最后一个子元素

* `:first-of-type` 从某个父元素的子元素中选择有N个某元素中的第一个某子元素
```css
section table:first-of-type {
    color:red;
    /*在section的后代table中，选择第一个table*/
}
```
* `:last-of-type` 和`:first-of-type`基本一样的用法，只是从第一个变成选择最后一个\

* `:nth-child(n)` 选择第n个子元素
```css
h2 div:nth-child(3) {
    color: blue;
/*选择第三个div, 前提是第三个元素是div*/
}

tr:nth-child(2n) {
    background-color: silver;
    /*设置表格偶数行的颜色*/
}

```
* `:nth-last-child(n)` 选择最后第N个子元素
* `:nth-of-type(n)` 选择第n个某种子元素

### 否定伪类
* `:not()`

```css
.moreinfo:not(li) {
    font-style: italic;
    /*装饰class="moreinfo"的元素，但不包含li元素*/
}
```

## 重要性
* `!important` 始终放在声明末尾的分号之前
重要规则始终胜出

## 继承
父元素的某些样式会被子元素继承

### 属性值

可以使用`attr()`插入属性值
```css
input[type="text"] {width: attr(maxlength em);}
```

### 使用@font-face
```css
@font-face {
    font-family: "my_text"; /*自定义字体的名称*/
    src: url("Arial.ttf"); /*引用的url地址*/
}
```
自定义字体，可以引用自己创建的字体名称

* `font-weight` 调整字体的粗细
也可以在使用`@font-face`时设置字重(字体粗细)

可以使用`font-kerning`调整字距（字符之间的距离）

### font简写
使用font同时将设置多种字体格式
`font: <font-style> || [normal | small-caps] || <font-weight> || <font-size>[/line-weight]? || <font-family>;`
可以加入行高`line-height`


### 块级框
通常情况，块级框的`width`和`height`是指内容的宽度和高度（内边界之间的距离）
* 可以通过设置`box-sizing`属性来改变`width`和`height`的具体意义
  * 默认值是`content-box`
  * `box-sizing: border-box;` 使`width`和`height`计算边框之间的距离，内容区的尺寸相对变小
  * `box-sizing: padding-box;` 使`width`和`height`计算内容加上内边距的距离

* 通过`margin: 0 auto;` 将块级框居中显示

置换元素的外边距和边框对行内框的高度有影响
非置换元素的内边距、边框和外边距在对应的方框上没有纵向效果(对高度没有影响)

* `vertical-algin`设置元素行内框的对其方式
  * `top` 行内框的顶边与所在行框的顶边对齐 
  * `bottom`
  * `text-top` 与父元素的内容区顶边对齐
  * `text-bottom`
  * `middle` 
  * `super`
  * `sub`

* `line-height` 行内元素内容的高度（块级元素也可以设置）
  * 可以将`line-height`设定为以`em`为单位的行高，与其他元素不同的是，`em`为单位的`line-height`是基于该元素本身的`font-size`而言


### 背景裁剪
* `background-clip` 调整背景以什么为边界
    * 默认值`border-box`
    * `padding-box` 背景区域只延伸到内边框区域边界处
    * `content-box` 背景区域只延伸到内容区域边界处

* `background-position` 背景定位
    * 初始值 0% 0%
    * 可以使用百分比，数值（px,em等），或者方位（top left center等）

* `background-origin` 调整背景图像的位置以什么为边界
    * 默认值是`padding-box`
    * `border-box`
    * `content-box`

背景可以通过逗号分隔，从而接收多个背景图片；其他参数也可以根据图片数量，通过逗号分隔，对对应的图片属性进行调整

### 线性渐变
* 使用`linear-gradient`调整背景图像的渐变方式

### 径向渐变
* `radial-gradient`

### 循环渐变
* `repeating-radial-gradient`
* `repeating-linear-gradient`
处理渐变图像在平铺是遇到的一些问题

### 盒子投影
* `box-shadow` 控制盒子投影及方式


### 浮动`float`
如果浮动的是非置换元素，那么需要给元素设定宽度；否则该元素的宽度趋近于零

使用浮动之后元素都会变成块级元素

### 定位 position

关于溢出内容和裁剪
* `overflow`
  * visible
  * hidden 超出元素框的内容无法呈现给用户
  * scroll 超出元素框的内容隐藏起来，并在元素框边界提供滚动条
  * auto 


设置元素的可见性
* `visibility`

#### 绝对定位 absolute

注意：绝对定位的元素是其后代元素的容纳快（也就是父元素和子元素同时是绝对定位时，子元素相对于父元素的位置进行定位）
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>权威指南速览</title>

    <style>
        .box1 {
            width: 100%;
            height: 500px;
            background-color: antiquewhite;
            position: relative;
        }
        .box2 {
            left: 50%;
            width: 50%;
            height: 100%;
            position: absolute;
            background-color: aqua;
        }
        .box3 {
            position: absolute;
            background-color: aquamarine;
            height: 50%;
            width: 50%;
            top: 10px;
            left: 20px;
        }
    </style>
</head>
<body>
    <div class="box1">
        <div class="box2">
            <div class="box3"></div>
        </div>
    </div>
</body>
</html>
```

#### 置换元素
存在内置的宽高度

#### z-index
使用z-index决定元素在z轴上的位置，值越大，代表元素距离用户越近
* z-index的值没有最大值限制


### 弹性盒布局
非常依赖父子元素关系，以下属性设置都只影响弹性盒子的子元素（也就是弹性元素），不影响子元素之后的后代元素
* `display: flex;` 定义弹性盒容器
* `display: inline-flex;` 定义行内弹性盒容器

* `flex-direction`
  * 调整弹性元素的布局方式
  * row 横向排列
  * row-reverse 反向横向排列
  * column 纵向排列
  * cloumn-reverse 反向纵向排列
* `flex-wrap` 当弹性元素超出弹性容器时，控制弹性元素是否换行
  * nowrap
  * wrap

* `flex-flow: row wrap;`
  * 同时定义主轴的方向和弹性元素是否换行
* `justify-content` 定义弹性元素在主轴方向的排列方式
  * flex-start 默认值 紧靠主轴起边
  * flex-end 紧靠主轴终边
  * center 居中展示
  * space-between 第一个元素和最后一个元素分别靠近起边和终边，中间的间隔等宽
  * space-around 相当于对每个弹性元素分别在两侧添加相同的不折叠的外边距
  * space-evently 等分每个元素之间的距离（相当于相同的折叠的外边距）
* `algin-items` 定义**每一行内**弹性元素在当前行内的垂轴方向的排列方式
  * flex-start flex-end center
  * baseline 向第一条弹性元素的基线对齐
  * stretch 将同一行的所有弹性元素高度拉伸为相同高度（以高度最高的元素为准）

* `algin-content` 当有**多行弹性元素**时，定义多行弹性元素在垂轴方向的排列方式
  * 属性值基本和`justify-content`一致
  * 多了一个`strech`


##### 一些关于弹性盒中的弹性元素的单独设置方式
* `algin-self` 定义单个弹性元素在垂轴上的排列方式
  * 属性值和`algin-items`基本一致
  * 设置后会覆盖弹性盒子在该弹性元素上的`algin-itmes`属性


###### 注意：
1. float和clear对弹性元素不起作用
2. 弹性元素可以使用绝对定位

* `flex` 适用于弹性元素（弹性容器的子元素）
  * 是`flex-grow` `flex-shrink` `flex-basis` 三个属性的简写形式
  * 0 1 auto 默认值
  * 常见弹性值
    * `flex: initial;` 根据`width`和`height`确定弹性元素的尺寸（由主轴方向决定），允许缩小
    * `flex: auto;` 元素完全弹性，既可以缩小也能增大
    * `flex: none;` 元素失去弹性，禁止变形
* `flex-grow` 设置弹性增长因子，决定是否将弹性容器多余的空间分配给弹性元素
  * number 始终是一个正数
* `flex-shrink` 设置弹性缩减因子

通过这些行为可以实现弹性布局（响应式弹性布局）

* `flex-basis` 定义弹性元素的初始或默认大小
* `order` 默认为0，可以设置order属性，重新排列弹性元素的顺序
  * 扩展引用：可以利用该属性，将当前激活的导航栏显示在第一位（仅修改视觉顺序）


### 栅格布局

#### 创建栅格容器
和弹性盒布局中创建弹性容器一样
    * 栅格容器的子元素是栅格元素，但子元素之后的后代元素不是栅格元素
    * 栅格容器中的空白文字也会被当做单个容器的子元素之一
    * 栅格元素自身也能变成栅格容器
    * 表格也是一种栅格布局，但没有栅格布局强大
* `display: grid;` 创建块级框（常规栅格容器）
* `display: inline-grid;` 创建行内框（行内栅格容器）
    * 栅格容器不是块级容器（二者很像，但不一样）
    * 浮动元素不会打乱栅格内容
    * 栅格元素的上外边距不会与栅格容器的上外边距折叠
    * 栅格容器会忽略column属性
    * 没有`::first-line`和`::first-letter`伪元素
    * `float`和`clear`会被忽略
    * `vertical-algin`对栅格元素不起作用

#### 栅格布局的构成
1. 栅格轨道
    * 2条栅格线之间的整个区域
2. 栅格单元
    * 四条栅格线限定的区域，内部没有其他栅格线贯穿
3. 栅格区域
    * 任何四条栅格线限定的矩形区域
        * 最小的栅格区域就是栅格单元
        * 最大的栅格区域是栅格中所有单元

#### 使用`grid-template-rows`和`grid-template-columns`放置栅格线
```css
grid-template-columns: 200px 20% 100px;

/*重复栅格线：使用repeat*/
grid-template-columns: repeat(3, 5em);
```

自动填充整个栅格
```css
grid-template-row: repeat(auto-fill, [top] 5em [bottom]);
/*每隔5em放置一条行栅格线，知道没有空间为止*/
```

使用`grid-template-areas`填充栅格区域
```css
grid-template-areas:
    "h h h h" 
    "l c c r"
    "l f f f"
    ;
/*header left center right footer等的简写*/
```

#### 在栅格容器中附加栅格元素

##### 列线和行线
- 把元素的边界附加到某条栅格线上（适用于栅格元素和绝对定位元素）
* `grid-row-start` 行边界起始于某一条栅格线
* `grid-row-end` 行边界终止于某一条栅格线
* `grid-column-start` 列边界起始于某一条栅格线
* `grid-column-end` 列边界终止于某一条栅格线
说明：grid-row-start和grid-row-end之间的最小间隔是1（默认值）

```css
.grid_one {
      background-color: aqua;
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 4;
  }
.grid_two {
      background-color: aquamarine;
      grid-column-start: 5;
      grid-column-end: 6;
      grid-row-start: 1;
      grid-row-end: 2;
  }
```

##### 使用`span值`
- （适用于栅格元素和绝对定位元素）
* `span n`的意思是，从开始栅格线之后第n条栅格线截止
  * 开始和结束时都可以使用span值
```css
.grid_one {
      background-color: aqua;
      grid-column-start: 2;
      grid-column-end: span 3;
      grid-row-start: 2;
      grid-row-end: 4;
  }
```

##### 跨越多条栅格线
- （适用于栅格元素和绝对定位元素）
如果栅格线有名称，也可以引用栅格线名称（或者二者混用）
```css
.grid_box {
      height: 500px;
      width: 1000px;
      background-color: #bfbfbf;
      margin: 20px;
      display: grid;
      grid-template-columns: repeat(20, 5%);
      grid-template-rows: 10% 10% [col-c] 10% 20% 20% [col-a] 20% [col-c] 10%;
  }
.grid_one {
      background-color: aqua;
      grid-column-start: 2;
      grid-column-end: span 2;
      grid-row-start: 2;
      grid-row-end: span col-c 2; /*从开始栅格线之后的第二个名称为col-2的栅格线截止，也可以 span 2 col-c 陈列*/
  }
```

#### 行列简写属性
- （适用于栅格元素和绝对定位元素）
使用 start / end 来区分开始和结束栅格线 
* `grid-row`
* `grid-column`
```css
.grid_one {
      background-color: aqua;
      grid-column: 2 / span 2;
      grid-row: 2 / span col-c 2;
  }
```

#### 隐式栅格
- （适用于栅格元素和绝对定位元素）
```css
.grid_box2 {
    height: 300px;
    width: 200px;
    background-color: aquamarine;
    display: grid;
    grid-template-columns: repeat(5, 20%);
    grid-template-rows: repeat(2, 50px);
}
.grid_three {
    background-color: azure;
    grid-column: 2 / 4;
    grid-row: 1 / 4;
```
*该栅格容器只有3条行栅格线，但结束的行栅格线在第四行，此时浏览器会创建第4条行栅格线，由此产生的行轨道都是隐式栅格的一部分*

#### 使用区域
- 适用于栅格元素和绝对定位元素
* `grid-area`

```css
.grid_four {
    background-color: bisque;
    grid-area: 1/2/3/4; 
}
```
逆时针顺序
*row-start/column-start/row-end/row-start*


#### 栅格流（适用于栅格容器）
* `grid-auto-flow` 决定排布方式（行排布或列排布）
  * row | column

```css
.grid_box3 {
    height: 8em;
    width: 20em;
    padding: 0;
    text-align: center;
    background-color: rgb(127, 161, 255);
    display: inline-grid;
    grid-auto-flow: column;
}
.grid_box3 li {
    list-style: none;
    background-color: rgb(39, 201, 201);
    grid-column: auto;
    grid-row: auto;
}
```

#### 自动增加栅格线（适用于栅格容器）
为自动增加的行或列设置尺寸
* `grid-auto-rows`
* `grid-auto-columns`

#### `grid` 简写属性
取值很多，需要多加练习才能记住

#### 释放栅格空间
##### 栏距
两个栅格轨道之间的间隔（类似border加粗的效果）
* `grid-row-gap`
* `grid-column-gap`
* `grid-gap: 2em 2em;` 简写方式

##### 栅格对齐方式
类似于弹性容器和弹性元素中的对齐相关属性，也可以在栅格中使用

##### 分层和排序
* `z-index` 改变栅格元素在z轴上的位置，数字越大，离用户越近
* `order` 改变栅格元素的顺序