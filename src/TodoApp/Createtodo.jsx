import React from 'react'


const Createtodo=()=> {
  return (
    <div id ={style.Createtodo}>
        <form onSubmit ={Createtodo}>
            <h2>Create todo</h2>
            <input type ="text" placeholder="todo....." value={todo} onChange={handleTodo}/>
            <br/>
            <button/>

        </form>

    </div>
  )
}

export default Createtodo