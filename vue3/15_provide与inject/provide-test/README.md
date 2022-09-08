# provide-test

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

## provide和inject
    作用:实现子孙组件间通信
    套路:父组件有一个provide选项来提供数据，后代组件有一个inject选项来开始使用这些数据
            