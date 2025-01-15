import AddTodo from "./components/AddTodo/AddTodo";
import Todo from "./components/todo/Todo";
import { useState } from 'react';

function App() {
   const [value, setValue] = useState('');
   const [todos, setTodos] = useState([
     { id: 1, text: 'first todo' }
   ]);

   function changeF(e) {
     console.log(e.target.value);
     setValue(e.target.value);
   }

   function handleClick() {
     if (value === "") {
       alert("Please enter a todo!");
       return;
     }
     
     // Add new todo and clear input field
     setTodos([...todos, { id: todos.length + 1, text: value }]);

     // Immediately clear the input field
     setValue(''); // Clear the input field
   }

   // Function to handle delete
   function handleDelete(id) {
     // Filter out the todo with the given id
     setTodos(todos.filter(todo => todo.id !== id));
   }

   // Function to handle edit (just for example, it will change the text of the todo)
   function handleEdit(id) {
     const newText = prompt("Edit your todo");
     if (newText) {
       setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
     }
   }

   return (
     <>
       <AddTodo
        handleInputChange={changeF} 
        handleClick={handleClick}
        value={value}
         />
       <Todo 
         todos={todos} 
         handleDelete={handleDelete} 
         handleEdit={handleEdit} 
       />
     </>
   );
}

export default App;
