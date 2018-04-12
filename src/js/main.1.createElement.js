//1. 导入 react
import React from 'react'
import ReactDOM from 'react-dom'

//2. 创建组件  --> react元素
// 参数1: 元素的类型  
// 参数2: 元素的属性
// 参数3: 子节点
var wel =  React.createElement('div',{
  title:'哈哈'
},'hello word');

//3. 渲染组件  --> react-dom
// 参数1: 要渲染的组件  what
// 参数2: 渲染到哪里    where
ReactDOM.render(wel,document.getElementById('app'));