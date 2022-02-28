import { links } from "../data"
import Link from "./partials/Link"

const Links = () => {
  return (
    <div className='max-w-3xl p-2 mx-auto my-5 border-2 border-slate-700 dark:border-slate-200 rounded-2xl text-black dark:text-white flex flex-col justify-start'>
      <span className='text-xl font-semibold'>My Links</span>
      <span>You can find me on the following links.</span>
      <br/>
      <div className='w-full gap-8 flex flex-row flex-wrap justify-center items-center'>
        {
          links.map((link) => (
            <Link key={link.name} link={link}/>
          ))
        }
      </div>
    </div>
  )
}

export default Links