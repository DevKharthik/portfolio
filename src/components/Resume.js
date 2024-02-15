import React from 'react'
import resume from '../asserts/resume.png';

function Resume() {
  return (
   <section className='flex flex-col md:flex-row bg-purple-400 px-5' id='resume'>
    <div className='w-[300px] md:w-1/2 flex justify-center md:justify-end'>
        <img src={resume}/>
    </div>
    <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>

        <h1 className='text-4xl text-white border-b-4 border-[#2b2d] mb-5 w-[135px] font-bold'>Resume</h1>
        <p className= ' px-5 text-white pb-5'>My resume is available for your review. <a className='btn' href="https://devkharthik.tiiny.site">Download</a></p>
       {/* <p>And My Technical Skills are C,Java,HTML/CSS,JavaScript,MongoDB,ExpressJS,ReactJS,NodeJS,Problem Solving</p> */}
    
        </div>
    </div>
   </section>
  )
}

export default Resume