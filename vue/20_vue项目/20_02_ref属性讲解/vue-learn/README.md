# 笔记

## 脚手架文件结构:
node_modules
public
    favicon.ico:页签图标
    index.html:主页面
src
    assets:存放静态资源
        logo.png
    component:存放组件
        HelloWorld.vue
    App.vue:汇总所有文件
    main.js:入口文件
.gitignore:git版本管制忽略的配置
babel.config.js:babel配置文件(ES6转ES5)
package.json:应用包配置文件
README.md:应用描述文件
package-lock.json:包版本控制文件

## ref属性
    1.被用来给元素或子组件注册引用信息(id的替代者)
    2.应用在html标签上获取的是真实DOM元素,应用在组件标签上是组件实例对象(vuecomponent)
    3.使用方式
        打标识:<h1 ref="xxx">.....</h1> 或<School       ref="xxx"></School>
        获取: this.refs.xxx

