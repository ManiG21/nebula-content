import './App.css';
import EmployeeList from './components/EmployeeList/EmployeeList';
import AddEmployee from './components/AddEmployee/AddEmployee';
function App() {
  return (
    <div className="App">
      <h1> Employee App</h1>
      <AddEmployee/>
      <EmployeeList/>
    </div>
  );
}

export default App;
