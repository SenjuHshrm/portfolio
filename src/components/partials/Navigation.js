import Toggle from "./Toggle"
import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <nav className='h-16 sticky top-0 flex flex-row justify-center bg-slate-200 dark:bg-slate-700' role='navigation'>
      <ul className='list-none flex flex-row gap-7 justify-center items-center text-black dark:text-white'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/skills'>Skills</Link>
        </li>
        <li>
          <Link to='/links'>Links</Link>
        </li>
        <li>
          <Toggle />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation