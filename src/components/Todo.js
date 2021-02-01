/* eslint-disable react/prop-types */
import React from 'react';

function Todo({ todo }) {
    return(
        <div style={{dislay: 'flex'}}>
            <input type="checkbox" />
            <li
                style={{
                    color: 'white',
                    textDecoration: todo.completed ? 'line-through' : null
                }}
            >
                {todo.task}
            </li>
            <button>X</button>
        </div>

    )
}

export default Todo;