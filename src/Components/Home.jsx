import React from "react";
import HeroImage from "../assets/heroImage .jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <br /><br /><br /><br /><br />
          <h2 className="text-4xl sm:text-7xl font-bold text-white mt-5">
            Flutter Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I'm Rinshad, a skilled Flutter Developer with 3 years of experience, I bring a strong technical foundation and a passion for solving complex problems. I specialize in front-end development using Flutter, with a proven ability to troubleshoot and resolve intricate technical issues. My expertise spans across developing scalable, maintainable, and well-documented code, ensuring seamless user experiences.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
       

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            
            style={{marginTop:"0px",width:"350px",marginLeft:"50px",borderRadius:"10px"}}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;