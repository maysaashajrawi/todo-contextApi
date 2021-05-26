import axios from 'axios';
import React,{useState}from 'react';

function TodoItem(props) {
    const url = "http://localhost:3000";
    
    const [editting,setEditting] = useState(false);
    const [editedTask,seteditedTask] = useState({
        task:''
    });
   
    function handleChange(e){
        seteditedTask({
            task:e.target.value,
            status:false
        })
    }

    function toggleEdit(id){
        
        setEditting(!editting);
       
            axios.get(url+'/tasks/'+id)
            .then(res=>{
                JSON.stringify(res);
                seteditedTask({
                    task:res.data.task
                })
            })

                axios.put(url+'/tasks/'+id , editedTask)           
     
    }

    return (        
        <li key={props.key}>
                    
                    {props.task.task}
                    <div>
                    <input type= "button" value= "dalete" onClick={() => props.handleDelete(props.task.id)} ></input> 

                    <input type= "button" value={editting ? 'save' : 'update'} onClick={() => toggleEdit(props.task.id)}></input> 

                    {editting ?   <input type= "text" name="edit-task" value={editedTask.task} onChange={handleChange}></input> : null  } 

                    </div>
                   

                    </li>

            
    )
}

export default TodoItem
