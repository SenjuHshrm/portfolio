import React from 'react';
import { useState, useEffect } from 'react';
import ToDoListItem from './partials/ToDoListItem';
import moment from 'moment';

const ToDo = () => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [date, setDate] = useState('');
  const [prio, setPrio] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if(localStorage.getItem('todo') === null) {
      localStorage.setItem('todo', JSON.stringify([]))
    } else {
      setTodoList(JSON.parse(localStorage.getItem('todo')))
    }
  }, [])

  const addToList = (e) => {
    e.preventDefault()
    let data = {title, desc, date: moment(date, 'YYYY-MM-DD').format('MMMM DD, YYYY'), prio, id: Math.floor(Math.random() * 100000) + 1}
    localStorage.setItem('todo', JSON.stringify([...todoList, data]))
    setTodoList([...todoList, data])
    setTitle('')
    setDesc('')
    setDate('')
    setPrio('')
  }

  const removeFromList = (id) => {
    let newList = todoList.filter(todo => todo.id !== id)
    localStorage.setItem('todo', JSON.stringify(newList))
    setTodoList(newList)
  }

  return (
    <div className='max-w-3xl p-2 mx-auto my-5 border-2 border-slate-700 dark:border-slate-200 rounded-2xl text-black dark:text-white flex flex-col justify-start gap-3'>
      <div className='w-full gap-8 flex flex-row justify-start items-center'>
        <div>
          <span className='text-2xl font-semibold'>To Dos:</span>
          <p>Got something to do? Why not add a task...</p>
        </div>
      </div>
      <form onSubmit={addToList} className='p-2 w-full flex flex-col justify-start items-start w-auto border-2 border-slate-700 dark:border-slate-200'>
        <div className='flex flex-wrap gap-4 justify-start items-center w-full'>
          <div>
            <label className='block text-gray-700 dark:text-white text-sm' htmlFor='title'>Title</label>
            <input type='text' className='shadow appearance-none border rounded text-gray-700' id='username' value={title} onChange={ (e)=>setTitle(e.target.value) } required/>
          </div>
          <div>
            <label className='block text-gray-700 dark:text-white text-sm' htmlFor='desc'>Date</label>
            <input type='date' className='shadow appearance-none border rounded text-gray-700' id='desc' value={date} onChange={ (e)=>setDate(e.target.value) } required/>
          </div>
          <div>
            <label className='block text-gray-700 dark:text-white text-sm' htmlFor='prio'>Priority</label>
            <select className='shadow border rounded text-gray-700' id='prio' onChange={ (e)=> setPrio(e.target.value) } value={prio} required>
              <option value=''>-- Select Priority --</option>
              <option value='bg-red-500'>High</option>
              <option value='bg-yellow-500'>Medium</option>
              <option value='bg-green-500'>Low</option>
            </select>
          </div>
        </div>
        <div className='w-full'>
          <label className='block text-gray-700 dark:text-white text-sm' htmlFor='desc'>Description</label>
          <textarea className='shadow appearance-none border rounded text-gray-700 w-full' id='desc' value={desc} onChange={ (e)=>setDesc(e.target.value) } required/>
        </div>
        <div>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>Add</button>
        </div>
      </form>
      {
        todoList.length > 0 &&
        <div className='p-2 w-full flex flex-col justify-center items-center w-auto border-2 border-slate-700 dark:border-slate-200'>
          {
            todoList.map(todos => (
              <ToDoListItem key={todos.id} todo={todos} remove={removeFromList} />
            ))
          }
        </div>
      }
    </div>
  )
}

export default ToDo