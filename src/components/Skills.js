import React from 'react';
import { skills } from '../data';
import Skill from './partials/Skill';

const Skills = () => {
  return (
    <div className='max-w-3xl p-2 mx-auto my-5 border-2 border-slate-700 dark:border-slate-200 rounded-2xl text-black dark:text-white flex flex-col justify-start'>
      <span className='text-xl font-semibold'>Tools and other technologies</span>
      <span>Here are some languages, frameworks and tools I can use.</span>
      <br/>
      <div className='w-full gap-8 flex flex-row flex-wrap justify-center items-center'>
        {
          skills.map((skill) => (
            <Skill key={skill.name} skill={skill}/>
          ))
        }
      </div>
    </div>
  )
}

export default Skills