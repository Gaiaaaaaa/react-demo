import React from 'react'
import ReactDOM from 'react-dom'

class ChildComponent extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            initCount:props.count,
        }
    }

    render() {
        return (
            <div>
                <h1>打豆豆的次数:{this.state.initCount}</h1>
                <button onClick={(e) => { this.ml_clickCounter(e) }}>开始打豆豆</button>
            </div>
        )
    }

    ml_clickCounter(){
        this.setState({
            initCount:this.state.initCount + 1
        })
    }
}


ReactDOM.render(<ChildComponent count={0} ></ChildComponent>, document.getElementById('app'))