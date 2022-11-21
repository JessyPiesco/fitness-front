import React from "react";
import { NavLink } from "react-router-dom";


const Home = () => {
  return (
    <>
      <div id="homePage">
        <h3 className="titlephrase">Suit Up SuperHero</h3>
      </div>
      <div id="background">
          <img
            src="https://townsquare.media/site/442/files/2013/01/jla-lineup.jpg?w=980&q=75"
            alt="SuperHero's"
          />
        </div>
    </>
  );
};

export default Home;
