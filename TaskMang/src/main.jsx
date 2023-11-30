import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Routes ,Route } from "react-router-dom";
import { BrowserRouter as Router} from 'react-router-dom';
import TaskForm from './components/TaskForm.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
     <Routes>
           
            <Route path='/' element={<App/>} />
            <Route path="/add" element={<TaskForm/>}/>

           

     </Routes>
  </Router>
  </React.StrictMode>,
)
