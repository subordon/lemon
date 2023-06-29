---
title: "深入理解CSS伪类"
excerpt: "Some description"
publishDate: "2023-06-28"
category: "CSS"
author: "mrayi"
tags: [CSS, 伪类]
---

### CSS 伪类

#### 伪类的定义

伪类是一种用于向某些选择器添加特殊效果的关键字。伪类由冒号（:）后跟着伪类名称组成（例如，:hover）。

#### 常见伪类
- :active
  
  匹配被激活元素
  ```css
  a:active{
    color: green;
  }
  a:link { color: blue; }          /* 未访问链接 */
  a:visited { color: purple; }     /* 已访问链接 */
  a:hover { background: yellow; }  /* 用户鼠标悬停 */
  a:active { color: green; }         /* 激活链接 */

  p:active { background: #eee; }   /* 激活段落 */
  ```
- :any-link
- :autofill

  设置自动填充内容样式
  ```css
  input:autofill,
  input:-webkit-autofill{
    background-color: transparent;
  }
  ```

- :checked

  匹配被选中的元素 radio checkbox select
  ```css
  input:checked{
    background-color: green;
  }
  ```

- :disabled

  匹配被禁用的元素
  ```css
  input:disabled{
    background-color: green;
  }
  ```

- :empty

  匹配没有子元素的元素
  ```css
  p:empty{
    background-color: green;
  }
  ```
- :enabled

  匹配被启用的元素
  ```css
  input:enabled{
    background-color: green;
  }
  ```
- :first

  :first CSS 伪类与 @page at 规则一起使用。表示打印文档的第一页。
  ```css
  /* 打印时选择第一页 */
  @page :first {
    margin-left: 50%;
    margin-top: 50%;
  }
  ```
- :first-child

  匹配父元素的第一个子元素
  ```css
  p:first-child{
    background-color: green;
  }
  ```
- :first-of-type

  选择同级元素中的第一个特定类型的元素
  ```css
  <dl>
    <dt>Vegetables:</dt>
    <dd>1. Tomatoes</dd>
    <dd>2. Cucumbers</dd>
    <dd>3. Mushrooms</dd>
    <dt>Fruits:</dt>
    <dd>4. Apples</dd>
    <dd>5. Mangos</dd>
    <dd>6. Pears</dd>
    <dd>7. Oranges</dd>
  </dl>
  dt {
    font-weight: bold;
  }

  dd {
      margin: 3px;
  }

  dd:first-of-type {
      border: 2px solid orange;
  }
  ```
- :focus

  匹配当前获取焦点的元素
  ```css
  input:focus{
    background-color: green;
  }
  ```
- :focus-within

  当元素或其任意后代元素被聚焦时，将匹配该元素
  ```css
  div:focus-within {
    background-color: green;
  }
  ```
- :fullscreen

  匹配处于全屏模式的元素
  ```css
  /* 全屏模式下的元素 */
  :fullscreen {
    background-color: green;
  }
  ```
- :has()

  匹配包含指定选择器的元素
  ```css
  p:has(> a){
    background-color: green;
  }
  ```
- :host

  用于选择当前自定义元素（Custom Element）的宿主元素，只能在 Shadow DOM 的样式规则中使用，不能在全局样式规则中使用。它的作用范围仅限于自定义元素的 Shadow DOM 内部。
  ```css
  :host{
    background-color: green;
    color: white;
  }
  ``` 
- :hover

  匹配鼠标悬停的元素
  ```css
  a:hover{
    background-color: green;
  }
  ```
  
- :indeterminate

  匹配表单元素中处于不确定状态的元素
  ```css
  input[type="checkbox"]:indeterminate {
    background-color: yellow;
  }
  ```
- :in-range

  匹配 input 值处于 min 和 max 之间的元素
  ```css
  input[type="number"]:in-range {
    border: 2px solid green;
  }
  ```
- :invalid

  匹配表单中不合法的元素
  ```css
  input:invalid {
    background-color: red;
  }
  ```
- :is

  以选择器列表作为参数，并选择该列表中任意一个选择器可以选择的元素
  ```css
  :is(article, aside) > :is(h1, h2, p) {
    color: green;
  }
  ```

- :lang()

  基于元素语言来匹配页面元素
  ```css
  *:lang(en-US) {
      outline: 2px solid deeppink;
  }
  ```
- :last-child

  一组兄弟元素中的最后元素
  ```css
  p:last-child{
    background-color: green;
  }
  ```
- :last-of-type

  选择同级元素中的最后一个特定类型的元素
  ```css
  <dl>
    <dt>Vegetables:</dt>
    <dd>1. Tomatoes</dd>
    <dd>2. Cucumbers</dd>
    <dd>3. Mushrooms</dd>
    <dt>Fruits:</dt>
    <dd>4. Apples</dd>
    <dd>5. Mangos</dd>
    <dd>6. Pears</dd>
    <dd>7. Oranges</dd>
  </dl>
  dt {
    font-weight: bold;
  }

  dd {
      margin: 3px;
  }

  dd:last-of-type {
      border: 2px solid orange;
  }
  ```
- :link

  匹配未被访问的链接
  ```css
  a:link{
    background-color: green;
  }
  ```
- :not()

  匹配不符合指定选择器的元素
  ```css
  a:not([href]) {
    color: red;
  }
  ```
- :nth-child()

  选择器匹配其父元素下的第 N 个子元素，不论元素的类型
  ```css
  p:nth-child(2n+1){
    background-color: green;
  }
  ```
- :nth-last-child()

  选择器匹配其父元素下的倒数第 N 个子元素，不论元素的类型
  ```css
  p:nth-last-child(2n+1){
    background-color: green;
  }
  ```

- :nth-last-of-type()

  元素在相同类型（标签名）的兄弟元素中相对最后一个元素的位置来匹配元素
  ```css
  <dl>
    <dt>Vegetables:</dt>
    <dd>1. Tomatoes</dd>
    <dd>2. Cucumbers</dd>
    <dd>3. Mushrooms</dd>
    <dt>Fruits:</dt>
    <dd>4. Apples</dd>
    <dd>5. Mangos</dd>
    <dd>6. Pears</dd>
    <dd>7. Oranges</dd>
  </dl>
  dt {
    font-weight: bold;
  }

  dd {
      margin: 3px;
  }

  dd:nth-last-of-type(2n+1) {
      border: 2px solid orange;
  }
  ```
- :only-child

  匹配父元素下仅有的一个子元素
  ```css
  p:only-child{
    background-color: green;
  }
  ```
- :only-of-type

  选择同级元素中唯一的特定类型的元素
  ```css
  <dl>
    <dt>Vegetables:</dt>
    <dd>1. Tomatoes</dd>
    <dd>2. Cucumbers</dd>
    <dd>3. Mushrooms</dd>
    <dt>Fruits:</dt>
    <dd>4. Apples</dd>
    <dd>5. Mangos</dd>
    <dd>6. Pears</dd>
    <dd>7. Oranges</dd>
  </dl>
  dt {
    font-weight: bold;
  }

  dd {
      margin: 3px;
  }

  dd:only-of-type {
      border: 2px solid orange;
  }
  ```
- :optional

  匹配没有设置 required 属性的元素
  ```css
  input:optional{
    background-color: green;
  }
  ```
- :out-of-range

  匹配 input 值不在 min 和 max 之间的元素
  ```css
  input[type="number"]:out-of-range {
    border: 2px solid red;
  }
  ```

- :placeholder-shown

  匹配 input 或 textarea 元素的 placeholder 文本被显示的元素
  ```css
  input[type="text"]:placeholder-shown {
    border: 2px solid red;
  }
  ```
- :picture-in-picture

  匹配处于画中画模式的元素
  ```css
  video:picture-in-picture {
    border: 2px solid red;
  }
  ```
- :paused

  匹配处于暂停状态的元素
  ```css
  video:paused {
    border: 2px solid red;
  }
  ```
- :playing

  匹配处于播放状态的元素
  ```css
  video:playing {
    border: 2px solid red;
  }
  ```

- :read-only

  匹配只读元素
  ```css
  input:read-only{
    background-color: green;
  }
  ```
- :read-write

  匹配可读写元素
  ```css
  input:read-write{
    background-color: green;
  }
  ```
- :requigred

  匹配设置了 required 属性的元素
  ```css
  input:required{
    background-color: green;
  }
  ```
- :root

  匹配文档的根元素，对于 HTML 来说，:root 表示 <html> 元素
  ```css
  :root {
    background-color: green;
  }
  ```

- :target

  匹配文档的 URL 包含锚点名称（#name）的元素
  ```css
  :target {
    background-color: green;
  }
  ```
- :target-within

  匹配文档的 URL 包含锚点名称（#name）的元素或其后代元素
  ```css
  :target-within {
    background-color: green;
  }
  ```

- :valid

  匹配表单中合法的元素
  ```css
  input:valid {
    background-color: green;
  }
  ```
- :visited

  匹配已被访问的链接
  ```css
  a:visited{
    background-color: green;
  }
  ```

- :where()

  以选择器列表作为参数，并选择该列表中任意一个选择器可以选择的元素
  ```css
  :where(article, aside) > :where(h1, h2, p) {
    color: green;
  }
  ```


#### 参考
- [CSS 伪类](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Pseudo-classes)