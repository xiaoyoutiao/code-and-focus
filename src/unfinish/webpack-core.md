## 核心概念

- module模块
- chunk

多个module可以被合并成一个chunk

### 编译对象 Compilation

- options : webpack配置对象
- modules : 单次编译过程中产出的所有模块对象
- assets : 单次编译产出的资源文件对象
- fileDependencies : 单次打包涉及到的文件数组，主要是为了实现watch模式下监听文件的变化，文件发生变化后会重新编译

### 模块对象 module
- id: moduleId : 模块的绝对路径,
- names: 数组, names设计成数组是因为代表的是该模块属于哪个代码块，模块可能属于多个代码块
- dependencies : 数组, 该模块依赖的其他模块
- _source : 该模块的代码信息

## 插件系统

在编译过程中调用各个阶段的hook函数, 实现外部插件对编译状态的监听和代码处理

- tabable : 使用tabable库实现生命周期函数监听和调用