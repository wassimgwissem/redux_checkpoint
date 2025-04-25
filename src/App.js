import './App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { useSelector } from 'react-redux';


function App() {
 const todos= useSelector((state)=>state.todos)
  return (

    <div className="App">

      <AddTask todos={todos}/>
      <TaskList />

    </div>
  );
}
export default App;
