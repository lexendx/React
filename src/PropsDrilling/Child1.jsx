import React from 'react'
import Child2 from './Child2'

const Child1=(x)=> {
    //console.log(x)://{data:[{},{}]}
    //console.log(x.data)://[{},{}]
  return (
    <div>
        <Child2 users ={x.data}></Child2>
    </div>
  )
}

export default Child1