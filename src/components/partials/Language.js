import React from 'react'

const Language = ({ perc }) => {

  return (
    <div className='mb-2 w-full rounded-full h-6 bg-gray-700 dark:bg-gray-200'>
      <div className='bg-blue-600 h-6 rounded-full' style={{ width: `${perc.value}%` }}>
        <span className='m-2'>{perc.language}: {perc.value}%</span>
      </div>
    </div>
  )
}

export default Language