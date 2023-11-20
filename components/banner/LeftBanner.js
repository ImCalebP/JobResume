import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Computer engineering", "Front end developper", "AI developper"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        
        <h1 className="text-6xl font-bold text-white">
          Hello, my name is <span className="text-designColor capitalize">Caleb Paradis</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Welcome to my tech world! I graduated in Computer Engineering at University of Ottawa and have a  passion 
        for AI and front-end development. From computer architecture to crafting intuitive interfaces and dealing with data, I'm here to explore and innovate 
        in the world of technology. I have a solid understanding of computers from the transistor to the front end user interface.  


        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner