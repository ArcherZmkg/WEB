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

## 配置项props
    功能:让组件接收外部传过来的数据
        (1).传递数据:
            <Demo name="xxx"/>
        (2).接收数据:
            第一种方式(只接收):
                props:['name']
            第二种方式(限制类型):
                props:{
                    name:String
                }
            第三种方式(限制类型、限制必要性、指定默认值):
                props:{
                    name:{
                        type:String,
                        default:'',     //默认值
                        required:true   //必要性

                    }
                }
    备注:props是只读的,Vue底层会监测你对props的修改,如果进行了修改,就会发出警告,若业务需求确实需要修改,那么请复制props的内容到data中一份,然后去修改data中的数据


