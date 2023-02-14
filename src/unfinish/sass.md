# sass 语法

## 关键字
### @use
### @import
### @forward
### @mixin
### @include
### #function 函数
```css
/* 声明mixin */
@mixin theme($theme: DarkGray) {
  background: $theme;
  box-shadow: 0 0 1px rgba($theme, .25);
  color: #fff;
}

/* 引用mixin 无参 */
.info {
  @include theme;
}
/* 引用mixin 传参 */
.alert {
  @include theme($theme: DarkRed);
}
.success {
  @include theme($theme: DarkGreen);
}
```

### @extend

## 变量声明
- $var: value

## 控制语句
- @if
  -  @if not
- @each

## 编译规则
- @error
- @warn
- @debug

## 其他
- @at-root

