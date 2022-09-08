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

##  响应式数据的判断:
    isRef:检查一个值是否为一个ref对象
    isReactive:检查一个对象是否是由reactive创建的响应式代理
    isReadonly:检查一个对象是否由readonly创建的只读代理
    isProxy:检查一个对象是否由reactive或者readonly方法创建的代理