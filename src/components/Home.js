import { info, works } from '../data'
import Work from './partials/Work'

const Home = () => {
  const profileImg = require('../assets/profile.jpg')
  return (
    <div className='max-w-3xl p-2 mx-auto my-5 border-2 border-slate-700 dark:border-slate-200 rounded-2xl text-black dark:text-white flex flex-col justify-start gap-3'>
      <div className='w-full gap-8 flex flex-row justify-start items-center'>
        <img className='w-24 h-24 rounded-3xl' src={profileImg} alt='profile' />
        <div>
          <span className='text-2xl font-semibold'>{info.firstName} {info.middleName} {info.lastName}</span>
          <p>{info.position}</p>
        </div>
      </div>
      <div className='p-2 w-full flex flex-col justify-start items-start w-auto border-2 border-slate-700 dark:border-slate-200'>
        <span className='text-xl font-semibold'>Details</span>
        <span>Gender: {info.gender}</span>
        <span>Birthday: {info.birthday}</span>
        <span>Contact: {info.contact}</span>
        <span>Email: {info.email}</span>
        <span>Location: {info.location}</span>
      </div>

      <div className='p-2 w-full flex flex-col justify-start items-start w-auto border-2 border-slate-700 dark:border-slate-200'>
        <span className='text-xl font-semibold'>Work Experiences</span>
        {
          works.map((work) => (
            <Work key={work.company} work={work} />
          ))
        }
      </div>
    </div>
  )
}

export default Home