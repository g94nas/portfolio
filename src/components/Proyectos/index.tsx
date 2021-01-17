import React from "react";
import styled from "styled-components/macro";
import { ReactComponent as Hexagon } from "../../assets/hexagons.svg";

const Proyectos: React.FC = () => {
  return (
    <MainWrapper>
      <div className="container">
        <h1>Proyectos</h1>
      </div>
      <Hexagon />
    </MainWrapper>
  );
};

export default Proyectos;

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  svg {
    position: absolute;
    transform: rotate(70deg);
    right: 3rem;
    top: 3rem;
    width: 300px;
    height: 300px;
  }

  .container {
    margin: 12rem 0rem 3rem 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
      position: relative;
      display: flex;
      font-size: 8rem;
      color: #047469;
      margin-bottom: 1rem;

      ::after {
        position: absolute;
        -webkit-text-stroke: 3px #047469;
        -webkit-text-fill-color: transparent;
        opacity: 0.2;
        content: "O.2";
        font-family: "Calibri Light";
        font-weight: 300;
        font-size: 15rem;
        z-index: -10;
        bottom: 1rem;
        left: -4rem;
      }
    }
  }
`;
