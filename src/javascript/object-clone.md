## 结构化克隆(structured clone)
结构化克隆算法是由HTML5规范定义的用于复制复杂JavaScript对象的算法


### MDN文档
https://developer.mozilla.org/zh-CN/docs/Web/Guide/API/DOM/The_structured_clone_algorithm


### 浏览器使用了结构化克隆的相关底层特性
- 目前还没有直接调用结构化克隆的方法


### 结构化克隆的不足: 
- ``Error``和``Function``以及 ``DOM 节点``对象不能被结构化克隆算法复制, 会抛出DATA_CLONE_ERR异常

- 属性描述符, setter, getter不会被复制

- 原型链上的属性不会被跟踪和复制

注: symbols不会被复制

### 1. window history api

history.pushState() 和 history.replaceState() 都会给它们的第一个参数做一个结构化克隆！需要注意的是，此方法是同步的，因为对浏览器历史记录进行操作的速度不是很快，假如频繁调用这个方法，将会导致浏览器卡死。

```js
const structuredClone = obj => {
    const oldState = history.state
    history.replaceState(obj, null)
    const clonedObj = history.state
    history.replaceState(oldState, null)
    return clonedObj
}
```

### 2. postMessage

https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage

```js
otherWindow.postMessage(message, targetOrigin, [transfer]);
```

message
将要发送到其他 window的数据。它将会被结构化克隆算法序列化。这意味着你可以不受什么限制的将数据对象安全的传送给目标窗口而无需自己序列化。


### 3. WebWorkers

https://developer.mozilla.org/zh-CN/docs/Web/API/Worker/postMessage

```js
const worker = new WebWork('worker.js')

worker.postMessage()
```

Worker 接口的 postMessage()方法向worker的内部作用域发送一个消息。这接受单个参数，这是要发送给worker的数据。数据可以是由结构化克隆算法处理的任何值或JavaScript对象，其包括循环引用。

### 4. IndexedDB_API

https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API