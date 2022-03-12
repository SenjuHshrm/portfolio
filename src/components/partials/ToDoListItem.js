import React from 'react';
import {FaTrashAlt} from 'react-icons/fa'

const ToDoListItem = ({ todo, remove}) => {
  return (
    <div className={ `${todo.prio} w-full m-1 p-3 flex flex-row justify-between item-center` }>
      <div>
        <p className='font-bold'>{todo.title}</p>
        <p>{todo.date}</p>
        <span>{todo.desc}</span>
      </div>
      <button onClick={() => remove(todo.id)}><FaTrashAlt /></button>
    </div>
  )
}

export default ToDoListItem