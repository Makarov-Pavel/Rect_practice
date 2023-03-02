import React from "react";
import { useState } from "react";
import './Todo.css'

function Todo(props){
    const [todo, setTodo] = useState([])
    const [count, setCount] = useState(0)

    function ClickOnAddBtn(){
        let inputValue = document.querySelector('.newTodoTitle').value
        if(inputValue.length>0){
            let createNewTodoTitle = inputValue
            setTodo((prev => [...prev, {title: createNewTodoTitle, id:count}]))
            setCount(prev => prev + 1)
            todo.map(el => console.log(el.title))
            document.querySelector('.newTodoTitle').value = ''
            
        }
    }

    

    return(
        <div className="todoContainer">
            
            <div className="createNewTodo">
                <input type='text' placeholder="Новая задача" className="newTodoTitle"></input>
                <button className="addBtn" onClick={ClickOnAddBtn} >ДОБАВИТЬ</button>
            </div>
            
            {todo[0] === undefined && <span className="emptyList">Список дел пока что пуст</span>}
            
            <ul className="todoList">
                {todo.map(el => <li key={el.id} className='todoItem'>
                    <p className="todoTitle">{el.title}</p>
                    <button onClick={()=>setTodo(todo.filter(i=>el.id !==i.id))} ><img className="todoCheckbox" src='https://img.icons8.com/doodle/512/checked-checkbox.png' alt=""></img> </button>
                </li>)}
            </ul>
        </div>
    )
}

export default Todo

