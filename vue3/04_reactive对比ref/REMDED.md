## reactive 对比 ref

<div>
    <div>
        <h2>从定义数据角度比: </h2>
        <br>
        <span>ref用来定义: 基本类型数据。</span>
        <span>reactive用来定义: 对象(或数组类型数据)。</span>
        <span>备注:ref也可以用来定义对象(或数组)类型数据,它内部会自动通过reactive转为代理对象。</span>
    </div>
    <hr>
    <div>
        <h2>从原理角度对比:</h2>
        <br>
        <span> ref 通过 Object.defineProperty()的 get 与 set 来实现响应式(数据劫持)。</span>
        <span>reactive 通过使用 Proxy 来实现响应式(数据劫持),并通过 Reflect 操作源对象内部的数据。</span>
    </div>
    <div>
        <h2>从使用角度对比:</h2>
        <br>
        <span>ref 定义的数据:操作数据需要.value,读取数据时模板中直接读取不需要.value。</span>
        <span>reactive 定义的数据:操作数据与读取数据均不需要 value。</span>
    </div>
</div>