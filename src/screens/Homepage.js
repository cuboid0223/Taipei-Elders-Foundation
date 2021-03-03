import React from "react";

import Banner from "../components/Banner";
import About from "../components/About";
import ConnectToUs from "../components/ConnectToUs";
import Donate from "../components/Donate";
import Footer from "../components/Footer";
const Homepage = () => {
  return (
    <div className="homepage">
      <Banner />
      <About />
      <ConnectToUs />
      <Donate />
      <Footer />
    </div>
  );
};

export default Homepage;
