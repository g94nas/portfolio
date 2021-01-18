import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-scroll";
import { RiSendPlaneFill } from "react-icons/ri";
import { ReactComponent as Hexagons } from "../../assets/hexagons.svg";

const Hero: React.FC = () => {
  return (
    <MainWrapper id="home">
      <div className="hero-container">
        <div className="hero-first-half">
          <h1>Guido Nasini</h1>
          <h2>
            Soy un front-end developer autodidacta orientado al desarrollo de
            web apps con interfaces limpias y experiencias de usuario
            memorables.
          </h2>
          <button>
            <div>
              <RiSendPlaneFill />
            </div>
            <ButtonLink to="contacto">Contactame</ButtonLink>
          </button>
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
      font-weight: 300;
      margin-bottom: 1.5rem;
      margin-bottom: 5rem;
    }

    button {
      display: flex;
      align-items: center;
      width: 225px;
      border: none;
      font-family: "Neutra";
      background-color: #fff;
      border-radius: 2px;
      height: 3rem;
      border-radius: 4px;
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      cursor: pointer;
      transition: 0.5s;
      outline: none;

      &:hover {
        transform: translateY(-7px);
        transition: 0.5s;
      }

      div {
        width: 3rem;
        height: 100%;
        background-color: #047469;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.3rem;
        border-radius: 3px;

        svg {
          display: flex;
          justify-content: center;
          fill: #fff;
          width: 2rem;
          height: 2rem;
        }
      }
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
  margin: 0;
  font-size: 1.5rem;
  color: #000;
`;
