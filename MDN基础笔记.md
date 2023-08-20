# MDN：关于HTML和CSS的基础学习

## HTML头部基础介绍
HTML头部主要是包含了一些页面元数据，在网页中不会展示出来

#### meta元素

meta元素可以包含`name`和`content`属性
* name: 指定meta元素的类型
* content: 指定实际的元数据的内容
name='description'的meta元素中的元数据内容会在搜索该网页时展示

#### link元素和script元素
* link元素: 主要是引用CSS文件
* script元素: 主要是引用js文件 


为站点设定语言
* 将lang属性添加到HTML开始标签中


## HTML BODY中的常用元素基础介绍
#### 段落: P
```html
<p>我是一个段落</p>
```

#### 标题: h1 h2 h3 h4 h5 h6

#### 列表 
##### 无序列表 ul > li
##### 有序列表 ol > li

#### 加粗: strong
#### 字体倾斜: em


#### 旧版本（目前建议使用 em strong span等元素）
* 斜体字: b 
* 粗体字: i
* 下划线: u

### 超链接
* 使用a标签

#### 描述列表
```html
<dl>
  <dt>名称</dt>
  <dd>内容</dd>
</dl>
```

#### 段落引用 blockquote
#### 行内引用 q

* cite
必须通过javascript或者CSS编写解决方案让浏览器显示，否则cite标签内的内容不会展示

#### 其他常用元素
* sup 上标
* sub下标
* header 页眉
* nav 导航栏
* main 主内容: 每个页面只能使用一次
* aside 侧边栏
* footer 页脚
* article 主要用来包围一篇文章
* section 可以将文章分割进不同的section中


#### 无语义元素
  1. div
  2. span
通过class属性来定义这些元素标签的用法和类型

**注意: div标签非常容易被滥用，通常在没有更好的语义方案时才使用**

#### br 换行符
#### hr 分割符


### HTML验证
通过`https://validator.w3.org/`进行标记验证

#### 多媒体嵌入
* img 图片嵌入
* video 视频嵌入
* audio 音频嵌入
#### iframe
旨在允许将其他web文档嵌入到当前文档中
* 始终使用sandbox属性
* 配合CSP指令
* 注意风险

#### `<embed>`和`<object>`元素
现在用的比较少

#### `<svg>`元素

#### 响应式图片
通过img中的`srcset`和`sizes`属性来提供更多额外的资源图像和提示
* srcset
  * `srcset="elva-fairy-480w.jpg 480w, elva-fairy-800w.jpg 800w"`
  * 定义不同浏览器中可选择的图片设置以及每个图片的大小
* sizes
  * `sizes="(max-width: 400px) 120px"`
  * 满足条件则使用400px宽度，否则使用120px宽度
  
#### HTML表格
* tr元素 表示表格的行
* td元素 用来包含每个单元格中的内容
* th元素 表格的表头
  * 可以添加scope属性, 告诉阅读者这是列表头还是行表头
* caption 为表格增加标题
#####将表格结构化
* 使用thead, tfoot, tbody结构
* thead 包含住表格表头的部分
* tbody 包含住表格内容
* tfoot 包含主表格作为表脚的部分

---
## CSS基础介绍


### 根据状态确定样式
点击a标签中的链接前后，链接的颜色区别
```css
a: link {
  color: pink;
}

a: visit {
  color:green;
}
```
改变链接被鼠标悬停时候的样式
```css
a: hover {
  text-decoration: none
}
```

### 在HTML中应用CSS
1. 使用link元素链接外部样式表文件
2. 在HTML中使用style元素，构建内部样式表
3. 内嵌样式表，嵌入在元素标签的style属性中

##### 为`web`内容添加样式的代码
```css
p {
    color: red;
    width: 500px;
    border: 1px solid black;
}
```

##### CSS规则集各部分名称
* 选择器`(Selector)`
* 声明`(Declaration)`
  * 属性`(Property)`
  * 属性值`(Property value)`

##### 选择器类型
###### 元素选择器
```CSS
p {
  color: red;
}
```
###### ID选择器
```CSS
#test {
  color: red;
}
```
###### 类选择器
```css
.animal {
  color: red;
}
```
###### 属性选择器
```css
p[class] {/*所有class*/
  color: red;
}
p[class=value] {/*值为value的class*/
  color: red;
}
p[class~=value] {/*至少有一个值为value的class*/
  color: red;
}
p[class|=value] {/*值为value，或者开始的值为value*/
  color: red;
}
```
###### 伪类选择器，开头是`:`
`:pseudo-class-name`
```css
article p:first-child {/*选中第一个class名称为first的p元素*/
  font-size: 120%;
  font-weight: bold;
}
```
```html
<article>
  <p class="first">first</p>
  <p class="first">second</p>
</article>
```
类似的还有
1. `:last-child`
2. `:only-child`
3. `:invalid`

其他
1. `:hover` 指针悬停时激活
2. `:focus` 使用键盘控制时激活

###### 伪元素选择器, 开头是`::` 
`::pseudo-element-name`
```css
article p::first-line {/*将文章中的p元素中的第一行内容放大加粗*/
  font-size:120%;
  font-weight:bold
}
```
###### 将伪类和伪元素组合起来
```css
article p:first-child::first-line {/*将第一个类名为first的p元素中的第一行放大加粗*/
  font-size:120%;
  font-weight: bold;
}
.box::before {/*通过conten将内容添加到类名为box的原有内容的前面*/
  content: "This should show before the other content. ";
}
.box::after {/*通过conten将内容添加到类名为box的原有内容的后面*/
  content: " ➥";
}

```
以上仅为举例的几个伪类和伪元素，伪类和伪元素还有很多，可以翻阅MDN进行了解和学习

###### 后代选择器
* body article p

###### 子代关系选择器
* article > p
* 仅选中子元素中匹配的元素，更远关系的后代不会匹配

###### 邻接兄弟
* p + img
* 选择p和同级别紧邻的img元素

###### 通用兄弟
* p ~ img
* 选中p元素后同级别的所有img元素


## 层叠与继承
### 层叠
CSS规则顺序很重要，当应用两条同级别的规划到一个元素的时候，卸载后面的就是实际使用的规划
### 优先级
对于h1的更改，如果两个相同级别的选择器，其中一个更具体（有class名称），另一个仅有元素名称，则不论前后，会优先显示更具体的选择器

### 继承
有些属性可以被继承, 例如父元素的`color`和`font-family`会被子元素继承
有些属性不能被继承, 例如元素的`width`等

### 控制继承的5个通用属性值
* `inherit` 
  * 使子元素和父元素的属性相同
* `initial`
  * 将应用与选定元素的属性值设置为该属性的初始值
* `revert(en-US)`
  * 将应用于选定元素的属性重置为浏览器的默认样式
* `revert-layer(en-US)`
  * 将应用于选定元素的属性重置为在上一个层叠层中建立的值
* `unset`
  * 将属性重置为自然值

Transform函数
@规则
简写属性
注释 /**/

#### 级联层

```css
@layer test1 {
    div {
        color: red;
    }
    li {
        color: blue;
    }
}

div {
    color: green;
}
```

级联层内的样式比外部的样式优先级更低
靠后的级联层比靠前的级联层优先级更高

* 未被@layer包裹的样式>靠后的@layer级联层包裹的样式>>靠前的@layer级联层包裹的样式

## CSS中一切都是盒子
### CSS盒子模型属性

1. padding(内边距)
2. border(边框)
3. margin(外边距)

其他属性
* width：元素的宽度
* background-color：border内所有内容的底色
* color：元素内容的颜色（一般都是文本）

`box-shadow: 2px 2px 10px rgb(192, 181, 181), 3px 3px 3px rgba(255, 255, 255, 0.5) inset, -3px -3px 3px rgba(8, 8, 8, 0.5) inset;`
box-shadow和text-shadow用法差不多，前2个值正数代表向右，向下偏移，前2个值负数代表向左，向上偏移


#### display：设置元素的显示模式
* 通过`display`属性来改变盒子的外部显示类型是块级还是内联
`display`属性值
1. block（块级盒子）
   * 让盒子和父容器一样宽
   * 盒子会换行
   * width和height会起作用
   * 内外边距和边框会将其他元素从当前盒子周围推开 
   * 除非特殊指定，标题段落等元素默认都是块级盒子
2. inline（内联盒子）
   * 盒子不会换行
   * width和height不会起作用
   * 垂直方向会被应用（内外边距和边框），但不会把其他处于`inline`状态的盒子推开
   * 水平方向会被应用（内外边距和边框），且不会把其他处于`inline`状态的盒子推开
   * `a`, `span`, `em`, `strong`默认处于`inline`状态
3. inline-flex
4. flex
5. inline-block 提供内联和块之间的中间状态
   * width和height会生效
   * 内外边距和边框会将其他元素推开
   * 不会换行

## 背景与边框
### 背景
```css
.box {
    background-color: antiquewhite;
    width: 100px;
    height: 200px;
    background-image: url(https://mdn.github.io/css-examples/learn/backgrounds-borders/star.png);
    background-repeat: no-repeat;
    background-size: 5px 2em;
    background-position: top center;
}
```
* background-color 设置元素的背景颜色
* background-image 可以在元素的背景中显示一个图像, 支持多个背景图像
* background-repeat 控制图像的平铺行为
  * no-repeat 阻止平铺
  * repeat-x 默认水平方向平铺
  * repeat-y 默认垂直方向平铺
  * repeat 默认重复平铺
* background-size 调整背景图像大小
  * cover 完全覆盖盒子区域
  * contain 缩放到合适尺寸
* backgroun-position 背景图像定位
  * 默认值是(0,0)
  * 可以使用top, center或者长度和百分比去描述

### 边框
`border: 1px solid black`
以上为简写
```css
.box {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

### 圆角
```css
.box {
  border-radius: 10px;
}
```

## 处理不同方向的文本

书写模式是指文本的排列方向是横向还是纵向
* writing-modeo 控制文本的显示模式
  * horizontal-tb 块流从上至下，文本横向
  * vertical-rl 块流从右向左，文本纵向
  * vertical-lr 块流从左向右，文本纵向


## 溢出的内容
CSS中万物皆盒字，溢出是在往盒子中塞了太多东西时发生的

溢出的目的是为了尽力减少"数据损失"

#### `overflow`属性
控制元素内容溢出的方式
* `visible` 默认值
* `hiden` 裁剪掉溢出内容 
* `scroll` 内容溢出时，显示滚动条 
  * 可以使用`overflow-x` 或者 `overflow-y`来控制滚动条在哪个轴上
  * 也可以直接使用 `overflow: auto` 让浏览器自己决定是否显示滚动条

#### 溢出建立了块级排版上下文

## 值与单位
#### 数值类型
* integer 整数
* number 小数
* dimension 带有附加单位的数字，例如`10px`, `5s`等
* percentage 其他值的一部分，例如`50%`

#### 绝对长度单位
用的最多的就是 `px` 像素

#### 相对长度单位
* em 相对于父元素的字体大小
还有很多，可以翻阅MDN了解

## 组织CSS
#### OOCSS
可以创建一个`media`排布，里面包含几种排布共有的CSS格式，然后通过其他类处理微小区别
```css
.media {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.media .content { 
  font-size: 0.8em;
}
```

## 基本文本和字体样式

#### `font-family` 
设置字体属性，选择想使用的字体

#### font-size
设置字体的大小
* px 像素
* em 1em是父元素上设置的字体大小
* rem 1rem是html根元素的字体大小

#### 其他字体样式、粗细、文本转换和文本装饰
* `font-style` 
  * normal 普通字体
  * italic 斜体
  * olique 斜体字的模拟版本
* `font-weight` 设置文本的粗体大小
  * `normal` `blod` 普通或者加粗
  * `lighter` `bolder` 设置为比父元素粗体更粗或者更细的字体 (100-900)
* `text-transform` 转换字体
  * `none` 防止转换
  * `uppercase` 全部大写
  * `lowercase` 全部小写
  * `capitalize` 首字母大写
  * `full-width` 转换成全角
* `text-decoration` 设置文本装饰
  * `none` 取消任何文本装饰
  * `underline` 下划线
  * `overline` 上划线
  * `line-through` 穿过文本的中划线
* `text-shadow` 设置文本阴影
  * 四个属性
    * 水平偏移值
    * 垂直偏移值
    * 模糊半径
    * 阴影基础颜色
可以使用逗号，将多种阴影方式隔开，并应用于同一文本

* `text-align` 设置文本对齐方式
  * `left` 左对齐
  * `right` 右对齐
  * `center` 居中
  * `justify` 文本展开，改版单词之间的差距，是所有文本行的宽度相同
* `line-height` 设置文本每行之间的行高
* `letter-spacing` `word-spacing` 设置文本中的字母与字母之间的间距或者单词与单词之间的间距

#### font 简写

## 列表添加样式
#### 使用`start`属性，管理列表计数
#### `start="4" reversed` 倒序
也可以直接使用`value`设置列表项的指定数值

## 样式化链接
* Link 默认状态
* Visited 表示已经被访问过了
* Hover 鼠标停留在上面时
* Focus 被选中时
* Active 被激活时

## Web字体

## CSS排版

#### 弹性盒子

##### 主轴 `main axis` 沿着flex元素放置的方向延伸的轴，开始和结束被称为`main start`和`main end`
##### 交叉轴 `cross axis` 垂直于flex元素放置方向的轴，开始和结束被称为`cross start`和`cross end`
##### 设置了`display:flex`的父元素被称之为flex容器
##### 在flex容器中表现为弹性的盒子的元素被称之为flex项

* flex-direction:row; 指定主轴方向，默认是row
* flex-wrap: wrap; 改变子代超出容器范围的问题
```css
section {
    display: flex;
    flex-flow: row wrap;
    /*
    等同于
    flex-direction:row; 指定主轴方向，默认是row
    flex-wrap: wrap; 改变子代超出容器范围的问题
    同时设置article属性flex: 200px;
    */
}

article {x: 200px;
    */
    flex: 1 200px;
}

article:nth-of-type(3) {
    flex: 2 200px;
}
```
* align-items 控制flex项在交叉轴上的位置
* justify-content控制flex项在主轴上的位置
* order 控制flex项排序
```css
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
  /**/
}

button:first-child {
  align-self: flex-end;
}
```

#### 网格
`display: grid;` 声明创建一个只有一列的网格
`grid-template-columns: repeat(3, 1fr);` 使用repeat重复构建某些宽度配置的某些列，一般用来创建等宽轨道
`grid-gap: 20px;` 设置网格间隙
```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 100px;
    grid-gap: 20px;
}
```
通过`grid-template-columns`或者`grid-template-rows`创建的是显式网格
通过`grid-auto-columns`或者`grid-auto-rows`创建的是隐式网格

* minmax()函数

## 浮动
```css
.box {
  float: left;
  margin-right: 15px;
}
```
`float: left;` 让盒子浮动起来，并吸附到父容器的左边
`margin-left: 15px;` 设置浮动元素的左侧与父元素的距离

`clear: left;` 让元素不受到浮动元素的影响，清除左侧浮动
  * `right`清除右侧浮动
  * `both` 清除任何左右浮动
`display: flow-root;` 该元素生成一个块级元素盒，其会建立一个新的块级格式化上下文，定义格式化上下文的根元素。

## 定位
如果2个相邻元素都在其上设置外边距`margin`，并且2个外边距接触，则2个外边距中的较大者保留，较小的外边距会消失 ———— 这叫`外边距折叠`

定位是允许我们覆盖上面描述的基本文档流行为

要使某个元素上的特定类型的定位，使用`position`属性
  
#### 静态定位 `position: static`
将元素放入它在文档布局流中的正常位置
```css
.positioned {
  position: static;
  background: yellow;
}
/*该段CSS属性仅对背景颜色做出了修改，没有其他任何影响*/
```

#### 相对定位 `position: relative`
```css
.positioned {
    position: relative;
    background: yellow;
    top: 30px;
    left: 30px;
}
/*需要配合top left bottom right等属性将元素移动到你想要的位置*/
```
相对定位时，元素是依据自己原本所在的位置进行定位，不会影响文档布局流中的其他元素

* 需要注意，当使用`top`时，是将该元素从顶部往下推(相当于将该元素从原位置开始往下推)

总结: 相对定位是依据元素原位置进行定位

#### 绝对定位 `position: absolute`
```css
.positioned {
    position: absolute;
    background: yellow;
    top: 30px;
    left: 30px;
}
```
绝对定位中的元素不再存在于正常文档布局流中。相反，它坐在他自己的层独立于一切。
总结: 绝对定位元素是依据于有显式的`position`属性(非`static`属性)的父级元素进行定位

#### 定位上下文
如果所有的父元素都没有定义`position`属性。绝对定位的元素会被包含在**初始块容器**中。这个容器和浏览器视口尺寸一致，意味着该绝对定位的元素会根据浏览器视口进行定位
```css
body {
    width: 500px;
    margin: 0 auto;
    position: relative;
}

.positioned {
    position: absolute;
    background: yellow;
    top: 30px;
    left: 30px;
}
/*此时，绝对定位元素才会依据父级元素body进行定位*/
```

#### z-index
当有多个绝对定位元素时，使用`z-index`来决定谁在最上面一层
```css
.positioned {
    position: absolute;
    background: yellow;
    top: 30px;
    left: 30px;
}

p:nth-of-type(1) {
    position: absolute;
    background: lime;
    top: 10px;
    right: 30px;
    z-index: 1;
}
```

#### 固定定位 `position: fixed`
与绝对定位的工作方式完全相同
* 只有一个区别：固定定位元素永远相对于浏览器视口本身进行定位

#### `position: sticky`
相对位置和固定位置的混合体，允许被定位的元素表现得像相对定位一样，直到它滚动到某个阈值点，然后会停住，并会表现出固定定位的元素特性
```css
dt {
    background-color: black;
    color: white;
    padding: 10px;
    position: sticky;
    top: 0;
    left: 0;
    margin: 1em 0;
}
```

## 多列式布局
使用`column-count`或者`column-width`开启`multicol`容器
```css
.container {
    column-count: 3;
}
```
每一列的内容有浏览器弹性分布

```css
.container {
    column-count: 3;
    column-width: 200px;
}
```
添加`column-width`后，浏览器会根据你设定的宽度尽可能多的创建列，但是当内容不够时，可能无法达到你想要的列数

#### 增加样式
```css
.container {
    column-count: 3;
    column-gap: 20px;
    column-rule: 4px dotted rgb(79,185,227);
}
```
* `column-gap` 设置列间间隙
* `column-rule` 设置列分割线，并规定样式

#### 设置break-inside
描述在多列布局时，内容盒字如何终端
* `break-inside: avoid;` 避免中断
* `page-break-inside: aviod;` 旧版属性，可以对更多浏览器支持


## 响应式设计
RWD指允许Web页面适应不同屏幕宽度因素等