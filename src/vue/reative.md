### 变化侦测
``Observer``: 可观测对象

被观测的对象会被附加一个``__ob__``属性， 表示它已经被转化为一个响应式对象了。

```js
//__ob__
{
    // Dep: 依赖管理器
    dep: {
        id: Number,
        // subs: 依赖管理数组
        subs: Watcher[]
    },
    // value: 对象的数据
    value: {}
}
```

使用Object.defineProperty并在对象的getter和setter中进行对应的处理

在getter中收集依赖，在setter中通知依赖更新

### 依赖收集
```js
  /**
   * Evaluate the getter, and re-collect dependencies.
   * 依赖收集, 在构造函数中解析表达式或者函数, 赋值给 this.getter,
   * 然后调用this.get, 指定vm调用getter,
   * 调用vue实例响应式对象上的get收集依赖, 将watcher添加到dep的deps中
   */
export default class Watcher {
constructor (vm,expOrFn,cb) {
    this.vm = vm;
    this.cb = cb;
    this.getter = parsePath(expOrFn)
    this.value = this.get()
}
get () {
    window.target = this;
    const vm = this.vm
    let value = this.getter.call(vm, vm)
    window.target = undefined;
    return value
}
update () {
    const oldValue = this.value
    this.value = this.get()
    this.cb.call(this.vm, this.value, oldValue)
}
}

```


### 视图更新
- _watcher: Watcher
    
    vue组件渲染依赖对象, 用于调用vm._render()方法重新渲染视图

组件的_watcher中的getter是updateComponent函数, 该函数调用``vm._update``方法``vm._update``进行更新视图

``
vm._update(vm._vnode, false);
Vue.prototype.__patch__ = patch;
``

```js
Vue.prototype.$forceUpdate = function () {
    var vm = this
    
    if (vm._watcher) {
      vm._watcher.update()
    }
  }
```

