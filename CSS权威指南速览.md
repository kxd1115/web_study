
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