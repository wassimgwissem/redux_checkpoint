// STYLING /////////
import '../App.css';
import logoChecked from '../icons/checked.png';
import logoUnchecked from '../icons/unchecked.png';
import deleteLogo from '../icons/delete.png';
import editLogo from '../icons/edit.png';

//////HOOKS AND LIBRARY //////
import { deletetodo, editTodo } from '../redux/Todo';
import { useDispatch } from 'react-redux';
import { EditText } from 'react-edit-text';
import { useState } from 'react';


const Task = ({ task }) => {
    const dispatch=useDispatch();
    const [editedTask, setEditedTask] = useState(task);

    const handledelete=()=>{
        dispatch(deletetodo(task.id))
    };
 
    const handleEditTask = () => {
        if (editedTask.taskName !== task.taskName || editedTask.description !== task.description) {

            dispatch(editTodo(editedTask))
            alert("Task updated!!!!");

        } else {
            alert("No changes!!!!");
        }
        console.log("After Edit editedTask: ", editedTask);
        console.log("After Edit Task: ", task);
    }
    const handleToggle = () => {
        const updatedTask = { ...editedTask, checked: !editedTask.checked };
        setEditedTask(updatedTask);
        dispatch(editTodo(updatedTask));
    };

    return (
        <div className={`paper ${editedTask.checked ? 'blue' : 'pink'}`} key={editedTask.id} >
        <div className="tape-section"></div>
        <div className="checkedInput">
            <img style={{ width: "35px", height: "35px" }} type="checkbox" checked={editedTask.checked} onClick={handleToggle} src={editedTask.checked ? logoChecked : logoUnchecked} alt='' />
        </div>
        <div className="outputTaskName">
            {!editedTask.checked ?
                <EditText style={{
                    width: "200px",
                    fontFamily: "cursive",
                    fontSize: "20px",
                    display: "flex",
                    justifyContent: "center",
                    zIndex: 2
                }} value={editedTask.taskName}
                    onChange={(e) => {
                        setEditedTask({ ...editedTask, taskName: e.target.value })
                    }
                    }
                />
                :
                <output className="outputDescription"
                    style={{
                        width: "200px",
                        fontFamily: "cursive",
                        fontSize: "20px",
                        display: "flex",
                        justifyContent: "center",
                        zIndex: 2
                    }}>{editedTask.taskName}</output>
            }
        </div>
        <div className="outputDescription">
            {!editedTask.checked ?
                <EditText style={{
                    fontFamily: "cursive",
                    fontSize: "25px",
                    display: "flex",
                    justifyContent: "center",
                    zIndex: 2
                }} value={editedTask.description}
                    onChange={(e) => {
                        setEditedTask({ ...editedTask, description: e.target.value })
                    }
                    }
                />
                :
                <output className="outputDescription"
                    style={{
                        fontFamily: "cursive",
                        fontSize: "25px",
                        display: "flex",
                        justifyContent: "center",
                        zIndex: 2
                    }} >{editedTask.description}</output>
            }
        </div>
        {editedTask.checked ?
            <div className="editButton">
                <img style={{ width: "35px", height: "35px", opacity: 0.5, pointerEvents: 'none' }} onClick={handleEditTask} src={editLogo} alt='' />
            </div> :
            <div className="editButton">
                <img style={{ width: "35px", height: "35px" }} onClick={handleEditTask} src={editLogo} alt='' />
            </div>}
        <div className="deleteButton">
            <img style={{ width: "35px", height: "35px" }} onClick={handledelete} src={deleteLogo} alt='' />
        </div>
        <div className="tape-section"></div>
    </div >
    );
}
export default Task;