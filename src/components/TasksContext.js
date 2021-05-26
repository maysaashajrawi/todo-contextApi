import React,{useState,createContext,useEffect} from 'react';

import axios from 'axios';
const url = "http://localhost:3000";

export const TaskContext = createContext();

// provide information to different components
export const TaskProvider = (props)=>{
    const [tasks,setTasks] = useState([]);


    // const getTasks = axios.get(url+'/tasks').then((res)=>{
    //     JSON.stringify(res);  
    //     setTasks(res.data)
    // })
    useEffect(()=>{
    //   handleSubmit();
        axios.get(url+'/tasks').then((res)=>{
            JSON.stringify(res);  
            setTasks(res.data)
        }).catch(err=>console.log(err));
    },[])
    return (
        <TaskContext.Provider value ={[tasks,setTasks]}>

            {/* render all the child component */}
            {props.children}

        </TaskContext.Provider>
    );
}