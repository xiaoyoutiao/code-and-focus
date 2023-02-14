# Typescript 内置工具类型介绍

# Awaited
`Awaited`类型是TypeScript 4.5新增的一种内置工具类型, 用于获取`Promise`对象或`async`函数中`已解决(fulfilled)`状态返回值, Awaited会`递归`的去解包嵌套Promise并返回最终的数据类型。

## 基础用法

```typescript
// A = string
type A = Awaited<Promise<string>>;
// B = number
type B = Awaited<Promise<Promise<number>>>;
// C = boolean | number
type C = Awaited<boolean | Promise<number>>;
```


## 使用场景
在实际项目中, 经常需要编写类似下面的异步方法, 用于封装异步操作或者请求服务端数据

<!-- , 此时可以使用`Awaited`类型获取异步函数的返回值 -->
```typescript
// queryUser: () => Promise<{ name: string; gender: string; }>
const queryUser = async () => ({ name: "ryu",gender: "male"  });
```

如果需要获取queryUser函数的返回值类型, 可以和`ReturnType`类型结合使用

<!-- , 此时可以使用`Awaited`类型获取异步函数的返回值 -->
```typescript

// QueryUserReturnType = Promise<{ name: string; gender: string; }>
type QueryUserReturnType = ReturnType<typeof queryUser>

// User = { name: string; gender: string; }
type User = Awaited<ReturnType<QueryUserReturnType>>;
```

封装成常用的类型方法

```typescript
type AsyncReturnType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;
```

<!-- <Awaited<ReturnType<typeof queryUserPrizeRecord>>> -->