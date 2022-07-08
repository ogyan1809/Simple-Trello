import React, { useState } from 'react'
import TaskCardTitle from "./TaskCardTitle"
import TaskCardDeleteButton from "./button/TaskCardDeleteButton"
import TaskAddInput from "./input/TaskAddInput"
import Tasks from "./Tasks"
import { Draggable } from 'react-beautiful-dnd'

const TaskCard = ({ taskCardsList, setTaskCardsList, taskCard, index}) => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {(provided) => (
        <div className='TaskCard' ref={provided.innerRef}
        {...provided.draggableProps}
        >
        <div className="taskCardTitleAndTaskCardDeleteBUttonArea" {...provided.dragHandleProps}>
          <TaskCardTitle></TaskCardTitle>
          <TaskCardDeleteButton 
            taskCardsList={taskCardsList}
            setTaskCardsList={setTaskCardsList}
            taskCard={taskCard}
          >
          </TaskCardDeleteButton>
        </div>
        <TaskAddInput 
          inputText={inputText}
          setInputText={setInputText}
          taskList={taskList}
          setTaskList={setTaskList}>
        </TaskAddInput>
        <Tasks 
          inputText={inputText} 
          taskList={taskList} 
          setTaskList={setTaskList}>
        </Tasks>
      </div>
      )}
      
    </Draggable>
  )
}

export default TaskCard
