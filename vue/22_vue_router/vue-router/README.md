# vue-router

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Vue-Router的两种工作模式
1.对于一个url来说,什么是hash值  ----- #及其后面的内容就是hash值
2.hash值并不会包含在Http请求中,即hash值不会带给服务器
3.hash模式:
    1.地址中永远带着#号，不美观
    2.若以后将地址通过第三方手机app分享，app校验严格会被标记不 合法
    3.兼容性较好
4.history模式:
    1.地址干净、美观。
    2.兼容性和hash模式相比略差。
    3.应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题
