
import React from 'react'

// es5 : moduele.expors
/// epors def exprro
import Comment from './Comment'
import CommentForm from './CommentForm'
// import '../src/css/demo.css'

export default class CommentList extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      list: [
        { id: 1, name: "张三", content: "沙发.." },
        { id: 2, name: "李四", content: "板凳.." },
        { id: 3, name: "王五", content: "这个.." },
      ]
    }
  }

  ml_createElement() {
    //属性扩散
    return this.state.list.map(item =>
      //  (<Comment key={item.id} name = {item.name} content= {item.content}></Comment>)
      (<Comment key={item.id} {...item}></Comment>)
    )

    //  return  this.state.list.map(function (item) {
    //   return (<Comment key={item.id} name = {item.name} content= {item.content}></Comment>)
    // })
  }

  ml_callBack(name, content) {
    var id = this.state.list.length + 1

    this.state.list.unshift({ id, name, content });

    this.setState({
      list: this.state.list
    })
  }

  render() {
    return (
      <div>
        <CommentForm callback={(name, content) => { this.ml_callBack(name, content) }}></CommentForm>
        <ul>
          {
            this.ml_createElement()
          }
        </ul>
      </div>
    )
  }
}
