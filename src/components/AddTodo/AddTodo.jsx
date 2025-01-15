

 function AddTodo({handleInputChange,handleClick,value}) {
  return (
    <div>
       <input  
        type="text"
        placeholder="Add a Todo..."
         onChange={handleInputChange}
        value={value}
       />
       <button onClick={handleClick}>Add</button>
    </div>

  )
}

 export default AddTodo;
