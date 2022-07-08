import React from 'react'
import TaskCard from "./TaskCard"
import AddTaskCardButton from "./button/AddTaskCardButton"
import { useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([{
    id: "0",
    draggableId: "item0",
  }]);
  const reorder = (taskList, startIndex, endIndex) => {
    const remove = taskList.splice(startIndex, 1);
    taskList.splice(endIndex, 0, remove[0]);
  }
  const handleDragEnd = (result) => {
    reorder( taskCardsList, result.source.index, result.destination.index );
    setTaskCardsList(taskCardsList);
  }
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided) => (
            <div className='taskCardsArea' {...provided.droppableProps} ref={provided.innerRef}>
              {taskCardsList.map((taskCard, index) => (
                <TaskCard key={taskCard.id} 
                index={index}
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList} 
                taskCard={taskCard}/>
              ))}
              {provided.placeholder}
              <AddTaskCardButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList}>
              </AddTaskCardButton>
            </div>
        )}
        
      </Droppable>
    </DragDropContext>
  )
}

export default TaskCards

