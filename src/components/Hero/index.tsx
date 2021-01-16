import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { RiSendPlaneFill } from "react-icons/ri";
import { ReactComponent as Hexagons } from "../../assets/hexagons.svg";

const Hero: React.FC = () => {
  return (
    <MainWrapper>
      <div className="hero-container">
        <div className="hero-first-half">
          <h1>Guido Nasini</h1>
          <h2>
            Soy un front-end developer autodidacta de Argentina orientado al
            desarrollo y a la creación de web apps con interfaces limpias y
            experiencias de usuario memorables.
          </h2>
          <div className="button-div">
            <div className="button-border">
              <RiSendPlaneFill />
              <ButtonLink to="/">Contactame</ButtonLink>
            </div>
          </div>
        </div>
        <div className="hero-second-half">
          <Hexagons />
          <div className="circle"></div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Hero;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  .hero-container {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 12rem 7rem;
  }

  .hero-first-half {
    display: flex;
    flex-direction: column;
    flex: 0.5;

    h1 {
      font-size: 6rem;
      color: #047469;
      justify-content: flex-start;
      margin-bottom: 1rem;
    }

    h2 {
      font-size: 2rem;
      color: #272727;
      justify-content: flex-start;
      font-family: "Calibri Light";
      margin-bottom: 1.5rem;
      margin-bottom: 3rem;
    }
  }

  .hero-second-half {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 0.5;

    div {
      position: absolute;
      width: 300px;
      height: 300px;
      background-color: #047469;
      opacity: 0.9;
      border-radius: 10rem;
    }
  }

  .button-div {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
  }

  .button-border {
    display: flex;
    flex-direction: row;
    width: fit-content;
    height: 40px;
    align-items: center;
    justify-content: center;
    justify-self: flex-start;
    border-top: 3px solid #047469;
    border-right: 3px solid #047469;
    border-bottom: 3px solid #047469;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      transform: translate(5px, -5px);
      transition: 0.3s;
    }

    svg {
      display: flex;
      background-color: #047469;
      color: #fff;
      width: 40px;
      height: 105%;
      flex: 0.2;
      padding-left: 5px;
      padding-right: 5px;
    }
  }
`;

const ButtonLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #272727;
  justify-self: flex-start;
  width: 100%;
  flex: 0.9;
  padding-left: 0.5rem;
  font-size: 1.2rem;
  transition: 0.3s;
`;
