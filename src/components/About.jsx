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
          I am a dedicated, organized and methodical individual. I have good interpersonal skills, am an excellent 
          team worker and am keen and very willing to learn and develop new skills. I am reliable and dependable and
          often seek new responsibilities within a wide range of employment areas. I have an active and dynamic approach 
          to work and getting things done. I am determined and decisive. I identify and develop opportunities. 
        </p>

        <br />

        <p className="text-xl">
          I have worked with several Web Applications, UI and UX using technologies both frontend and backend which includes, ReactJs, Tailwind CSS,
          BootStrap CSS, NodeJS, ExpressJs, Laravel etc. I have also worked with databases like MySQL and MongoDB.
        </p>
      </div>
    </div>
  );
};

export default About;