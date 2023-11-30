import { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskItem from "./components/TaskItem";
import { TaskProvider } from "./Contexts/TaskContext";

  
function App() {
  const [Tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [{ id: Date.now(), ...task }, ...prev]);
  };

  const updateTask = (id, task) => {
    setTasks((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? task : prevTodo))
    );
  };
  
  const deleteTask = (id)=>{
    setTasks((prev)=>prev.filter((todo)=>todo.id!==id));
  }
  
  const togglecomplete = (id)=>{
    setTasks((prev)=>prev.map((prevTask)=>prevTask.id===id ? {...prevTask,completed : !prevTask.completed} :prevTask ))
  }

  useEffect(()=>{
    const tasks = JSON.parse(localStorage.getItem("tasks"))

    if(tasks && tasks.length>0){
      setTasks(tasks);
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(Tasks))
  },[Tasks])

   console.log(Tasks);
   
  return (
    <TaskProvider
      value={{ Tasks, addTask, deleteTask, updateTask, togglecomplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}
            <TaskForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
             {Tasks.map((task)=>(
                <div key={task.id} className="w-full">
                   <TaskItem task={task} />
                </div>
             ))

             }
          </div>
        </div>
      </div>
    </TaskProvider>
  );
}

export default App;

