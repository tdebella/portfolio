import React from "react";

//images
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import TypeScript from "../assets/typescript.png";
import Node from "../assets/node.png";
import Firebase from "../assets/firebase.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";
import Bootstrap from "../assets/bootstrap.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#115173] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto pt-12 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-3xl font-bold inline border-b-4 border-pink-1200 ">
            Skills
          </p>
          <p className="py-4">
            I'm a web developer with a passion for learning and creating. I'm
            self-motivated, team-player, and always learning for growth and
            development. These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={TypeScript} alt="HTML icon" />
            <p className="my-4">TypeScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Bootstrap} alt="HTML icon" />
            <p className="my-4">Bootstrap</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Tailwind} alt="HTML icon" />
            <p className="my-4">Tailwind</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">Node JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="HTML icon" />
            <p className="my-4">Mongo DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Firebase} alt="HTML icon" />
            <p className="my-4">Firebase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
