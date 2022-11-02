import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#115173]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-4 pt-14 flex flex-col justify-center h-full">
        <p className="text-yellow-500 pt-12 text-4xl">
          <b>Hi,</b> I'm
        </p>
        <h1 className="text-3xl pt-8 sm:text-5xl font-bold text-[#030f1d]">
          Tesfaye Robelle
        </h1>
        <br />
        <h2 className="text-2xl pt-3 sm:text-4xl font-normal text-[#020b22]">
          Front-End Developer.
        </h2>
        <p className="text-[#dadff0] pb-3 py-4 max-w-[400px]">
          I'm building responsive websites and apps with React & MERN stack.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-yellow-500 hover:border-yellow-300">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
