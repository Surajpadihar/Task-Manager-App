import React ,{useState} from 'react'
import { useTask } from '../Contexts/TaskContext'

const TaskItem = ({task}) => {
    const [isTaskEditable,setIsTaskEditable] = useState()
    const [titleMsg,setTitleMsg] = useState(task.task)
    const [descMsg,setDescMsg] = useState(task.description)

    const {updateTask,deleteTask,togglecomplete} = useTask();

    const editTodo = ()=>{
        updateTask(task.id,{...task,task : titleMsg,description:descMsg})
        setIsTaskEditable(false)
    }

    const toggleCompleted =()=>{
        togglecomplete(task.id)
    }
    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
                task.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={task.completed}
                onChange={toggleCompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTaskEditable ? "border-black/10 px-2" : "border-transparent"
                } ${task.completed ? "line-through" : ""}`}
                value={titleMsg}
                onChange={(e) => setTitleMsg(e.target.value)}
                readOnly={!isTaskEditable}
            />
            {/* Edit, Save Button */}
            <textarea  cols="45" rows="1" placeholder="Task Description"      
             className={`p-4 border outline-none w-full bg-transparent rounded-lg ${
                isTaskEditable ? "border-black/10 px-2" : "border-transparent"
            } ${task.completed ? "line-through" : ""}`}
             value={descMsg}
            onChange={(e)=>setDescMsg(e.target.value)}
            readOnly={!isTaskEditable}
             ></textarea>
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (task.completed) return;

                    if (isTaskEditable) {
                        editTodo();
                    } else setIsTaskEditable((prev) => !prev);
                }}
                disabled={task.completed}
            >
                {isTaskEditable ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTask(task.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TaskItem
