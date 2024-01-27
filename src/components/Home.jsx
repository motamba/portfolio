import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroImage2 from "../assets/heroImage2.png";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Software Developer
          </h2>
          <p className="text-white py-4 max-w-md">
              Strong in design and integration with intuitive problem-solving skills. Proficient in  JAVASCRIPT, API INTEGRATION and skilled in JAVA, C#, PYTHON, DATA STRUCTURES AND ALGORITHMS,  RELATIONAL and Non-RELATIONAL DATABASES.
              Passionate about learning new skills, implementing and launching new projects. Ability to translate business requirements into technical solutions. 
              Looking for an opportunity work as a software developer with a reputed firm driven by technology.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage2}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;