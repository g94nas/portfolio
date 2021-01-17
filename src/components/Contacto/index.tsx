import React from "react";
import styled from "styled-components";
import { ReactComponent as Hexagon } from "../../assets/hexagons.svg";

const Contacto: React.FC = () => {
  return (
    <MainWrapper>
      <div className="text-container">
        <h1>Contacto</h1>
        <Hexagon />
      </div>
      <div className="container">
        <form className="form-container">
          <div className="info-container">
            <div className="info-container-fhalf">
              <label htmlFor="Nombre Completo">Nombre Completo</label>
              <input type="text" required></input>
            </div>
            <div className="info-container-fhalf">
              <label htmlFor="Email">Email</label>
              <input type="text" required></input>
            </div>
          </div>
          <div className="text-container">
            <label htmlFor="Mensaje">Mensaje</label>
            <textarea name="mensaje" required></textarea>
          </div>
        </form>
      </div>
    </MainWrapper>
  );
};

export default Contacto;

const MainWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 18rem 7rem;

  svg {
    position: absolute;
    width: 400px;
    height: 400px;
    transform: rotate(10deg);
    left: -13rem;
    top: -7rem;
  }

  h1 {
    position: relative;
    display: flex;
    justify-content: flex-end;
    font-size: 8rem;
    color: #047469;
    margin-bottom: 4rem;
    width: 100%;

    ::after {
      position: absolute;
      -webkit-text-stroke: 3px #047469;
      -webkit-text-fill-color: transparent;
      opacity: 0.2;
      content: "O.3";
      font-family: "Calibri Light";
      font-weight: 300;
      font-size: 15rem;
      z-index: -10;
      bottom: 2rem;
      right: 17rem;
    }
  }

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 500px;
    background-color: #fff;
    box-shadow: -7px 11px 15px rgba(0, 0, 0, 0.18);
  }

  .text-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }

  .form-container {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 95%;
    height: 90%;
    background: #fff;
  }

  .info-container {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;

    .info-container-fhalf {
      position: relative;
      width: 48%;

      label {
        position: absolute;
        font-size: 1rem;
        left: 1.1rem;
        top: 0.5rem;
        color: #242424;
        font-family: "Calibri";
      }

      input {
        width: 100%;
        background-color: #f1f1f1;
        height: 70px;
        padding-left: 1rem;
        padding-right: 1rem;
        padding-top: 1.5rem;
        margin-bottom: 2rem;
        border: none;
        outline: none;
        font-size: 1.5rem;
        font-family: "Calibri";
        color: #000;
      }
    }
  }

  .text-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90%;

    textarea {
      width: 100%;
      height: 100%;
      border: none;
      outline: none;
      background-color: #f1f1f1;
      font-family: "Calibri";
      color: #000;
      font-size: 1.2rem;
      padding-left: 1.1rem;
      padding-top: 2rem;
    }

    label {
      position: absolute;
      font-size: 1rem;
      left: 1.1rem;
      top: 0.5rem;
      color: #242424;
      font-family: "Calibri";
    }
  }
`;
