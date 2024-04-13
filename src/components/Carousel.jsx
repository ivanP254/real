import React from "react";
import RevealOnScroll from "./Effect";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { projects } from "../data";
import { ArrowRightIcon, ArrowLeftIcon, CodeIcon } from '@heroicons/react/solid';


export function Carousel() {
  const [[activeIndex, direction], setActiveIndex] = useState([0, 0]);
  // we want the scope to be always to be in the scope of the array so that the carousel is endless
  const indexInArrayScope =
    ((activeIndex % projects.length) + projects.length) % projects.length;

  // so that the carousel is endless, we need to repeat the items twice
  // then, we slice the the array so that we only have 3 items visible at the same time
  //project.images = item
  //{visibleItems.map((item) => {
  const visibleItems = [...projects, ...projects].slice(
    indexInArrayScope,
    indexInArrayScope + 3
  );
  
  const handleClick = (newDirection) => {
    setActiveIndex((prevIndex) => [prevIndex[0] + newDirection, newDirection]);
  };

  return (
    <section id="carousel" className="flex flex-col items-center justify-center">
         <RevealOnScroll>
         <div className="container px-5 py-10 mx-auto text-center lg:px-40">
          <div className="flex flex-col w-full mb-10">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Приложения, которые я создал
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            В проектах применялись множество различных идей 
            и спользовалос несколько фрймворков для повышения удоства разработки!!!
          </p>
          </div>
        </div>
        </RevealOnScroll>

        <RevealOnScroll>
      <div id="wrapper" className="relative flex max-md:flex-wrap z-0 items-center justify-center w-full mb-10 md:h-[300px]">
        {/*AnimatePresence is necessary to show the items after they are deleted because only max. 3 are shown*/}
        <AnimatePresence mode="popLayout" initial={false}>
        
          {visibleItems.map((project) => {
            
            // The layout prop makes the elements change its position as soon as a new one is added
            // The key tells framer-motion that the elements changed its position
            return (

              <motion.div
                className="cards rounded-[90%] h-full flex justify-center items-center max-md:w-2/3"
                key={project.image}
                layout
                custom={{
                  direction,
                  position: () => {
                    if (project === visibleItems[0]) {
                      return "left";
                    } else if (project === visibleItems[1]) {
                      return "center";
                    } else {
                      return "right";
                    }
                  }
                }}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1 }}
              >
                <a className="Send_site z-20 h-full"
                 href={project.link}>
                  <div className="px-4 rounded-2xl py-5 absolute z-10 w-full h-full border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                  </div>
                <img className="rounded-2xl z-0 w-full h-full object-cover object-center drop-shadow-[0_0_15px_rgba(161,75,255,0.7)]" src={project.image}/>
                </a>
                {/* blur-[2px] */}
                {/* <circle className="absolute z-0 rounded-xl h-[90%] w-[90%] bg-purple-500 blur-2xl"></circle> */}
                {/* rounded-[90%] */}
              </motion.div>
              
            );
            
          })}
        
        </AnimatePresence> 
       
        <motion.button onClick={() => handleClick(-1)}>
          <div id="block ArrowLeft" className="absolute max-md:top-0 max-md:h-1/3 max-md:w-full left-0 md:top-0 z-10 md:w-1/3 md:h-full"></div>
        </motion.button>

        <motion.button onClick={() => handleClick(1)}>
          <div id="block ArrowRight" className="absolute max-md:bottom-0 max-md:h-1/3 max-md:w-full right-0 md:top-0 z-10 md:w-1/3 md:h-full"></div>
        </motion.button> 
          
      </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className=" items-center">
          <motion.button whileTap={{ scale: 0.8 }} onClick={() => handleClick(-1)}>
          <ArrowLeftIcon className=" w-6 h-max mx-10" />
          </motion.button>
          <motion.button whileTap={{ scale: 0.8 }} onClick={() => handleClick(1)}>
          <ArrowRightIcon className=" w-6 h-max mx-10" />
          </motion.button>
        </div>
      </RevealOnScroll>
    </section>
    
  );
}

const variants = {
  enter: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 };
  },
  center: ({ position, direction }) => {
    return {
      scale: position() === "center" ? 1 : 0.7,
      x: 0,
      zIndex: getZIndex({ position, direction }),
      filter: position() === "center" ? "blur(0px)" : "blur(2px)",
      opacity: position() === "center" ? 1 : 0.5,
    };
  },
  exit: ({ direction }) => {
    return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 };
  }
};

function getZIndex({ position, direction }) {
  const indexes = {
    left: direction > 0 ? 2 : 1,
    center: 3,
    right: direction > 0 ? 1 : 2
  };
  return indexes[position()];
}
