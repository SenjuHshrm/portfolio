
const Skill = ({ skill }) => {
  return (
    <div className='border-2 rounded-md p-2 border-slate-700 dark:border-slate-200'>
      <a href={skill.link} target="_blank">{skill.name}</a>
    </div>
  )
}

export default Skill