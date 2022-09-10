import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import TodoList from './components/TodoList';
import Contact from './components/contact';

function App() {

  return (
    
    <div className="App">
   
      <Routes>
        <Route path="/" element={<TodoList/>} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      
      
    </div>
  );
}



export default App;

