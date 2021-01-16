import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  return (
    <MainWrapper>
      <div className="first-half">
        <h1>GN</h1>
      </div>
      <div className="second-half">
        <LinkScroll>Home</LinkScroll>
        <LinkScroll>Sobre Mí</LinkScroll>
        <LinkScroll>Proyectos</LinkScroll>
        <LinkScroll>Contacto</LinkScroll>
      </div>
    </MainWrapper>
  );
};

export default Header;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 40px;

  .first-half {
    display: flex;
    flex: 0.5;
    align-self: flex-start;

    h1 {
      display: flex;
      color: #047469;
      font-size: 2.5rem;
      border: 6px solid #047469;
      padding: 0.3rem;
      margin-top: 1rem;
      margin-left: 10rem;
    }
  }
`;
