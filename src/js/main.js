import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

class Grandfather extends React.Component {
    static childContextTypes = {
        color: PropTypes.string.isRequired
    }

    //传递给孙子组件的数据
    getChildContext() {
        return {
            color: 'red'
        }
    }

    render() {
        return (
            <div>
                <Father></Father>
            </div>
        )
    }
}

//儿子组件
class Child extends React.component {
    //类型限制,静态属性名字固定 context（全局的上下文）
    static contextTypes = {
        color: PropTypes.string
    }

    render() {
        return (
            <div>
                <h1 style={{ color: this.context.color }}>爷爷告诉文字是红色的</h1>
            </div>
        )
    }
}

//爸爸组件
class Father extends React.Component {
    render() {
        return (
            <div>
                <Child></Child>
            </div>
        )
    }
}

ReactDOM.render(<Grandfather></Grandfather>, document.getElementById('app'))

