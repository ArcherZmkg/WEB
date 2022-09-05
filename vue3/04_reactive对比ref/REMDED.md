## reactive对比ref
-从定义数据角度比:
    ref用来定义: **基本类型数据**。
    reactive用来定义: **对象(或数组类型数据)**。
    备注:ref也可以用来定义**对象(或数组)类型数据**,它内部会自动通过reactive转为**代理对象**。   

-从原理角度对比:
    ref通过**Object.defineProperty()**的**get**与**set**来实现响应式(数据劫持)。
    reactive通过使用**Proxy**来实现响应式(数据劫持),并通过Reflect操作**源对象**内部的数据。
-从使用角度对比:
    ref定义的数据:操作数据需要.value,读取数据时模板中直接读取不需要.value。
    reactive定义的数据:操作数据与读取数据**均不需要**.value。

