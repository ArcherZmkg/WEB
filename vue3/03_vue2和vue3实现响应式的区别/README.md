## Vue2
Vue.set(this.obj,'key',value);  新增一个对象属性<br>
Vue.delete(this.obj,'key');     删除一个对象属性
## vue2.x的响应式
    
    实现原理:
        对象类型:通过Object.defineProperty()对属性的读取,修改进行拦截(数据劫持)。
        数组类型:通过重写更新数组的一系列方法来实现拦截(对数组的变更方法(如push、unshift...)进行了包裹)。
    存在问题:
        新增属性、删除属性、界面不会更新
        直接通过下表修改数组,界面不会自动更新

## vue3.0的响应式
    实现原理:
        通过Proxy(代理):拦截对象中任意属性的变化,包括:属性值的读写、属性的添加、属性的删除等。
        通过Reflect(反射):对源对象的属性进行操作。
        MDN文档中描述的Proxy与Reflect:
            Proxy:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy<br>
            
            Reflect:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect
        
        new Proxy(person,{
            //  拦截读取属性值
            get(target,propName){
                return Reflect.get(target,propName)
            },
            //  拦截设置属性值或添加新属性
            set(target,propName,value){
                Reflect.set(target,propName,value)
            },
            //  拦截删除属性
            deleteProperty(target,propName){
                return Reflect.deleteProperty(target,propName)
            },
            
        })