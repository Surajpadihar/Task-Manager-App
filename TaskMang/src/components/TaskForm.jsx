import React, { useState } from "react";
import { useTask } from "../Contexts/TaskContext";

const TaskForm = () => {

  const [task,settask] = useState("");
  const [description,Setdescription] = useState("");

  const {addTask} =useTask();

  const add = (e)=>{
    e.preventDefault();

    if(!task)return;

    addTask({task,description,completed:false})
    // console.log(title);
    // console.log(Description);
    settask("");
    Setdescription("");
  }

  return (
    <form onSubmit={add} className="w-screen flex-col">
      


      <input
        type="text"
        placeholder="Task Name"
        className="border ml-16 w-1/2 flex border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={task}
        onChange={(e) => settask(e.target.value)}
      />
      <textarea  cols="" rows="" placeholder="Task Description" className="p-2 border w-1/2 ml-[-380px] my-4 border-black/10 rounded-l-lg outline-none duration-150 bg-white/20 py-1.5" 
       value={description}
       onChange={(e)=>Setdescription(e.target.value)}
      ></textarea>
      <button
        type="submit"
        className="flex justify-center items-center ml-[300px] rounded-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>

      
    </form>
  );
};

export default TaskForm;
