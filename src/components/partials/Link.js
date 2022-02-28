

const Link = ({ link }) => {
  return (
    <div className='border-2 rounded-md p-2 border-slate-700 dark:border-slate-200'>
      <a href={link.link} target="_blank">{link.name}</a>
    </div>
  )
}

export default Link