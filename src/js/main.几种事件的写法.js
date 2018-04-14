import React from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component {

    //默认属性 生命周期函数里面 第一个执行的 执行一次
    static defaultProps = {
        count: 0
    }


    constructor(props) {
        super(props)
        //初始化状态
        this.state = {
            initCount: props.count,
        }
    }

    // componentWillMount() {
    //     console.info('componentWillMount')
    // }

    // componentDidMount() {
    //     console.info('componentDidMount', document.querySelector('#btn'))
    //     this.setState({
    //         initCount: 30
    //     })
    // }

    // 相同点：1可以进行网络请求  
    //不同点: 1.前后顺序  2.获取dom元素 3.setState()

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('shouldComponentUpdate')
    //     console.log(nextState.initCount)
    //     return this.state.initCount > 5 ? false : true;
    // }

   componentDidMount(){
       console.log('3333')
       
       this._btn.addEventListener('click',function(){
           console.log('打豆豆')
       })
   }


    //渲染，第一次:挂载  第2+次:更新
    render() {
        // console.log('render---------')
        return (
            <div>
                {
                    this.state.initCount > 5 ?
                        (<h1>豆豆被打死了</h1>) :
                        (<ChildComponent count={this.state.initCount}></ChildComponent>)
                }
                <ChildComponent count={this.state.initCount}></ChildComponent>
                {/* 第一种绑定时间的方法  主流方法！*/}
                <button id='btn' onClick={ this.ml_clickCounter }>开始打豆豆</button>
                {/* 方法二 */}
                {/* <button  onClick={function(){
                    console.log('打豆豆')
                }}>开始打豆豆</button> */}
                {/* 方法三  主流方法二*/}
                {/* <button  onClick={(e) => { this.ml_clickCounter(e) }}>开始打豆豆</button> */}
                {/* 了解就行 */}
                {/* <button ref={(btn)=>{this._btn=btn}}>开始打豆豆</button> */}
            </div>
        )
    }


    //开始到豆豆的函数(方法API)
    ml_clickCounter() {
        //修改state
        //setState是异步的,所以不能直接在setState 设置之后获取 state的值
        //回调函数 这种方式最常用
        this.setState({
            initCount: this.state.initCount + 1
        },function(){
            console.warn('this.state.initCount:',this.state.initCount);
        })

        // this.setState(function(PreState,props) {
        //     //在这里可以处理一些预前逻辑
        //     return {
        //         initCount : PreState.initCount + 1
        //     }
        // })
    } 
}

class ChildComponent extends React.Component {
    componentWillUnmount() {
        console.warn('子组件销毁了....');
    }

    render() {
        console.log('子组件-render');
        return (
            <h1>打豆豆的次数:{this.props.count}</h1>
        )
    }
}
ReactDOM.render(<Counter count={0} ></Counter>, document.getElementById('app'))

//第一种：onClick 驼峰