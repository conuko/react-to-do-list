/* eslint-disable react/prop-types */
import React from 'react'
import Todo from './Todo'

function TodoList({ todos }) {
    return(
        <ul>
            {todos.map(todo =>(
                <Todo 
                key={todo.id}
               j todo={todo}
        />
            ))}
        </ul>
    
    );
}

export default TodoList










