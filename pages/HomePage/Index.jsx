import React from "react";
import Navbar from "../Common/Navbar";
import Hero from "../Components/HomeComponents/Hero";
import Footer from "../Common/Footer";
import LoveStory from "../Common/LoveStory";
import Immigration from "../Common/Immigration";
import Writetous from "../Common/Writetous";
import Gifts from "../Common/Gifts";
import Locationed from "../Common/Location";

const Index = () => {
  return (
    <>
      <Navbar />
      <Hero />  
      <LoveStory /> 
      <Immigration />
      <Writetous />
      <Gifts />
      <Locationed />   
      <Footer />
    </>
  );
};

export default Index;
