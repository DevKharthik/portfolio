import React from 'react'


function Contact() {
  return (
   <section className='flex flex-col  bg-orange-300 px-5 py-32' id='contact'>
    <div className='flex flex-col items-center'>
        

        <h1 className='text-4xl  border-b-4 border-[#2b2d] mb-5 w-[135px] font-bold'>Contact</h1>
        <p className='text-white pb-5  '>Get in Touch!</p>
       {/* <p>And My Technical Skills are C,Java,HTML/CSS,JavaScript,MongoDB,ExpressJS,ReactJS,NodeJS,Problem Solving</p> */}
       <p className='py-2'><span className='font-bold'>Email :</span> devdevharihari@gmail.com</p>
       <p className='py-2'><span className='font-bold'>Phone :</span> 8870094056</p>
       <p className='py-2'><span className='font-bold'>Address :</span> 6/36 Nambiyur Road,Thingalur-638055.<br></br></p>
       {/* <p className='py-2'><span className='font-bold'></span>Thingalur-638055.</p> */}
    
        </div>
   </section>
  )
}

export default Contact