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


##  ref函数
作用:定义一个响应式的数据
语法:const xxx = ref(initValue)
    创建一个包含响应式数据的引用对象(reference对象)
    JS中操作数据:xxx.value
    模板中读取数据:不需要value,直接<div>{{xxx}}</div>
备注:
    接收的数据可以是:基本类型,也可以是对象类型
    基本类型的数据:响应式依然是依靠Object.defineProperty()的get和set完成的
    对象类型的数据:内部求助了Vue3.0中的一个新函数-----reactive函数