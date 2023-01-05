import React, { useState } from "react";

function TodoList({todo, setTodo}){

    const [edit, setEdit]= useState(null)
    const [value, setValue] = useState(' ')

    function deleteTodo(id){
        let newTodo = [...todo].filter(item => item.id!=id)
        setTodo(newTodo)
    }

    function doneTodo(id){
        let newTodo = [...todo].filter(item => {
            if(item.id==id){
                item.status = !item.status
            }
            return item
        })
        setTodo(newTodo)
    }

    function editTodo(id, title){
        setEdit(id)
        setValue(title)
    }

    function saveTodo(id){
        let newTodo = [... todo].map(item =>{
            if(item.id==id){
                item.title=value
            }
            return item
        })
        setTodo(newTodo)
        setEdit(null)
    }

    return (
        <div>
            
            {
                todo.map( item=>(
                    <div key={item.id}>
                        {
                            edit==item.id ? 
                            <div>
                                <input onChange={ (e)=>setValue(e.target.value)} value={value} />
                                <button onClick={ ()=>saveTodo(item.id)}>save</button>
                            </div> :
                            <div>{ item.title} 
                                    <button onClick={ ()=>deleteTodo(item.id)}>Delete</button>
                                    <button onClick={ ()=>doneTodo(item.id)}>Done</button>
                                    <button onClick={ ()=>editTodo(item.id, item.title)}>Edit</button>                            
                            </div>
                        }    
                        

                    </div>
                ))
            }
        </div>
    )
}
export default TodoList