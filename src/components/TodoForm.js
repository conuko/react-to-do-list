import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import propTypes from 'prop-types';
import { Button, TextField } from '@material-ui/core';

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
            // reset the task input field after a todo is submitted:
            setTodo({ ...todo, task: ""});
        }
    }

    return (
        <form className='todo-from' onSubmit={handleSubmit}>
            <TextField
                label="Task"
                name="task"
                type="text"
                value={todo.task}
                onChange={handleInputChange}
            />
            <Button type="submit">submit</Button>
        </form>
    );

}

TodoForm.propTypes = {
    addTodo: propTypes.func.isRequired 
};

export default TodoForm;