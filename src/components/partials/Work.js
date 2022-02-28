import React from 'react'

const Work = ({ work }) => {
  return (
    <div className='w-full border-2 my-1 p-2 border-slate-700 dark:border-slate-200 flex flex-col gap-1'>
      <span className='text-xl font-medium'>{work.company}</span>
      <span>{work.position}</span>
      <span>{work.duration}</span>
    </div>
  )
}

export default Work