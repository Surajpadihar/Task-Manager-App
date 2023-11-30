import {useContext,createContext} from 'react'


export const TaskContext = createContext({
    Tasks:[
        {
            id : 1,
            task : "task title",
            description :"task description",
            completed : false
        }
     
    ]
    ,
    addTask : (task)=>{},
    updateTask : (id,task)=>{},
    deleteTask:(id)=>{},
    togglecomplete : (id)=>{}
})

export const TaskProvider = TaskContext.Provider;

export const useTask = ()=>{
    return useContext(TaskContext);
}