import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  return (
    <MainWrapper>
      <div className="container">
        <div className="first-half">
          <LogoScroll to="/">GN</LogoScroll>
        </div>
        <div className="second-half">
          <LinkScroll to="/">Home</LinkScroll>
          <LinkScroll to="/">Sobre Mí</LinkScroll>
          <LinkScroll to="/">Proyectos</LinkScroll>
          <LinkScroll to="/">Contacto</LinkScroll>
        </div>
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

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
    width: 100%;
    padding: 0 10rem;
  }

  .first-half {
    display: flex;
    flex: 0.5;
    align-self: flex-start;
  }

  .second-half {
    display: flex;
    flex: 0.5;
    align-self: center;
    justify-content: space-evenly;
  }
`;

const LogoScroll = styled(Link)`
  display: flex;
  color: #047469;
  font-size: 2.5rem;
  border: 6px solid #047469;
  padding: 0.3rem;
  text-decoration: none;
  margin-top: 4rem;
  margin-left: 0.5rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transition: 0.3s;
    transform: translateY(-5px);
    color: #047469;
  }
`;

const LinkScroll = styled(Link)`
  display: flex;
  align-self: center;
  flex-direction: row;
  text-decoration: none;
  font-size: 1.5rem;
  margin-top: 4rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    transform: translateY(-5px);
    color: #437772;
  }
`;
