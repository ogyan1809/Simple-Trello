import React, {useState} from 'react'

const TaskCardTitle = () => {
  const [isClick, setIsClick] = useState(false);
  const [inputCardTitle, setInputCardTitle] = useState("Today");
  const onHandleClick = () => {
    setIsClick(true);
  };
  const handleChange = (e) => {
    setInputCardTitle(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsClick(false);
  };
  const handleBlur = () => {
    setIsClick(false);
  };
  return (
    <div onClick={onHandleClick} className="taskCardTitleInputArea">
      {isClick ? (
        <form onSubmit={handleSubmit}>
          <input
            className="taskCardTitleInput"
            autoFocus
            type="text" 
            onChange={handleChange} 
            onBlur={handleBlur}
            value={inputCardTitle}
            maxLength="10"
          >
          </input>
        </form>) : <h3>{inputCardTitle}</h3>}
    </div>
  )
}

export default TaskCardTitle
