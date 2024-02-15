import React from 'react'
import HeroImg from '../asserts/hero.png'
import { AiOutlineLinkedin,AiOutlineGithub,AiOutlineInstagram,AiOutlineWhatsApp } from "react-icons/ai";
import { TbBrandLeetcode } from "react-icons/tb";
// import { MdOutlineWhatsapp } from "react-icons/md";


function Hero() {
  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center'>
<div className='md:w-1/2 flex-col'>
<h1 className= 'text-white text-4xl font-hero-font'>Hello, <br/> I am <span className='text-black'>Dev Kharthik</span>
<p className='text-3xl'>I am a Full-stack developer</p>
</h1>
<div className='flex py-10 '>
    <a href='https://www.linkedin.com/in/dev-kharthik/' className='pr-5 hover:text-white'><AiOutlineLinkedin size={40}/></a>
    <a href='https://github.com/DevKharthik' className='pr-5  hover:text-white'><AiOutlineGithub size={40}/></a>
    <a href='https://leetcode.com/devkharthik/' className='pr-5 hover:text-white'><TbBrandLeetcode size={40}/></a>
    <a href='https://www.instagram.com/dev_kharthik/?next=%2F&hl=en' className='pr-5 hover:text-white'><AiOutlineInstagram size={40}/></a>
    <a href='https://wa.me/qr/MOWJSKB4TOTKN1' className=' hover:text-white'><AiOutlineWhatsApp  size={40}/></a>
</div>

</div>
<img className='md:w-1/3' src={HeroImg} alt="Developer"/>
    </section>
  )
}

export default Hero