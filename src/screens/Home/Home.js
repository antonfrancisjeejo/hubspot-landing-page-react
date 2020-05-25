import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import TitlePage from "../Opening/TitlePage";
import Feature from "../Feature/Feature";
import Achievements from "../Achievements/Achievements";
import Advancement from "../Advancement/Advancement";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <TitlePage />
      <Feature />
      <Achievements />
      <Advancement />
      <Footer />
    </div>
  );
};

export default Home;
