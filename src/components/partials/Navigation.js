import Toggle from "./Toggle"
import { Link } from "react-router-dom"
import { useLocation } from "react-router-dom"

const Navigation = () => {
  const location = useLocation()
  return (
    <nav className='h-16 sticky top-0 flex flex-row justify-center bg-slate-200 dark:bg-slate-700' role='navigation'>
      <ul className='list-none flex flex-row gap-7 justify-center items-center text-black dark:text-white'>
        <li className={ location.pathname === '/' ? 'border-b-4 border-sky-600' : '' }>
          <Link to='/'>Home</Link>
        </li>
        <li className={ location.pathname === '/skills' ? 'border-b-4 border-sky-600' : '' }>
          <Link to='/skills'>Skills</Link>
        </li>
        <li className={ location.pathname === '/links' ? 'border-b-4 border-sky-600' : '' }>
          <Link to='/links'>Links</Link>
        </li>
        <li className={ location.pathname === '/todo' ? 'border-b-4 border-sky-600' : '' }>
          <Link to='/todo'>To Do</Link>
        </li>
        <li className={ location.pathname === '/about' ? 'border-b-4 border-sky-600' : '' }>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Toggle />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation