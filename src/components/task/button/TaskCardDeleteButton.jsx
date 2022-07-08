import React from 'react'

const TaskCardDeleteButton = ({ taskCardsList, setTaskCardsList, taskCard }) => {
  const taskCardDeleteButton = (id) => {
    // タスクカードを削除する
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id));
  }
  return (
    <div>
      <button className='taskCardDeleteBUtton' onClick={() => taskCardDeleteButton(taskCard.id)}>
        <i className="fa-solid fa-circle-xmark"></i>
      </button>
    </div>
  )
}

export default TaskCardDeleteButton
