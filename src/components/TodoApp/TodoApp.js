import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import TodoItem from './TodoItem';

function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(""); 

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { todo: newTask, done: false }]);
      setNewTask(""); 
    }
  }

  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
  }

  const updateTask = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <>
      <div className="container rounded" style={{ width: "35%", height: "80vh", backgroundColor: "white", margin: "24px", padding: "32px" }}>
        <h5 style={{ color: "#8860FF", textAlign: "start" }}>Add new To-Do...</h5>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your task"
            style={{ marginTop: "32px", marginBottom: "8px" }}
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} // Handle input change
          />
        </div>
        <button id="custom-button" type="button" className="btn col-4" onClick={addTask}>
          Add
        </button>
        <hr style={{ color: "blue", width: "100%", border: "1px solid #8860FF", textAlign: "center" }} />

        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} index={index} updateTask={updateTask} deleteTask={deleteTask} />
        ))}
      </div>
      <hr style={{ color: "blue", width: "60%", border: "1px solid white" }} />
    </>
  );
}

export default TodoApp;
