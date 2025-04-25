import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const todoSlice= createSlice({
    name:"todos",
    initialState: [
        {
            id:uuidv4(),
            taskName: 'First Task',
            description: 'Description of the first Task',
            checked: true,
        },
        {
            id:uuidv4(),
            taskName: 'Second Task',
            description: 'Description of the second Task',
            checked: true,
        },
        {
            id:uuidv4(),
            taskName: 'Third Task',
            description: 'Description of the third Task',
            checked: false,
        },
        {
            id:uuidv4(),
            taskName: 'Fourth Task',
            description: 'Description of the fourth Task',
            checked: true,
        },
    ],
    reducers:{
        addTodo:(state,action)=>{
            const newTask = action.payload;
            console.log( newTask)   

            state.push(newTask);
        },
        deletetodo:(state,action)=>{
            return state.filter((e)=> e.id!==action.payload)
        },      
        sortTodo:(state)=>{
            return state.sort((a,b)=>a.checked - b.checked)
        },
        editTodo: (state, action) => {
            return state.map(task => task.id === action.payload.id ? action.payload : task);
        },
        filterTodo: (state,action)=>{
            return action.payload === 'done' ? state.filter(task => task.checked) : state.filter(task => !task.checked);
        }


        
    }

}
);
export const {addTodo,deletetodo,sortTodo,editTodo,filterTodo} =todoSlice.actions;
export default todoSlice.reducer;