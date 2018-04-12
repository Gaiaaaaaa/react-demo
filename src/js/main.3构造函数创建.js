//1. 导入 react
import React from 'react'
import ReactDOM from 'react-dom'

//创建组件  (class创建组件)
// class创建组件必要要有render方法
//必须要集成React的根组件
//return
//calss里面获取值:this.props
//class创建的组建是有状态的组建 state （存值，传值，渲染组件）
//取值 this.state.age
//设置 this.setSate() this.state.age = 123;不参加渲染
class Welcome extends React.Component {

    //在calss创建组建的时候:推荐直接把props参数拿过来
    constructor(props){
        super(props)
        //初始化状态 state --对象
        this.state = {
            xage:props.age,
            xname:props.name
        }
    }
    render() {
        return (<div>
        <h1>年龄:{this.state.xage}</h1>
        <h1>姓名:{this.state.xname}</h1>
        </div>
        )

    }
}

ReactDOM.render(<Welcome age={26} name='汪亢'></Welcome>, document.getElementById('app'));

