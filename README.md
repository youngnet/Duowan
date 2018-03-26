## 这是一个利用 react全家桶搭建的移动端多玩BBS项目

- src文件夹结构
│  index.js     => 入口文件
│
├─api
│      index.js  
│
├─common        => 公共文件目录
│  ├─css
│  │      public.less
│  │      reset.min.css
│  │
│  ├─img
│  └─js
│          index.js
│
├─components    => 公用组件
├─router        => 页面级组件
└─store         => redux目录
    │  action-types.js
    │  index.js
    │
    ├─actions   => action状态管理
    │      index.js
    │
    └─reducers  => 修改state
            index.js