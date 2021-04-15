import React from "react";
import styled from "styled-components";
import { ReactComponent as Hexagons } from "../../assets/hexagons.svg";

const SobreMi = () => {
  return (
    <MainWrapper id="sobre-mi">
      <div>
        <h1>About Me</h1>
        <h2>
          I'm a self-taught Fullstack developer from Argentina with a passion
          for learning and developing web apps. I've experience with React |
          Next | GraphQL | CSS | HTML | MongoDb | Node. I'm focused on learning
          more about SQL, AWS, Typescript and improving my testing abilities.{" "}
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
    margin: 12rem 7rem;
    margin-bottom: 3rem;

    @media screen and (max-width: 768px) {
      margin: 12rem 2rem;
      margin-bottom: 5rem;
    }

    h1 {
      position: relative;
      display: flex;
      font-size: 8rem;
      color: #047469;
      margin-bottom: 1rem;
      width: 100%;

      @media screen and (max-width: 768px) {
        font-size: 4rem;
        margin-top: 2rem;
      }

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

        @media screen and (max-width: 768px) {
          font-size: 9rem;
          left: 20%;
          bottom: 1rem;
        }
      }
    }

    h2 {
      display: flex;
      font-size: 2.3rem;
      font-family: "Calibri Light";
      font-weight: 200;
      color: #272727;

      @media screen and (max-width: 768px) {
        font-size: 1.25rem;
      }
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
