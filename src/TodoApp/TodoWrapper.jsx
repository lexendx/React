import React, { useState } from 'react'
import Createtodo from './Createtodo';
import Alltodo from './Alltodo';

const TodoWrapper=()=> {
let[todo, setTodo]=useState("");
let handleTodo=(e)=>{
    setTodo(e.target.value);
};
let createTodo=(e)=>{
    e.preventDefault();
    console.log(todo)
    if(todo.trim()!==""){
        let newTodo={
            text:todo,
            id:Date.now(),
        };
        console.log(newTodo);
    }else{
        alert("empty todo");
    };
};

  return (
    <div>
<Createtodo todo={todo} handleTodo={handleTodo} createTodo={createTodo}/>
<Alltodo/>

    </div>
  );
};

export default TodoWrapper;