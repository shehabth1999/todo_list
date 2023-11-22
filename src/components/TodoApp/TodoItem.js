
const TodoItem = ({task, index ,updateTask, deleteTask }) => {
  return(
    <div className="box-with-border rounded">
    <h5 style={{color:"#8860FF", padding:"5px",textAlign:"start", textDecoration: task.done && 'line-through' }}>{task.todo}</h5>
    <div className="py-1" style={{display:"flex",justifyContent:"space-evenly"}}>
    <button id="completed-button" onClick={()=>{updateTask(index)}} type="button" className="btn d-block col-3">Completed</button>
    <button id="delete-button" onClick={()=>{deleteTask(index)}} type="button" className="btn d-block col-3 ">Delete</button>
    </div>
  </div>
  )
};

export default TodoItem;
