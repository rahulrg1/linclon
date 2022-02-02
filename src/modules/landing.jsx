import React from 'react';
import Footer from './footer';

//icons
import programming from "../assets/images/home_icons/programming.png"
import connecting from "../assets/images/home_icons/connectingWorld.png"
import team from "../assets/images/home_icons/team.png"
import creator from "../assets/images/home_icons/git.png"
import findProject from "../assets/images/home_icons/findProject.png"
import findProfile from "../assets/images/home_icons/findProfile.png"
import feedback from "../assets/images/home_icons/feedback.png"

const Landing = () => {

  const language=[["JAVASCRIPT"],["C++"],["BLOCKCHAIN"],["REACT Js"],["ANGULAR Js"],["CSS"],["MERN"],["MEAN"],["MONGO DB"],["PYTHON"],["JAVA"]];
return <>
   <div className='my-[2rem] mx-[5%] py-[3rem] font-bold bg-white rounded-lg dark:bg-gradient-to-r dark:from-black to-gray-900 dark:text-white overflow-hidden'>
      <section className='flex flex-col md:text-2xl xs:text-thin mb-[5rem]'>
        <article className='flex'>
          <p className='grow self-center  w-[30%] text-cyan-500 mx-[10%]'>Build your First Project with LINCLON as Contributor And Execute / improve your skills</p>
          <img alt="" src={programming} className='w-[50%] rounded-full'/>
        </article>
        <article className='flex'>
          <img alt="" src={connecting} className='w-[50%] rounded-full'/>
          <p className='grow self-center  w-[30%] text-cyan-500 mx-[10%]'>Connect From Throughout the World</p>
        </article>
        <article className='flex'>
          <p className='grow self-center  w-[30%] text-cyan-500 mx-[10%]'>Create Your Own Team</p>
          <img alt="" src={team} className='w-[50%] rounded-full'/>
        </article>
        <article className='flex'>
          <img alt="" src={creator} className='w-[50%] rounded-full'/>
          <p className='grow self-center  w-[30%] text-cyan-500 mx-[10%]'>Share your idea as a creator</p>
        </article>
        <article className='flex ml-[10%]'>
          <img alt="" src={findProfile} className=' w-[30%] rounded-full'/>
          <img alt="" src={findProject} className=' w-[30%] rounded-full'/>
          <img alt="" src={feedback} className='w-[30%] rounded-full'/>
        </article>
        <p className='grow text-cyan-500 mx-[10%] mt-[2rem] text-center'>And Many More...!</p>
      </section>
     
      <p className='ml-[5%] my-5 text-2xl'>Search projects by specific Languages / Technologies :</p>
      <section className='flex flex-row gap-5 mx-[5%] border-2 rounded-lg flex-wrap'>
        { language.map((card)=>{
          return (
          <figure className='mx-4 px-2 py-2 my-4 bg-cyan-500 rounded-[0.25rem]'>
           {card}
          </figure>
        ); })}
      </section>
      <p className='ml-[5%] my-5 text-2xl'>Most Frequently Asked Questions (FAQs) :</p>
      <div className='flex flex-col gap-2 px-5 py-3 text-[1.25rem] text-black mx-[5%] border-2 rounded-lg '>
          <select className='border-2 rounded-lg px-5 py-1'>
            <option value="0">what Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, temporibus. ?</option>
          </select>
          <select className='border-2 rounded-lg px-5 py-1'>
            <option value="0">what?</option>
          </select>
          <select className='border-2 rounded-lg px-5 py-1'>
            <option value="0">what?</option>
          </select>
          <select className='border-2 rounded-lg px-5 py-1'>
            <option value="0">what?</option>
          </select>
          <select className='border-2 rounded-lg px-5 py-1'>
            <option value="0">what?</option>
          </select>
      </div>
      <article className='bg-cyan-500 rounded-full mx-[43%] min-w-fit px-2 py-2 mt-10 text-center'>
        <a href="#navTop">Back to Top</a>
      </article>
    </div>
    
    <Footer/>
  </>
}

export default Landing;