
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


#### 弹性盒布局
非常依赖父子元素关系，以下属性设置都只影响弹性盒子的子元素，不影响子元素之后的后代元素
* `display: flex;` 定义弹性盒容器
* `display: inline-flex;` 定义行内弹性盒容器

* `flex-direction`
  * 调整弹性元素的布局方式
  * row 横向排列
  * row-reverse 反向横向排列
  * column 纵向排列
  * cloumn-reverse 反向纵向排列

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


一些关于弹性盒中的弹性元素（弹性盒子的子元素）的单独设置方式
* `algin-self` 定义单个弹性元素在垂轴上的排列方式
  * 属性值和`algin-items`基本一致
  * 设置后会覆盖弹性盒子在该弹性元素上的`algin-itmes`属性

