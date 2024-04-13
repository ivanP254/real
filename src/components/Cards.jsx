import { BadgeCheckIcon, ChipIcon } from '@heroicons/react/solid';
import React from "react";
import './cards.css';
import { skills } from "../data";
import RevealOnScroll from "./Effect.jsx";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';


export function Cards() {
  const percentage = 66;
  return (
    <section id="cards" className="container px-5 py-10 mx-auto">
      <RevealOnScroll>
      <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Скилы &amp; Технологии
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
            ipsa delectus eum quo voluptas aspernatur accusantium distinctio
            possimus est.
          </p>
        </div>
        </RevealOnScroll>

        <RevealOnScroll>
<div className="container items-center justify-center flex flex-wrap w-[500px]">
    {skills.map((skill) => (
                <div key={skill} className="card relative h-[280px] w-[200px] -mx-5 bg-gray-800  rounded-2xl drop-shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:drop-shadow-[0_0_15px_#ff9618] hover:transition-all hover:-translate-y-[20px] transform-gpu">
                  <div className="p-4 group h-full items-center">
                    <h3 className="title absolute text-white font-medium left-[20px] top-[15px]">
                    <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                      {skill.name}
                    </h3>
                    <div className="bar absolute h-[5px] w-[150px] left-[20px] top-[100px]">
                    <div className="emptybar  h-full w-full bg-slate-900"></div>
                    <h3 className="title absolute opacity-0 group-hover:opacity-100 text-white font-medium ml-2 mt-2">
                      {skill.state}
                    </h3>
              <div className="filledbar absolute top-0 z-30 w-0 h-full bg-gradient-to-r from-blue-400 via-orange-400 to-yellow-400 transition-[1s] group-hover:w-[30%] duration-1000">
              </div>
              </div>
              <div className="circle absolute top-[150px] left-[50px] w-[80%] h-[50%]">
              <h3 className="title opacity-0 group-hover:opacity-100 absolute text-white font-bold top-[35%] left-[30%]">
                      {skill.progress}
              </h3>
              {/* <CircularProgressbar className='w-[100px] h-[100px] opacity-0 transition-[1s] duration-1000 group-hover:opacity-100 text-white '
                  value={skill.progress}
                  text={`${skill.progress}%`}
                  styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,
                    transition: 'stroke-dashoffset 0.5s ease 0s',
                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(62, 152, 199, ${skill.progress / 100})`,
                    textColor: 'white',
                    
                  })}
                /> */}
            </div>
                </div>
                </div>
              ))}
 </div>
 </RevealOnScroll>
 </section>
  );
}