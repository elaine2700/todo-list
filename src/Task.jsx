import React from "react";

const Task = ({task, onPress}) => {
    return(
        <div className="task" onClick={onPress}>
            <div>
                
                {
                    task.complete?
                    (<p>Complete</p>) :
                    (<p>Not complete</p>)
                }
                
            </div>
            <p className={task.complete? ("finished") : ("")}>{task.task}</p>
        </div>
    )
};

export default Task;