import React from 'react';

function TodoList({ todos, setTodos, setEditTodo }) {
    const handleDelete = ({ id }) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (todo) => {
        setEditTodo(todo);
    };

    const handleUpdate = (id, newTitle) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, title: newTitle };
                }
                return todo;
            })
        );
        setEditTodo(null);
    };

    return (
        <>
            {todos.map((todo) => (
                <li className="list-item" key={todo.id}>
                    <input
                        type="text"
                        value={todo.title}
                        className="list"
                        onChange={(event) => handleUpdate(todo.id, event.target.value)}
                    />
                    <div>

                        <button className="button-edit task-button" onClick={() => handleEdit(todo)}>
                            <i className="fa fa-edit"></i>
                        </button>

                        <button className="button-delete task-button" onClick={() => handleDelete(todo)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </>
    );
}

export default TodoList;
