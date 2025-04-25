import { useSelector } from 'react-redux';
import '../App.css';
import Task from './Task';

const TaskList = () => {
    const todos = useSelector(state=> state.todos)
    return (
        <div className='displayZone'>
            {todos.map((element) => {
                return (
                    <Task key={element.id} task={element} />
                );
            })}
        </div >
    );
}

export default TaskList;