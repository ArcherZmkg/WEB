# hook-test

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

## toRef
    作用:创建一个ref对象,其value值指向另一个对象中的某个属性。
    语法:const name = toRef(person,'name')
    应用:要将响应式对象中的某个属性单独提供给外部使用时。
    扩展:toRefs和toRef功能一致，但可以批量创建多个ref对象，语法:toRefs(person)
