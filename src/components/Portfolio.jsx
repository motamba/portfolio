import React from "react";
import TravelAppUI from "../assets/portfolio/TravelAppUI.jpg";
import Ecstore from "../assets/portfolio/Ecstore.jpg";
import AdminDashboard from "../assets/portfolio/AdminDashboard.jpg";
import Resto from "../assets/portfolio/Resto.JPG";
import weatherApp from "../assets/portfolio/weatherApp.JPG";
import JsRestaurantSite from "../assets/portfolio/JsRestaurantSite.JPG";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TravelAppUI,
    },
    {
      id: 2,
      src: Ecstore,
    },
    {
      id: 3,
      src: AdminDashboard,
    },
    {
      id: 4,
      src: Resto,
    },
    {
      id: 5,
      src: weatherApp,
    },
    {
      id: 6,
      src: JsRestaurantSite,
    }
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my most recent projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
               
               <a href="https://github.com/motamba?tab=repositories" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"> Code</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;