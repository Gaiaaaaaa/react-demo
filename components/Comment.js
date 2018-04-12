
import React from 'react'

// props -> id name content
// props == 
//{id:id ,name:name content}
// {id,name,content}

const styles = {

  liStyle:{
    border:'1px solid #ccc',
    margin:10,
  },
  pStyle:{
    color:'blue'
  }
}

export default function  Comment({name,content}) {

  return (
    <li style={ styles.liStyle }>
      <h3 style={  { color:'red' }   }>{name}</h3>
      <p  style={  styles.pStyle   }>{content}</p>
    </li>
  )
  
}

