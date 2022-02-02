import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";

//icons :
import moon from "../assets/images/110827_moon_icon.png";
import sun from "../assets/images/icons8-sun-48.png";
import search from "../assets/images/314807_search_icon.png";
import GitHub from "../assets/images/GitHub-Mark.png";
import Linclon from "../assets/images/Capture.JPG";


  const Nav = () => {
    
    const [themeIcon, setThemeIcon] = useState(false);
    let themeChange = () => {
      if(themeIcon)
      {
        setThemeIcon(false);
        document.documentElement.classList.remove("dark");
        document.body.style.backgroundImage = "linear-gradient(rgb(192,192,192),rgb(192,192,192))";
      }
      else
      { setThemeIcon(true);
      document.documentElement.classList.add("dark");
      document.body.style.backgroundImage = "linear-gradient(rgb(0,0,0),rgb(20,20,20))";
      }
  };

  const navigation = [
    ["/", "Home"],
    ["/about", "About"],
    ["/projects","Projects"]
  ];

  const [signInModal,setSignInModal]=useState(false);
  const isSignInModal=()=>{
    if(signInModal)
    setSignInModal(false);
    else
    setSignInModal(true);
  }
// close Modal from overlay 
  let modal=document.getElementById('modalId');
  window.onclick=function(event){
    if(event.target === modal)
    {
     modal.style.display="none";
     isSignInModal(false);
    }
  }
  return (
    <>
      {/* signIn Modal */}
      <div id="modalId" style={signInModal?{}:{display:"none"}} className="z-[10] mt-[3.25rem] h-[100%] w-[100%] fixed bg-[rgba(0,0,0,0.6)]">
      <section className="relative font-bold rounded-[.5rem] max-w-[25rem] mx-auto mt-[5rem] bg-white dark:bg-black dark:text-white text-lg">
          <span onClick={isSignInModal} className=" dark:text-white absolute right-2 cursor-pointer">
            &times;
          </span>
        <br /> 
        <img className="mx-auto rounded-[45px] mb-1" src={GitHub} alt="GitHub" height="90px" width="90px" />
        <Link to={"/"} onClick={isSignInModal} className="dark:bg-zinc-900 block hover:text-green-900 rounded-[.3rem] bg-black text-white text-center max-w-[13rem] mx-[auto]" >
          Continue with GitHub
        </Link>
        <section className="flex flex-col gap-2 mx-auto max-w-[15rem] my-5">
          <select className="rounded-full px-3 text-black border-2">
            <option value="0">User Type ?</option>
            <option value="1">Creater</option>
            <option value="2">Contributor</option>
          </select>
          <label className="mx-auto">Email :</label>
          <input type="email" placeholder="email@gmail.com" className="rounded-[.5rem] text-black border-2 px-2" required/>
          <a href="/" className="mr-32 hover:text-green-900">forget email?</a>
          <submit type="submit" className="mx-auto bg-cyan-500 py-1 px-2 hover:text-black cursor-pointer text-white rounded-md">
            Sign In
          </submit>
        </section>
        <p className="font-thin text-center mx-[3rem] dark:text-white text-slate-500 mt-10">
          *by continuing this you can also create a new account with GitHub
        </p>
      </section>
      </div>
     {/*Modal end */}

      <nav id="navTop" className="text-white rounded-full bg-gradient-to-r from-cyan-500 via-violet-900 to-violet-900 py-2 xs:overflow-auto ">
        <ul className="flex flex-row gap-6 text-xl ">
         <img src={Linclon} alt="" className="rounded-full block xs:w-[100px] md:w-[150px] animate-pulse" height="50px"></img>
          {/* <span className="ml-2"></span> */}
          {navigation.map(([path, name]) => {
            return (
              <li className="dark:hover:text-slate-900 px-3 py-1">
                <Link to={path}>{name}</Link>
              </li>
            );
          })}
          <section className="grow-[2] shrink"></section>
          <article className="flex animate-pulse grow rounded-full min-w-[4rem] bg-white px-1 border-2 border-slate-400 text-black">
            <img src={search} width="25px" alt="" />
            <input
              className=" grow placeholder:italic focus:outline-none rounded-full pl-1 min-w-[2rem]"
              type="text"
              placeholder="Search..."
            />
          </article>
          <li className=" py-1 px-2 rounded-[.2em] bg-[rgba(0,0,0,0.3)] text-[1rem]">
            <button onClick={isSignInModal}>Login</button>
          </li>
          <article onClick={themeChange} className="cursor-pointer shrink-0">
            <img
              src={themeIcon?sun:moon}
              alt=""
              height="25px"
              width="30px"
              className="animate-bounce"
            />
          </article>
          <li className=" dark:hover:text-[rgb(10,11,12)] py-1 pr-5">
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
export default Nav;
