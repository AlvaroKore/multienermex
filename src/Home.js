import React from "react";
import Navbar from "./component/Navbar/Navbar";
import Banner from "./component/Banner/Banner";
import About from "./component/About";
import Service from "./component/Service";
import Portfolio from "./component/Portfolio/Portfolio";
import Testimonial from "./component/Testimonial/Testimonial";
import Clientslogo from "./component/Clientslogo";
import Blog from "./component/Blog/Blog";
import MapContainer from "./component/Map";
import Contact from "./component/Contact";
import Skill from "./component/Skill/Skill";
import Footer from "./component/Footer";
import jhonData from "./component/jhonData";

export const Home = () => (
  <div className="body_wrapper">
    <Banner jhonData={jhonData} />
    {/* <About aClass="about_area" jhonData={jhonData} />
    <Service wClass="work_area" jhonData={jhonData} />
    <Portfolio />
    <Skill />
    <Testimonial />
    <Clientslogo />
    <Blog />
  */}
    {/* <MapContainer /> */}
    {/* <a target={"_blank"} href="https://api.whatsapp.com/send?phone=525513255430&text=mensaje prueba desde link de ppagina">Wats</a>
  <a target={"_blank"} href="https://api.whatsapp.com/send?phone=525546096735&text=mensaje prueba desde link de ppagina">Wats2</a> */}
    <Contact jhonData={jhonData} />
    <Footer jhonData={jhonData} />
  </div>
);
