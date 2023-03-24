import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Task from "./Task";

const Button = styled.button`
  display:inline-block;
  border: 1px solid #EEEEEE;
  background-color: #393E46;
  color: #EEEEEE;
  height: 30px;
  width: 50px;
  border-radius: 15px;
  cursor: pointer;
`;

const Text = styled.input`
 border: 2px solid #000;
 border-radius: 20px;
`;

const TaskCount = styled.span`
  margin: 10px;
`;


function App() {

  useEffect(() => {
    setTodoList([]);
  }, []);

  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  const AddTask = () => {
    const id = todoList.length + 1;
      const Task = {
        id: id,
        task: input,
        complete: false
      }
      
      setTodoList((prev) => [
        ...prev,
        Task,
      ]);
      
      //setTodoList(task);
      setInput("");
  }

  const handleClick = () => {
    AddTask();
  };

  const Clear = ()=> {
    setTodoList(() => []);
    setCompletedTaskCount(0);
  };

  const handleKeyPress = (event) => {
    if(event.key === "Enter"){
      AddTask();
    }
  };

  const handleComplete = (id) => {
    let list = todoList.map((task) => {
      let item = {};
      if (task.id == id) {
        if (!task.complete){
            //Task is pending, modifying it to complete and increment the count
            setCompletedTaskCount(completedTaskCount + 1);
        } 
        else {
            //Task is complete, modifying it back to pending, decrement Complete count
            setCompletedTaskCount(completedTaskCount - 1);
        }
    item = { ...task, complete: !task.complete };
          } else item = { ...task };
    return item;
    });
    setTodoList(list);
  };

  return (

    <div class="App">
      <h1>Todo List</h1>
      <div className='centered input-bar'>
        <Text 
          value={input} 
          placeholder='Add a Task'
          onInput={(e) =>setInput(e.target.value)} 
          onKeyDown={handleKeyPress}/>
        <Button onClick={() => handleClick()}>Add</Button>
        <Button onClick={() => Clear()}>Clear</Button>
      </div>

      <div class="centered section">
        <TaskCount>
          <b>Pending Tasks</b> {todoList.length - completedTaskCount}
        </TaskCount>
        <TaskCount>
          <b>Completed Tasks</b> {completedTaskCount}
        </TaskCount>
      </div>
      <div className='section'>
      {
        todoList?.length > 0 ?
        (
          <div className='tasks-container'>

            {
              todoList.map((todo) => (
                <Task 
                task={todo}
                onPress={() => handleComplete(todo.id)}
                />
              ))
            }
            
          </div>
        ) :
        (
          <div className='centered'>
            <h2>Add a task</h2>
          </div>
        )
      }
        
      </div>
      
    </div>
    
  );
}

export default App;
