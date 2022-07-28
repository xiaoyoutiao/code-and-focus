# 函数式编程 (Functional programming)

## 相关名词

- 范畴论 (Category Theory)
- 范畴 (category)
- 态射 (morphism)
- 纯函数
- 柯里化 (curry)
- 合成 (compose)
- 函子 (Functor)

## 函子
任何具有map方法的数据结构，都可以当作函子的实现。

一般约定，函子的标志就是容器具有map方法。该方法将容器里面的每一个值，映射到另一个容器。

### Functor
- map
- of

### Maybe
- map (空值判断)

### Either
- map (left & right 条件判断)


### Applicative
- ap

### Monad
Monad 函子的重要应用，就是实现 I/O （输入输出）操作。

- join
- flatMap || chain
## 相关文章

[阮一峰 - 函数式编程入门教程](https://www.ruanyifeng.com/blog/2017/02/fp-tutorial.html)

[Aditya Bhargava - Functors, Applicatives, And Monads In Pictures](https://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html)