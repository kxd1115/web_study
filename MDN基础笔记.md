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

###超链接
* 使用a标签

####描述列表
```html
<dl>
  <dt>名称</dt>
  <dd>内容</dd>
</dl>
```

####段落引用 blockquote
####行内引用 q

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
* 元素选择器
```CSS
p {
  color: red;
}
```
* ID选择器
```CSS
#test {
  color: red;
}
```
* 类选择器
```css
.animal {
  color: red;
}
```
* 属性选择器
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
* 伪类选择器
* 

##### `Transform`函数
##### @规则
##### 简写属性
##### 注释
* `/*注释内容*/`

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

