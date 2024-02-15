import React from 'react'
import AboutImg from '../asserts/aboutmefinal.png'

function About() {
  return (
   <section className='flex flex-col md:flex-row bg-gray-500 px-5' id='about'>
    <div className='md:w-1/2'>
        <img src={AboutImg}/>
    </div>
    <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>

        <h1 className='text-4xl text-white border-b-4 border-[#2b2d] mb-5 w-[180px] font-bold'>About Me</h1>
        <p className='text-white pb-5'>Hello,My name is Dev kharthik I am currently persuing Computer Science Engineering in Bachelor's degree with current cgpa of 7.89.And I completed HSC in The Richmond Matric Hr.Sec School with 86.6 percentage and SSLC in Shri Vidyaa Bhavan School with 81.1 percentage.</p>
       {/* <p>And My Technical Skills are C,Java,HTML/CSS,JavaScript,MongoDB,ExpressJS,ReactJS,NodeJS,Problem Solving</p> */}
    
        </div>
    </div>
   </section>
  )
}

export default About