import React, { useState } from 'react';

function TodoForm () {
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

    return (
        <form>
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

export default TodoForm;