import React from "react";
import styled from "styled-components";
import { ReactComponent as Hexagons } from "../../assets/hexagons.svg";

const SobreMi = () => {
  return (
    <MainWrapper id="sobre-mi">
      <div>
        <h1>Sobre Mí</h1>
        <h2>
          Soy un front-end developer autodidacta apasionado por el aprendizaje y
          el desarrollo. Actualmente disfruto del uso de React y Redux para la
          creación de web apps. Me encuentro estudiando Typescript, y a futuro
          quiero incursionar en el mundo del backend.{" "}
        </h2>
      </div>
      <Hexagons />
    </MainWrapper>
  );
};

export default SobreMi;

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 10rem 7rem;
    margin-bottom: 3rem;

    h1 {
      position: relative;
      display: flex;
      font-size: 8rem;
      color: #047469;
      margin-bottom: 1rem;
      width: 100%;

      ::after {
        position: absolute;
        -webkit-text-stroke: 3px #047469;
        -webkit-text-fill-color: transparent;
        opacity: 0.2;
        content: "O.1";
        font-family: "Calibri Light";
        font-weight: 300;
        font-size: 15rem;
        z-index: -10;
        bottom: 4rem;
        left: 15rem;
      }
    }

    h2 {
      display: flex;
      font-size: 2.3rem;
      font-family: "Calibri Light";
      font-weight: 200;
      color: #272727;
    }
  }

  svg {
    position: absolute;
    width: 300px;
    height: 300px;
    transform: rotate(10deg);
    left: -5rem;
    top: -2rem;
  }
`;
