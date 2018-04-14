import React from 'react'
import ReactDOM from 'react-dom'

import PropTypes from 'prop-types'

class Brother1 extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div>
                <button onClick={this.props.refresh}>更新兄弟组件</button>
            </div>
        )
    }
}

class Brother2 extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div>
                {this.props.text || '兄弟组件未更新'}
            </div>
        )
    }
}

class Parent extends React.Component {
    constructor(props){
        super(props)
        this.state={}
    }

    render(){
        return(
            <div>
                <h2>兄弟组件沟通</h2>
                <Brother1 refresh={this.refresh()}></Brother1>
                <Brother2 text={this.state.text}></Brother2>
            </div>
        )
    }

    refresh(){
        return(e)=>{
            this.setState({
                text:"兄弟组件沟通成功了！"
            })
        }
    }
}
ReactDOM.render(<Parent count={0} ></Parent>, document.getElementById('app'))

