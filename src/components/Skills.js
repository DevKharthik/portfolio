import React from 'react';
import SkillsImg from '../asserts/skills.png';

function Skills() {
  return (
    <section className='flex flex-col md:flex-row bg-violet-900 pg-5 ' id='skills'>
      <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center'>
          <h1 className='text-4xl text-white border-b-4 border-[#2b2d] mb-5 w-[90px] font-bold mx-5'>Skills</h1>
          <p className='text-white pb-5 mx-5'>
            I am Technically strong at C,Java,Problem Solving,HTML/CSS,JavaScript,MongoDB,Express JS,React JS,Node JS etc..
          </p>
        </div>
      </div>
      <div className='md:w-1/2'>
        <img src={SkillsImg} alt="Skills" className="md:w-full" />
      </div>
    </section>
  );
}

export default Skills;
