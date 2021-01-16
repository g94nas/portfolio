import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

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
            <ButtonLink to="/">Hello</ButtonLink>
          </div>
        </div>
        <div className="hero-second-half"></div>
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
  margin: 10rem 3rem;

  .hero-container {
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .hero-first-half {
    display: flex;
    flex-direction: column;
    flex: 0.5;

    h1 {
      font-size: 5rem;
      color: #047469;
      justify-content: flex-start;
      margin-bottom: 1.5rem;
    }

    h2 {
      font-size: 2rem;
      color: #272727;
      justify-content: flex-start;
      font-family: "Calibri";
    }
  }

  .hero-second-half {
    display: flex;
    flex-direction: column;
    flex: 0.5;
  }
`;

const ButtonLink = styled(Link)``;
