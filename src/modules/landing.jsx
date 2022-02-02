import React from 'react';
import Footer from './footer';

//icons
import programming from "../assets/images/home_icons/programming.png"
import connecting from "../assets/images/home_icons/connectingWorld.png"
import team from "../assets/images/home_icons/team.png"
import git from "../assets/images/home_icons/git.png"
import findProject from "../assets/images/home_icons/findProject.png"
import findProfile from "../assets/images/home_icons/findProfile.png"
import feedback from "../assets/images/home_icons/feedback.png"
const Landing = () => {
return <>
  <div className='my-[2rem] mx-[5%] py-[3rem] font-bold bg-white rounded-lg dark:bg-neutral-900 dark:text-white'>
      <section className='flex md:flex-row xs:flex-col flex-wrap mb-[5rem]'>
        <article className='flex'>
          <p className='grow self-center text-2xl w-[30%] text-cyan-500 mx-[10%]'>Build your First Project with LINCLON as Contributer And Execute/improve your skills</p>
          <img alt="" src={programming} className='w-[50%]'/>
        </article>
        <article className='flex'>
          <img alt="" src={connecting} className='w-[30%]'/>
          <p className='grow self-center text-2xl w-[30%] text-cyan-500 mx-[10%]'>Connect From Throughout the World</p>
        </article>
        <article className='flex'>
          <p className='grow self-center text-2xl w-[30%] text-cyan-500 mx-[10%]'>Create Your Own Team</p>
          <img alt="" src={team} className='w-[50%]'/>
        </article>
        <img alt="" src={git} className='h-[30%] w-[30%]'/>
        <img alt="" src={findProfile} className='h-[30%] w-[30%]'/>
        <img alt="" src={findProject} className='h-[30%] w-[30%]'/>
        
        <img alt="" src={feedback} className='w-[30%]'/>
        <p className='grow text-2xl w-[30%] text-violet-700 mx-[10%] w-[100%] text-center'>And Many More...!</p>
      </section>
       <h1>What You Can Actualy Do Here!</h1>
      <input placeholder='project...' className='h-[100%] w-[100%] '>
      </input> 
      <p className='ml-[5%] mb-5'>Select projects by specific Technology</p>
      <section className='flex flex-row gap-10 mx-[5rem] border-2 rounded-lg flex-wrap'>
        <figure className='mx-4 px-2 py-2 my-4 bg-cyan-500 rounded-lg'>
        CONTENT
        </figure>
        <figure className='mx-4 px-2 py-2 my-4 bg-violet-700 rounded-lg'>
        CONTENT
        </figure>
        <figure className='mx-4 px-2 py-2 my-4 bg-cyan-500 rounded-lg'>
        CONTENT
        </figure>
        <figure className='mx-4 px-2 py-2 my-4 bg-violet-700 rounded-lg'>
        CONTENT
        </figure>
        <figure className='mx-4 px-2 py-2 my-4 bg-cyan-500 rounded-lg'>
        CONTENT
        </figure>
        <figure className='mx-4 px-2 py-2 my-4 bg-violet-900 rounded-lg'>
        CONTENT
        </figure>
      </section>
      <div className='min-w-[50%] bg-black mx-auto'></div>
    </div>
    <Footer/>
  </>
}

export default Landing;