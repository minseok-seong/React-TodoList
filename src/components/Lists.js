import React from 'react'
import List from './List'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'


const Lists = React.memo(({todoData, settodoData}) => {
  const handleEnd = (result) => {
    if(!result.destination) return;

    const newTodoData = todoData

    const [reorderedItem] = newTodoData.splice(result.source.index,1)

    newTodoData.splice(result.destination.index,0 ,reorderedItem)
    settodoData(newTodoData)


  }

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='todo'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>

           
         
        {todoData.map((data,index) => (
          <Draggable key={data.id} draggableId={data.id.toString()} index = {index}>
            {(provided,snapshot) => (


           <List key={data.id} id={data.id} title={data.title} completed={data.completed} todoData={todoData} settodoData={settodoData}
           provided={provided} snapshot={snapshot}/>
              
               )}
              </Draggable>
      )) }
      {provided.placeholder}
       </div>

    )}
            </Droppable>
         </DragDropContext>
    </div>
  )
})

export default Lists

  

  

