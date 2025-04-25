import '../App.css';
import sortLogo from '../icons/sort.png';
import addLogo from '../icons/add.png';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {v4 as uuidv4} from 'uuid'
import { addTodo,sortTodo } from '../redux/Todo';
import { useEffect } from 'react';
import logoChecked from '../icons/checked.png'; 
import logoUnchecked from '../icons/unchecked.png';
const AddTask = ({todos}) => {
    const dispatch=useDispatch()

    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [checkedCounter, setCheckedCounter] = useState(todos.filter(el => el.checked === true).length);
    const [uncheckedCounter, setUncheckedCounter] = useState(todos.filter(el => el.checked === false).length);
   
    useEffect(() => {
        setCheckedCounter(todos.filter(el => el.checked === true).length);
        setUncheckedCounter(todos.filter(el => el.checked === false).length);
    }, [todos]);

    const handleAdd = () => {
        const newTask = {};
        if (taskName === '' || description === '') {
            alert("Les champs sont vides");
        } else {
            newTask.id=uuidv4();
            newTask.taskName= taskName;
            newTask.description=description;
            newTask.checked=false;
            dispatch(addTodo(newTask))
            setTaskName('')
            setDescription('')
        }
    }
    const handlesort=()=>{
        dispatch(sortTodo())
    }


    return (
        <div className='inputForm'>
            <output className="outputFormTaskName">Task:</output>
            <input className="inputFormTaskName" value={taskName} onChange={(e) => { setTaskName(e.target.value); console.log(e.target.value); }}></input>
            <output className="outputFormDescription">Description:</output>
            <input className="inputFormDescription" value={description} onChange={(e) => setDescription(e.target.value)}></input>

            <div className="outputFormTask">
                <img style={{ width: "35px", height: "35px", margin: "10px" }} src={logoChecked} alt='' />
                <output className="checkedCounter">{checkedCounter}</output>
            </div>
            <div className="outputFormTask">
                <img style={{ width: "35px", height: "35px", margin: "10px" }} src={logoUnchecked} alt='' />
                <output className="uncheckedCounter">{uncheckedCounter}</output>
            </div>
            <div className="buttons">
                <img className="addButton" onClick={handleAdd} src={addLogo} alt='' />
                <img className="sortButton" onClick={handlesort} src={sortLogo} alt='' />
            </div>
        </div>
    );
}
export default AddTask;