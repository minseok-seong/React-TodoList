
import React, { useState } from "react";
import "./App.css";
import List from "./components/Lists";
import Form from "./components/Form";
export default function App() {
  
  const [todoData,settodoData] = useState([]);
  const [value, setvalue] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()

    let newTodo = {
      id : Date.now(),
      title : value,
      completed :false,
    }
    settodoData((prev) => {
      return [...prev, newTodo]
    })
    setvalue("")
    

  }
  const handleRemoveClick = () => {
    settodoData([]);
  }
    return(
      <div className="flex items-center justify-center w-screen h-screen bg-blue-200">
        <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg ">
          <div className="flex justify-between mb-3" >
            <h1>할일 목록</h1>
            <buttom onClick={handleRemoveClick}>모두지우기</buttom>
          </div>

          <List  todoData = {todoData} settodoData={settodoData}/>
          <Form value={value} setvalue = {setvalue} handleSubmit={handleSubmit} />
        </div>    
      </div>
    )
          }
        