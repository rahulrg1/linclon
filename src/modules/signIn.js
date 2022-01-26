import { Link } from "react-router-dom";
import GitHub from "../assets/images/GitHub-Mark.png";

const signIn = () => {
  return (
    <>
      <div className="h-[100%] w-[100%] fixed bg-black opacity-50 "></div>
      <section className=" font-bold relative rounded-[.5rem] max-w-[25rem] mx-auto mt-[5rem] bg-white dark:bg-black dark:text-white text-lg">
        <Link to="/">
          <span className=" dark:text-white absolute right-2 hover:cursor-pointer">
            &times;
          </span>
        </Link>
        <br /> 
        <img className="mx-auto rounded-[45px] mb-1" src={GitHub} alt="GitHub" height="90px" width="90px" />
        <Link to={"/"} className="dark:bg-slate-500 block rounded-[.3rem] bg-black opacity-70 text-white text-center hover:opacity-100 max-w-[13rem] mx-[auto]" >
          Continue with GitHub
        </Link>
        <section className="flex flex-col gap-2 mx-auto max-w-[15rem] my-5">
          <select className="rounded-full px-3 bg-slate-500">
            <option value="0">User Type ?</option>
            <option value="1">Creater</option>
            <option value="2">Contributor</option>
          </select>
          <label className="mx-auto">Email :</label>
          <input type="email" placeholder="email@gmail.com" className="rounded-[.5rem] bg-slate-500 px-2" />
          <a href="#" className="">forget email?</a>
          <submit type="submit" className="mx-auto bg-blue-500 py-1 px-2 hover:bg-zinc-900 cursor-pointer text-white rounded-md">
            Sign In
          </submit>
        </section>
        <p className="font-normal text-center mx-[3rem] dark:text-white text-slate-500 mt-10">
          *by continuing this you can also create a new account with GitHub
        </p>
      </section>
    </>
  );
};
export default signIn;
