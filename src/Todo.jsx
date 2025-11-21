import React, { useState } from 'react'

function Todo() {

    const [newTodo, setNewTodo] = useState('');
    const [todos, seTodos] = useState([]); // <-- start with an empty array

    const handleSubmit = (e) => {
        e.preventDefault();

        if (newTodo.trim() === '') return;

        seTodos([...todos, { text: newTodo, is_completed: false }]);
        setNewTodo('');

        
    }
    
    const handleDelete = (index) => {

        const newTodos = [...todos];
        console.log('delete', index)
        console.log('delete', todos[index])
        newTodos[index].is_completed = !newTodos[index].is_completed;

        seTodos(newTodos);

    } 

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h1>Todo App</h1>
                <label>Enter New Todo : </label><br />
                <input
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <br /><br />
                <button type="submit">Submit</button>
            </form>

            <h3>List</h3>

            {todos.map((todo, index) => (
                <li 
                 key={index}
                 style={{ textDecoration : todo.is_completed ? 'line-through' : ' '}}
                >
                    {todo.text}

                    <button onClick={() => handleDelete(index)}> 
                        
                        {todo.is_completed ?   'UnDo' : 'Done'}
                        </button>
                </li>
            ))}

            
        </>
    );
}

export default Todo;
