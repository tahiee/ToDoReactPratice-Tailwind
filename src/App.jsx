import { useState } from "react";
import "./index.css"

function App() {
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);

  function addTodo(event) {
    event.preventDefault();
    console.log(text);
    todo.push(text)
    setTodo([...todo]);
    console.log(todo);
    setText("")
  }

  function deleteTodo(index){
    console.log(index);
    todo.splice(index , 1);
    setTodo([...todo]);
  }
  function editTodo(index){
    // console.log(index);
    let newVal = prompt('enter new value');
    todo.splice(index , 1 , newVal);
    setTodo([...todo]);
  }
  return (
    <>
    <nav className=" flex items-center justify-center item-center mt-6" >
      <h1 className="text-lime-400 ml-2">Todo App</h1>
      <form className="flex justify-center item-center" onSubmit={addTodo}>
        <input className="text-center border-2 border-rose-500 ml-2" type="text" placeholder="Enter text" onChange={(e) => setText(e.target.value)} value={text} />
        <button className='h-10 w-20 border-red-400 text-lime-400 border-4 border-indigo-900/100 ml-2' type="submit">addTodo</button>
      </form>
        </nav>
      <ul className="mt-5">
        {todo.map((item, index) => {
          return <li className="text-center mt-3" key={index}>{item}
            <button className='border-red-800 border-4 border-indigo-500/50 ml-2 ' onClick={()=>deleteTodo(index)}> delete</button>
            <button className='border-red-800 border-4 border-indigo-500/50 ml-2'  onClick={()=>editTodo(index)}>edit</button>
          </li>
        })}
      </ul>
    </>
  )
}

export default App
