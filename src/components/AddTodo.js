import React, { useState } from "react";
import TodoList from "./TodoList";

function AddTodo({todo, setTodo}){

    const [value, setValue] = useState(' ')

    function saveTodo()  {
        setTodo(
            [...todo, {
                id: Math.random().toString(36).substring(2, 9),
                title: value,
                status: true
            }]
        )
        setValue(' ')
    }

    
    return(
        <div>
            <input placeholder='Enter smth' value={value} onChange={ (e)=>setValue(e.target.value)} />
            <button onClick={saveTodo}>Save</button>
        </div>
    )
}
export default AddTodo