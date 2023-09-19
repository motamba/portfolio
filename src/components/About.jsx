import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My name is Modou Tamba, a young ambitious, hardworking, focused, and time consioused frontend developer.
          I have the ability to take up full stack projects from scratch to completion. I have worked with
          several Web Application using technologies both frontend and backend which includes, ReactJs, Tailwind CSS,
          BootStrap CSS, NodeJS, ExpressJs and Laravel. I have also worked with databases like MySQL and MongoDB.
        </p>

        <br />

        <p className="text-xl">
          I am developer who is always eager to learn new things and be creative with what I have learned to create
          something meaningful out of it. 
        </p>
      </div>
    </div>
  );
};

export default About;