import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import flutter from "../assets/flutter.png";
import figma from "../assets/figma.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import bloc from "../assets/bloc.png";



const Experience = () => {
  const techs = [
    
    {
      id: 1,
      src: flutter,
      title: "Flutter",
      style: "shadow-white",
    },
    
    {
      id: 2,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 3,
      src: firebase,
      title: "Firebase",
      style: "shadow-yellow-400",
    },
    {
      id: 4,
      src: bloc,
      title: "Bloc",
      style: "shadow-blue-400",
    },
    {
      id: 5,
      src: figma,
      title: "Figma",
      style: "shadow-green-400",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;