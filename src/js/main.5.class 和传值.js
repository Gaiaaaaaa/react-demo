//1. 导入 react
import React from 'react'
import ReactDOM from 'react-dom'

//2. 创建组件  --> react元素
// 参数1: 元素的类型  
// 参数2: 元素的属性
// 参数3: 子节点

//创建组建 JSX
// var wel = (
//     // <h1 title='哈哈'>hello react</h1>
//     <h2 title="this is a react file">hello react!</h2>
// )

//使用构造函数创建组建
//1 函数名--组件的名字
//2 组件名首字母必须大写
//3 使用 按照标签的形式
//4 必须要有 return nubll /节点
//5 return 后面不能换行 推荐:return()
//6 JSX 语法要求 有且只有一个根节点
//7 在JSX语法内,不能使用//进行注释了 jsx的注释{/* */}
//8 自定义属性的时候：data-html5
//9 自带的属性：
//calss --> calssName
//for
// function Welcome(){
//   return (
//     <div>
//         {/* 注释 */}
//         <h1 data-abc='123'>hello react!</h1>
//         <h1 className="呵呵">hello hah!</h1>
//         <label htmlFor="ipt">点我啊</label>
//         <input type="text" id='ipt' />
//     </div>
//   );
// }


//组件传值
function Welcome(props){
    console.log(props)
    // 1.props 传过来是一个对象的形式 键值对
    // 2 props(对象) 是一个只读对象 不能修改 不能添加
    // 3 构造函数没有状态 state --> calss --state（存值，传值，渲染组件）
    // props.age='19'
    // 4 {} 基本上所有的类型都能塞 主要放js的表达式 变量 对象...
    return (
        <div>
            <h1>年龄:{props.age}</h1>
            <h1>姓名:{props.name}</h1>
    </div>);
    
}
//3. 渲染组件  --> react-dom
// 参数1: 要渲染的组件  what
// 参数2: 渲染到哪里    where
ReactDOM.render(<Welcome age={ 19 } name='汪亢'></Welcome>,document.getElementById('app')); 

// class Person {
//     //class类里面的构造方法
//     constructor(age,name){
//         this.age = age
//         this.name = name
//     }
// }

// class XiaoMing extends Person {
//     //类：只要有继承 extends 如果在使用 constructor，就必须调用super
//     constructor(age,name){
//         //调用super方法表示要继承来的属性和方法 相当于执行Person中的方法
//         super(age,name)
//         this.gender= '女'
//     }
// }

// let p  = new Person('18','汪亢');
// let x  = new XiaoMing('25','汪亢')
// console.log(p)
// console.log(x)