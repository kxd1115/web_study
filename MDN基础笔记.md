# MDN：关于HTML和CSS的基础学习

## HTML基础介绍
HTML头部主要是包含了一些页面元数据，在网页中不会展示出来



## CSS基础介绍
为`web`内容添加样式的代码
```css
p {
    color: red;
    width: 500px;
    border: 1px solid black;
}
```

CSS规则集各部分名称
* 选择器`(Selector)`
* 声明`(Declaration)`
  * 属性`(Property)`
  * 属性值`(Property value)`

选择器类型
* 元素选择器
* ID选择器
* 类选择器
* 属性选择器
* 伪类选择器

## CSS中一切都是盒子
### CSS盒子模型属性

1. padding(内边距)
2. border(边框)
3. margin(外边距)

其他属性
* width：元素的宽度
* background-color：border内所有内容的底色
* color：元素内容的颜色（一般都是文本）
* text-shadow：元素内容的阴影效果
    - 可以设置4个值
    1. 阴影的**水平偏移量**
    2. 阴影的**垂直偏移量**
    3. 阴影的**模糊半径**
    4. 阴影的**基色**
* display：设置元素的显示模式

