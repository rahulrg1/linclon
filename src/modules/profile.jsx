import React ,{useState} from "react";
import Avatar from "../assets/images/logo512.png";
import Footer from "./footer";

const Profile = () => {
  const [uploadShown,setUploadShown]=useState(false);
  let ifUploadShown=()=>{
    if(uploadShown)
      setUploadShown(false);
    else
      setUploadShown(true);
  }
  return (
    <>
    <div className="mx-[5%] my-[2rem] rounded-lg bg-white dark:bg-gradient-to-r dark:from-[rgb(50,50,50)] dark:to-[rgb(40,40,40)]">
      <div className="flex xs:flex-col md:flex-row dark:text-white mx-[2rem] pb-[5rem] gap-10 font-bold">
        <section className="flex flex-col items-end my-10 basis-[30%] shrink-0 xs:mx-auto md:mx-0" >
          <img src={Avatar} alt="avatar" height="200px" width="200px" className="border-2 border-black rounded-full"/>
          <input name="avatar" style={uploadShown?{}:{display:"none"}} type="file" className="file:rounded-full file:px-3 file:my-2 "/>
          <button type="submit" style={uploadShown?{}:{display:'none'}} onClick={ifUploadShown} className="my-4 mr-4 px-2 py-1 bg-cyan-500 text-white rounded-full">Upload Profile Photo</button>
          <button type="submit" style={uploadShown?{display:'none'}:{}} onClick={ifUploadShown} className="my-4 mr-4 px-2 py-1 bg-cyan-500 text-white rounded-full">Update Profile Photo</button>
        </section>  
        <form className=" xs:mx-auto md:ml-[10%] md:mt-[15%] xs:min-w-[10rem] md:min-w-[25rem] text-lg shrink dark:text-neutral-400">
          <label>Name</label>
          <br/>
          <input placeholder="name" className="bg-neutral-200 text-black my-2 md:min-w-[100%] rounded-[.25rem] px-3" />
          <br/>
          <label>Bio</label>
          <br />
          <textarea className="bg-neutral-200 text-black h-[10rem] md:min-w-[100%] my-2 rounded-[.25rem] px-3" />
          <br />
          <label>Skills</label>
          <br />
          <textarea className="bg-neutral-200 text-black my-2 md:min-w-[100%] rounded-[.25rem] px-3" /> 
          <br/>
          <label>Occupation</label>
          <br />
          <input className="bg-neutral-200 text-black my-2 md:min-w-[100%] rounded-[.25rem] px-3" />
          <br />
          <label>Location</label>
          <br />
          <input placeholder="country,state,city" className="bg-neutral-200 my-2 md:min-w-[100%] rounded-[.25rem] px-3"/>
          <br />
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};
export default Profile;
