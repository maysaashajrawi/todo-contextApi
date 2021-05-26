import React,{useState,useContext} from 'react';
import axios from 'axios';
import {TaskContext} from './TasksContext' 

function TodoForm(){
    const url = "http://localhost:3000";
    const [newtask,setNewTask] =useState('');
    const [tasks,setTasks] = useContext(TaskContext);

    function handleChange(e){
        setNewTask({task:e.target.value,status:false});
        console.log(newtask)
    }
    function handleSubmit(e){
        e.preventDefault();
        axios.post(url+'/tasks', newtask);
        console.log("sub  ",newtask);  
    }


   

    return (
            
        <div>
             
            <form  >
                <label>
                    Task:
                    <input type="text"  value={newtask.task} name="newtask"  onChange ={handleChange}/>
                </label>
                <input type="button" value="Add Task" onClick={handleSubmit} />
            </form>
        
      
        </div>


            
        );
}

export default TodoForm
