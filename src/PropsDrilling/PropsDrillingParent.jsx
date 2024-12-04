import React from 'react'
import Child1 from './Child1'

function PropsDrillingParent() {
    let user=[
        {id: 1, ename:"john"},
        {id: 2, ename: "Doe"}
    ];
  return (
    <div>
        <Child1 data={user} ></Child1>
    </div>
  )
}

export default PropsDrillingParent