# watch-example

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


## watch函数
    与Vue2.x中watch配置功能一致
    两个小坑:
        监视reactive定义的响应式数据时,oldValue无法正确获取,强制开启了深度监视(deep配置失效)
        监视reactive定义的响应式数据中的某个属性时:deep配置有效