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

##  toRaw 与 markRaw
    toRaw:
        作用：将一个由reactive(只能是reactive,ref不行)生成的响应式对象转为普通对象
        使用场景:用于读取响应式对象对应的普通对象，对这个普通对象的所有操作，不会引起页面更新
    markRaw:
        作用：标记一个对象，使其永远不会再成为响应式对象。
        应用场景：
            1.有些值不应被设置为响应式的，例如复杂的第三方类库等。
            2.当渲染具有不可变数据源的大列表时，跳过响应式转换可以提高性能。
