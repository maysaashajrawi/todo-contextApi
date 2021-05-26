
import axios from 'axios';
const url = "http://localhost:3000";
    
export const fetchTasks = ()=>axios.get(url+'/tasks');
// export const fetchOneTask = ()=>axios.get(url+'/tasks'+id);

export const addNewTask = (data)=>axios.post(url+'/tasks', data);
export const deletedTask = (id)=>axios.delete(url+'/tasks/'+id);

export const updateTask = (id,data)=>axios.put(url+'/tasks/'+id , data);

const todos =  [
      { "id": 1, "task": "Send an email update to the team: 9am today", "status":false },
      { "id": 2, "task": "Call the design agency to finalize mockups: 1:00pm today", "status": false },
      { "id": 3, "task": "Touch base with recruiters about new role: Tuesday", "status": false},
      { "id": 4, "task": "Meet with the engineering team: Thursday", "status": false }
      
    ];



// export const getTasks = ()=>{axios.get(url+'/tasks')}
export const getTasks = ()=> {
    return new Promise((resolve, reject) => {
        resolve(todos)
    })
}

