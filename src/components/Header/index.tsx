import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-scroll";

const Header: React.FC = () => {
  const [shadowOnScroll, setShadowOnScroll] = useState(false);

  const addShadowOnScroll = () => {
    if (window.scrollY >= 80) {
      setShadowOnScroll(true);
    } else {
      setShadowOnScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", addShadowOnScroll);
    return () => window.removeEventListener("scroll", addShadowOnScroll);
  }, []);

  return (
    <MainWrapper>
      <div className={shadowOnScroll ? "active" : "container"}>
        <div className="first-half">
          <LogoScroll to="/">GN</LogoScroll>
        </div>
        <div className="second-half">
          <LinkScroll to="/">HOME</LinkScroll>
          <LinkScroll to="/">SOBRE MI</LinkScroll>
          <LinkScroll to="/">PROYECTOS</LinkScroll>
          <LinkScroll to="/">CONTACTO</LinkScroll>
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
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
    width: 100%;
    padding: 0 5rem;
  }

  .active {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    height: fit-content;
    width: 100%;
    padding: 0 5rem;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.16);
    background-color: #fff;
    z-index: 4;
  }

  .first-half {
    display: flex;
    flex: 0.5;
    align-self: flex-start;
    margin-bottom: 1rem;
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
  font-size: 1.3rem;
  margin-top: 4rem;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transition: 0.3s;
    transform: translateY(-5px);
    color: #437772;
  }
`;
