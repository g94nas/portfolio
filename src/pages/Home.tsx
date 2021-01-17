import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Proyectos from "../components/Proyectos";
import ContenidoProyectos from "../components/Proyectos/ContenidoProyectos";
import SobreMi from "../components/SobreMi";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <SobreMi />
      <Proyectos />
      <ContenidoProyectos />
    </>
  );
};

export default Home;
