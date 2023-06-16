
import { useState } from 'react';
import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

function App() {
  const [todos,setTodo] = useState<Todo[]>([]);
  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodo((prevTodo)=>{
      return prevTodo.concat(newTodo);
    })
  }
  return (
    <div>
      <NewTodo onAdd={addTodoHandler}/>
      <Todos items = {todos}/>
    </div>
  );
}

export default App;
