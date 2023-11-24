import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Cards } from "../components/Cards";
import { Carousal } from "../components/Carousal";

export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Carousal></Carousal>
      <div className="m-3">
      <Cards></Cards>
      <Cards></Cards>
      <Cards></Cards>
      </div>
      
      <Footer></Footer>
    </>
  );
};
