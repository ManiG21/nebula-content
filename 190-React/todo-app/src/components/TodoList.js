import React, {useState} from 'react';
import  {Link} from "react-router-dom"
import TodoForm from './TodoForm';
import Todos from './Todos';

export default function TodoList(){
  const [todos, setTodos] = useState([]);
  const addTodo = todo => {
    const newTodos = [todo, ...todos];
  
    setTodos(newTodos)
    console.log('NewTodo:', todo, `\n`, 'OldTodos:', ...todos)
  }
  const completeTodo = id => {
    let updatedTodos = todos.map(todo=> {
      if(todo.id === id){
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    })
    setTodos(updatedTodos);
  }
  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);
  
    setTodos(removeArr);
  }

  const updateTodo = (todoId, newValue) => {
    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  }
    return(
        <div>
          <h1>What needs to be done today?</h1>
          <Link to="/contact"> <button className="todo-button">Contact</button></Link>
          <TodoForm onSubmit={addTodo} />
          <Todos todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
        </div>
      )
}
