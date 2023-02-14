# extends关键字

`extends`是typescript类型系统中, 用于条件类型约束的关键字。基本语法如下所示。

```ts
T extends U ? X : Y
```

```ts
type T2 = "T1" | "T2";
type T1 = "T1";
// T3 = "yes"
type T3 = T1 extends T2 ? "yes" : "no";
```

当extends左侧的类型可分配给右侧的类型时，返回冒号左边的类型， 否则返回冒号右边的类型。extends的用法看起来跟js的条件运算符(… ? … : …)很像。
