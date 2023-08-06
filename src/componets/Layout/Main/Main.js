import React from "react";
import Promo from "../Promo/Promo";
import AboutProject from "../AboutProject/AboutProject";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Header from "../../General/Header/Header";
import Footer from "../../General/Footer/Footer";


import './Main.css';

function Main() {

  return (
    <>
          <main className="main">
            <Promo></Promo>
            <AboutProject></AboutProject>
            <Techs></Techs>
            <AboutMe></AboutMe>
          </main>
    <Footer>
    </Footer>
      </>
  );
}
export default Main;
