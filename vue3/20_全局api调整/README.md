##  全局api调整:
    vue2                        vue3
Vue.config.xxxx              app.config.xxxx
Vue.config.productionTip     移除
Vue.component                app.component
Vue.directive                app.directive
Vue.mixin                    app.mixin
Vue.use                      app.use
Vue.prototype                app.config.globalProperties

##  其他改变

A:data选项应始终被声明为一个函数

B:过度类名的更改:
    1.vue2.x写法:
    .v-enter,
    .v-leave-to,
    .v-leave,
    .v-enter-to
    2.vue3.x写法:
    .v-enter-from,
    .v-leave-to,
    .v-leave-from,
    .v-enter-to

C:移除keyCode作为v-on的修饰符,同时也不再支持config.keyCode

D:移除v-on.native修饰符

E:移除过滤器



