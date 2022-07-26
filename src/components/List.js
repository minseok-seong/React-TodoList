import { useState } from "react"
import React from 'react'

const list = React.memo(({
    id,title,completed,todoData,settodoData,provided, snapshot
})  => {

  const [isEditing, setIsEditing] = useState(false)
  const [editingTitle, seteditingTitle] = useState(title)

    const btnClick = (id) => {
        let newTodoData = todoData.filter((data) => data.id !== id)
        console.log('newtodoData', newTodoData)
        settodoData(newTodoData)
      }
    
      const onChangeBtn = (id) => {
        let newTodoData = todoData.map((data)=> {
          if(data.id === id) {
            data.completed = !data.completed
          }
          return data;
      
        })
        settodoData(newTodoData)
    
       
      }
      const onChange = (e) => {
        seteditingTitle(e.target.value)
      }

      const onSubmit = (e) => {
        e.preventDefault()
        let newTodoData = todoData.map((data) => {
          if(data.id === id){
            data.title = editingTitle
          }
          return data;
        })
        settodoData(newTodoData)
        setIsEditing(false)

      }
      if(isEditing) {
        return (
          <div className='flex items-center justify-between w-full px-4 py-1 my-2 bg-gray-100  text-gray-600 border rounded'>
        <div className='items-center'>
          <form onSubmit={onSubmit}>
          <input value={editingTitle} onChange={onChange}
          className='2-full px-3 py-2 mr-4 text-gray-500 rounded'/>

          </form>
        
        </div>
       
      <div>
      <button className='px-4 py-2 ' onClick={() => setIsEditing(false)} >X</button>
      <button onSubmit={onSubmit} className='px-4 py-2 'type='submit'>저장</button>
      
      
      </div>
        </div>
        )
      

      }else{
        return (
          <div  key = {id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
          <div className={`${snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'}  flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}>
        <div className='items-center'>
        <input onClick = {() => onChangeBtn(id)} type='checkbox' defaultChecked={false}/>
          <span className={completed ? 'line-through' : undefined}>
          {title}
          </span>
        </div>
       
      <div>
      <button className='px-4 py-2 ' onClick={() => btnClick(id)} >X</button>
      <button className='px-4 py-2 ' onClick={() => setIsEditing(true)} >수정</button>
      
      
      </div>
        </div>
      </div>
        )
      }
  
}
)

export default list