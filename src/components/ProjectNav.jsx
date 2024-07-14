import React from 'react'

const ProjectNav = () => {
  return (
    <nav>
        <div className=' flex items-center justify-center rounded-full px-4 border border-slate-300'>
            <ul className='flex items-center justify-center py-2 space-x-4'>
                <li className=' font-mono hover:bg-slate-100 py-2 px-4 rounded-full hover:text-blue-300 cursor-pointer'>All Projects</li>
                <li className='font-mono hover:bg-slate-100 hover:text-blue-300 py-2 px-4 rounded-full cursor-pointer' >HTML</li>
                <li className=' font-mono hover:bg-slate-100 hover:text-blue-300 py-2 px-4 rounded-full cursor-pointer'>React Js</li>
                <li className=' font-mono hover:bg-slate-100 hover:text-blue-300 py-2 px-4 rounded-full cursor-pointer'>Next Js</li>
            </ul>
        </div>
    </nav>
  )
}

export default ProjectNav