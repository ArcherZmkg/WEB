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


## watchEffect函数
    watch的套路是:既要指明监视的属性,也要指明监视的回调。
    watchEffect的套路是:不指明监视哪个属性,监视的回调中用到哪个属性,那就监视哪个属性。
    watchEffect有点像computed:
        但computed注重的计算出来的值(回调函数的返回值),所以必须要写返回值.
        而watchEffect更注重的是过程(回调函数的函数体),所以不用写返回值。
    watchEffect(()=>{
        const x1 = sum.value
        //  此处sum.value的值只要发生变化就能被watchEffect监视到,因为在watchEffect的回调函数中用到了sum.value
    })