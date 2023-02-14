## 概念

- 容器
  - __webpack_init_sharing__ : 用于初始化共享作用域, `await __webpack_init_sharing__('default')`
  - __webpack_share_scopes__ : 共享模块对象, `await container.init(__webpack_share_scopes__.default`
  
- 构建