import React from 'react';

function Todo({ todos, handleDelete, handleEdit }) {
  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input type="checkbox" name="tododata" />
          {todo.text}
          <button onClick={() => handleEdit(todo.id)}>Edit</button>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Todo;
