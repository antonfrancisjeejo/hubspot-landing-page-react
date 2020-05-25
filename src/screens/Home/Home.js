import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Titlepage from "../Opening/Titlepage";
import Feature from "../Feature/Feature";
import Achievements from "../Achievements/Achievements";
import Advancement from "../Advancement/Advancement";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Titlepage />
      <Feature />
      <Achievements />
      <Advancement />
      <Footer />
    </div>
  );
};

export default Home;
