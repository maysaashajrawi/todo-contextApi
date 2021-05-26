import React,{useEffect,useState,useContext} from 'react'
import axios from 'axios';
import TodoItem from './TodoItem';

import {TaskContext} from './TasksContext';


function TodoList() {
    const url = "http://localhost:3000";
    // to use global state 
    const [tasks,setTasks] = useContext(TaskContext);
 
    function handleDelete(id){
        axios.delete(url+'/tasks/'+id)
    }
 
       

    return (
        <div>
            {tasks.map((task)=>(
                <TodoItem task = {task} key= {task.id} handleDelete = {handleDelete}/>
                ))}
            </div>
           

    )
}

export default TodoList








