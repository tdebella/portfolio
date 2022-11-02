import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#115173] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-4 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-black-1200">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-2xl font-bold">
            <p>
              Hi, there. <br /> Please take a look around!
            </p>
          </div>
          <div>
            <p className="text-1xl">
              I'm a Front-End and React Developer. I'm passionate about building
              excellent software that improves the lives of those around me.
              <br /> Seeking a position to utilize my skills and abilities
              focusing on delivering business solutions that offers professional
              growth while being resourceful, creative and flexible. <br />
              This site showcases my works, aesthetics, and my passion to
              create.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
