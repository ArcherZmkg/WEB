# vue3-test

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


##  reactive函数
作用:定义一个对象类型的响应式数据(基本类型不要使用他,要用ref函数)
语法:const代理对象=reactive(源对象)接收一个对象(或数组),返回一个代理对象(Proxy的实例对象，简称proxy对象)
reactive定义的响应式数据是"深层次的"
内部基于ES6的Proxy实现,通过代理对象操作源内部数据进行操作

