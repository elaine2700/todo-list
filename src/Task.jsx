import React from "react";


const Task = ({task, taskCompleted, colorHandler}) => {
    
    return(
        <div className={`task ${task.color}`} >
            <div className="task-options">

                <div className="option grey" onClick={taskCompleted}><p>x</p></div>
                <div className="option yellow" onClick={() => colorHandler(task.id, "yellow")}></div>
                <div className="option orange" onClick={() => colorHandler(task.id, "orange")}></div>
                <div className="option blue" onClick={() => colorHandler(task.id, "blue")}></div>
                
            </div>
            <div>
                <p className={task.complete? ("finished") : ("")}>{task.task}</p>
            </div>
        </div>
    )
};

export default Task;