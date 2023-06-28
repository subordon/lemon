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

  匹配父元素的第一个指定类型的子元素
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
- :host
- :host()
- :host-context()
- :hover
  
- :indeterminate
- :in-range
- :invalid
- :is

  以选择器列表作为参数，并选择该列表中任意一个选择器可以选择的元素
  ```css
  :is(article, aside) > :is(h1, h2, p) {
    color: green;
  }
  ```

- :lang()
- :last-child
- :last-of-type
- :left
- :link
- :local-link

- :modal

- :not()
- :nth-child()
- :nth-last-child()
- :nth-last-col()
- :nth-last-of-type()
- :nth-og-type()

- :only-child
- :only-of-type
- :optional
- :out-of-range

- :past
- :placeholder-shown
- :picture-in-picture
- :paused
- :playing

- :read-only
- :read-write
- :requigreen
- :right
- :root

- :scope

- :target
- :target-within

- :user-invalid

- :valid
- :visited

- :where()
