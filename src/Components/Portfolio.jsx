import React from "react";
import bootsrap from "../assets/portfolio/boostrap.jpeg";
import netflix from "../assets/portfolio/netflix.jpeg";
import gsap from "../assets/portfolio/gsap.jpeg";
import parallax from "../assets/portfolio/parallax.jpeg";
import bmi from "../assets/portfolio/bmi.jpeg";
import discount from "../assets/portfolio/discount.png";
import reactWeather from "../assets/portfolio/reactWeather.jpg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: "https://play-lh.googleusercontent.com/Lh0iAmTOq4CmtyJukMDWFRS9wEh64CL5GmtOw__zqfG36-dEdtAur1JXRzQ2lO8YoK8y=w526-h296-rw",
        demo:'https://play.google.com/store/apps/details?id=com.simplifykvk.kvk&pli=1',
     
    },
    {
      id: 2,
      src: "https://play-lh.googleusercontent.com/0tf-2N0Adtq9kzIvoQfGEoz5FTBvD_IyuVlAwe8NusR0oHRjsIndMoygdQ-2HAyE9Q8=w526-h296-rw",
        demo:'https://play.google.com/store/apps/details?id=com.crazyripples.bigdancecenter',
      
    },
    {
      id: 3,
      src: "https://play-lh.googleusercontent.com/tqT-X7BnIziDfXnZRlXkCuOY61zdDh1jIglr2wWae8Ho8kiOY_WktpH2N462Fn0WDw=w526-h296-rw",
        demo:'https://play.google.com/store/apps/details?id=com.citrus.citruspay',
      
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                style={{width:"100%",height:"300px"}}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">

              <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center text-white "
                >
                  Demo
                </a>
                
              
              </div>
            </div>
          ))}
        </div>
      </div>
     
    </div>
    
  );
};

export default Portfolio;