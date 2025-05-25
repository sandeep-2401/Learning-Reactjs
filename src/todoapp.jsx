import {useState} from 'react';
import './App.css';

function ToDoApp(){

    const [tasks, setTasks] = useState([]); 
    const [taskInput, setTaskInput] =useState("");

    function addTask(){
        if(taskInput.trim() !== ""){
            setTasks([...tasks,taskInput]);
            setTaskInput("");
        }
        
    }

    function removeTask(index){
        const newTasks=  tasks.filter((_,i) => i !== index);
        setTasks(newTasks);
    }

    function moveup(index){
        if(index > 0){
            const newTasks = [...tasks];
            const temp = newTasks[index];
            newTasks[index] = newTasks[index - 1];
            newTasks[index - 1] = temp;
            setTasks(newTasks);
        }
    }

    function movedown(index){
        if(index < tasks.length - 1){
            const newTasks = [...tasks];
            const temp = newTasks[index];
            newTasks[index] = newTasks[index + 1];
            newTasks[index + 1] = temp;
            setTasks(newTasks);
        }
    }


    return(
        <div className="container"> 
            <h1 className="heading">To-Do-App</h1>
            <input type="text" className="input" value={taskInput} onChange={(e)=> setTaskInput(e.target.value)} placeholder='Enter the task'/>
            <button onClick={addTask} className="add-button">Add</button><br/><br/>
            <div className="tasks">
                <ol className="list">
                    
                    {tasks.map((task,index) => (<li key={index} className="list-content"> 
                        <span className="text-content" > {task} </span>
                        <button className="delete-button" onClick={()=> removeTask(index)}> remove </button> &nbsp;
                        <button className="moveup-button" onClick={()=> moveup(index)}> moveup </button> &nbsp;
                        <button className="movedown-button" onClick={()=> movedown(index)}> movedown </button>
                        </li>
                        ))} 

                </ol>
            </div>
        </div>
    );

}

export default ToDoApp