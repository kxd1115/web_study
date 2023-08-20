
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