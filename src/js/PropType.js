import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

class Grandfather extends React.Component {

    // static propTypes = {
    //     num1:propTypes.string, //num1 要么没值 要么就是 string类型
    //     num2:PropTypes.number.isRequired //
    // }

    static childContextTypes = {
        color: PropTypes.string.isRequired
    }

    getChildContext() {
        return {
            color: 'red'
        }
    }

    render() {
        return (
            <Father></Father>
        )
    }
}

    //儿子组件
    class Child extends React.Component {
    //类型限制，静态属性名字固定
    static contextTypes = {
        color: PropTypes.string
    }

    render() {
        return (
            <h1 style={{ color: this.context.color }}>爷爷告诉文字是红色的</h1>
        )
    }
}


//父亲
class Father extends React.Component {
    render(){
        return (
            <Child></Child>
        )
    }
}

// constructor(props){
//     super(props)
//     this.state={
//         val:'哈哈'
//     }
// }

// render(){
//     return (
//         <div>
//             {/* 只要出现一个value值 就表示是一个受控组件 */}
//             <input type="text" value={this.state.val} onChange={(e) => { this.ml_txtChange(e) }} />
//         </div>
//     )
// }

// ml_txtChange(e){
//     console.info(e.target.value);
//     if (e.target.value.length > 10) {
//         alert('多了')
//     }
//     this.setState({
//         val: e.target.value
//     })
// }
    


ReactDOM.render(<Counter count={0} ></Counter>, document.getElementById('app'))

