import { useState, useEffect } from 'react'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

const About = () => {
  const [md, setMd] = useState()

  useEffect(() => {
    const getMDData = async () => {
      const getMD = await axios.get('https://api.github.com/repos/SenjuHshrm/portfolio/readme', {
        headers: {
          'Accept': 'application/vnd.github.v3.raw'
        }
      })
      await setMd(getMD.data)
    }
    getMDData()
  })

  return (
    <div className='max-w-3xl p-2 mx-auto my-5 text-black dark:text-white'>
      <ReactMarkdown children={md} />
      <br/>
      {
        md !== undefined && <div>
        Source code: <a href='https://github.com/SenjuHshrm/portfolio' target='_blank' rel='noreferrer'>https://github.com/SenjuHshrm/portfolio</a>
      </div>
      }
    </div>
  )
}

export default About