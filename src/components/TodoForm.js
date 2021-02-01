import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import propTypes from 'prop-types';

function TodoForm ({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false
    });

    const handleInputChange = (event) => {
        setTodo({
            ...todo,
            task: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuid() });
            // reset the task input
            setTodo({ ...todo, task: ""});
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="task"
                type="text"
                value={todo.task}
                onChange={handleInputChange}
            />
            <button type="submit">submit</button>
        </form>
    );

}

TodoForm.propTypes = {
    addTodo: propTypes.func.isRequired 
};

export default TodoForm;