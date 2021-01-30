import React, { useState } from 'react';
import uuid from 'uuid';
import PropTypes from 'prop-types';

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
            addTodo({ ...todo, id: uuid.v4() });
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
            <button type="submit"/>
        </form>
    );

}

TodoForm.PropTypes = {
    addTodo: PropTypes.func.isRequired 
};

export default TodoForm;