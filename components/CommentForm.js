import React from 'react'

export default class CommentForm extends React.Component {
    render(){
        return(
            <div>
                <h1>评论列表表单</h1>
                <div>
                    评论的人:<input type="text" id='ipt1' />
                </div>
                <div>
                    评论内容:<textarea name="" id="ipt2" cols="30" rows="10"></textarea>
                    <button onClick={()=>{this.ml_submitClick() } }>提交</button>
                </div>
            </div>
        )
    }

    //点击提交
    ml_submitClick(){
        var name  = document.querySelector('ipt1').value
        var conetent = document.querySelector('ipt2').value

        document.getElementById('ipt1').value = '',
        document.getElementById('ipt2').value = '',

        this.props.callback(name,conetent);
    }
}