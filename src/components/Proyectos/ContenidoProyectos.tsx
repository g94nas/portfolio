import React from "react";
import styled from "styled-components/macro";
import { GoMarkGithub } from "react-icons/go";
import { IoMdOpen } from "react-icons/io";
import Productivia from "../../assets/Productivia.jpg";

const ContenidoProyectos: React.FC = () => {
  return (
    <MainWrapper>
      <div className="container-content">
        <div className="container-left">
          <div>
            <div></div>
            <img src={Productivia} alt="Productivia background" />
          </div>
        </div>
        <div className="container-right">
          <h2>Productivia</h2>
          <div className="higher-text">
            Productivia es una web app orientada a maximizar la producción del
            usuario al brindarle herramientas como flashcards, listas de tareas
            y temporizadores pomodoro en un ambiente limpio y espaciado.
          </div>
          <div className="button-div">
            <button className="button-1">React.js</button>
            <button className="button-1">Redux TK</button>
            <button className="button-1">Firebase</button>
          </div>
          <div className="icons-div">
            <a
              href="https://productivia.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoMdOpen />
            </a>
            <a
              href="https://github.com/gnasini/productivia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoMarkGithub />
            </a>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default ContenidoProyectos;

const MainWrapper = styled.div<{ bg?: any }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 7rem 2rem 7rem;

  .container-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .container-left {
    display: flex;
    flex: 0.55;
    width: 100%;
    height: 400px;

    div {
      position: relative;
      width: 100%;
      height: 100%;
      box-shadow: -7px 11px 15px rgba(0, 0, 0, 0.18);

      img {
        object-fit: cover;
        object-position: center center;
      }

      div {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(8, 120, 109, 0.71);
        z-index: 1;
        transition: 0.5s;
        cursor: pointer;

        &:hover {
          background-color: transparent;
          transition: 0.5s;
        }
      }
    }
  }

  .container-right {
    position: relative;
    display: flex;
    justify-content: space-between;
    flex: 0.45;
    flex-direction: column;
    width: 100%;
    height: 350px;

    h2 {
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      font-size: 2rem;
      color: #047469;
      width: 100%;
    }
  }

  .higher-text {
    display: flex;
    box-shadow: -7px 11px 15px rgba(0, 0, 0, 0.25);
    width: 140%;
    position: absolute;
    top: 20%;
    right: 0;
    padding: 0.5rem;
    font-family: "Calibri";
    font-weight: 300;
    color: #242424;
    font-size: 1.1rem;
    background-color: #fff;
    z-index: 3;
  }

  .button-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 6rem;
    width: 100%;
  }

  .button-1 {
    display: flex;
    outline: none;
    border: none;
    width: 110px;
    background-color: #047469;
    height: 30px;
    color: #fff;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-family: "Neutra";
    box-shadow: -7px 11px 15px rgba(0, 0, 0, 0.25);
    margin-left: 1rem;
  }

  .icons-div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    svg {
      display: flex;
      justify-content: flex-end;
      width: 30px;
      height: 30px;
      cursor: pointer;
      margin-left: 1.5rem;
      text-decoration: none;
      fill: #000;
    }
  }
`;
