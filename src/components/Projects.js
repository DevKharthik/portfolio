import React from 'react'
import online from '../asserts/online.png'
import credit from '../asserts/2credit.jpeg'
import expense from '../asserts/expense.png'

function Projects() {
  return (
    <section className='flex flex-col py-20 px-5 justify-center bg-neutral-500 text-white' id='projects'>
        <div className='w-full'>
            <div className='flex flex-col px-10 py-5'>
    <h1 className='text-4xl text-white border-b-4 border-[#2b2d] mb-5 w-[140px] font-bold'>Projects</h1>
    <p>These are my basic projects done with HTML/CSS , MERN STACK etc...</p>
            </div>
        </div>
        <div className='w-full'>
          <div className='flex flex-col  md:flex-row px-10 gap-5'>
            <div className=' relative' onClick={()=>{window.open('https://github.com/DevKharthik/2-credit-course-selection-frontend')}}>
      <img className='h-[200px] w-[500px]' src={credit} />
      <div className='project-desc'>
        <p className='text-center px-5 py-5'>  Helps to select the two-credit courses for my institution</p>
      </div>
            </div>
            <div className='relative' onClick={()=>{window.open('https://github.com/DevKharthik/online-voting-system')}}>
      <img className='h-[200px] w-[500px]' src={online}/>
      <div className='project-desc'>
        <p className='text-center px-5 py-5'> We have implemented online voting and real-time result publication to enhance accessibility and transparency.</p>
      </div>
            </div>
            <div className='relative' onClick={()=>{window.open('https://github.com/DevKharthik/expense-tracker-full-project')}}>
      <img className='h-[200px] w-[500px]' src={expense}/>
      <div className='project-desc'>
        <p className='text-center px-5 py-5'> Helps the user to track the expense which they spend.</p>
      </div>
          </div>
          </div>
        </div>
    </section>
  )
}

export default Projects