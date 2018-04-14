import React from 'react'
import ReactDOM from 'react-dom'

class Counter extends React.Component {

    constructor(props){
        super(props)

        this.state={
            val:'哈哈'
        }
    }

    render(){
        return (
            <div>
                {/* 只要出现一个value值 就表示是一个受控组件 */}
                <input type="text" value={this.state.val} onChange={ (e)=>{ this.ml_txtChange(e) } } />
            </div>
        )
    }

    ml_txtChange(e){
        console.info(e.target.value);
        if(e.target.value.length > 10){
            alert('多了')        
        }
        this.setState({
            val:e.target.value
        })
    }
    

}
ReactDOM.render(<Counter count={0} ></Counter>, document.getElementById('app'))


