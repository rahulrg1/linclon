import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
  const navigationFooter = [
    ["/home", "Home"],
    ["/about", "About"],
    ["/projects","Projects"],
    ["/profile","Profile"]
  ];
  return (
    <>
      <footer  className="h-[100%] w-[100%] text-white bg-gray-800 font-bold">
        <ul className="flex flex-col items-center">
          {
            navigationFooter.map(([path,name])=>{
              return (
              <li className="">
              <Link to={path}>{name}</Link>
              </li>
              );
            })
          }
        </ul>
        <p className="text-center font-thin">&#169; Copyright content</p>
        
      </footer>
    </>
  );
};
export default Footer;
