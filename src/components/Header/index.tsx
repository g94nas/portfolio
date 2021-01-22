import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";
import Sidebar from "../Sidebar";

const Header: React.FC = () => {
  const [shadowOnScroll, setShadowOnScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const addShadowOnScroll = () => {
    if (window.scrollY >= 60) {
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
    <>
      {isOpen ? (
        <Sidebar setIsOpen={setIsOpen} />
      ) : (
        <MainWrapper>
          <div
            className={shadowOnScroll ? "active active-scroll" : "container"}
          >
            <div className="first-half">
              <LogoScroll to="home">GN</LogoScroll>
            </div>
            <div className="second-half">
              <FaBars onClick={() => setIsOpen(true)} />
              <LinkScroll
                activeClass="active-scroll"
                spy={true}
                to="home"
                duration={500}
                smooth={true}
                offset={-200}
              >
                HOME
              </LinkScroll>
              <LinkScroll
                activeClass="active-scroll"
                spy={true}
                to="sobre-mi"
                duration={500}
                smooth={true}
                offset={-80}
              >
                SOBRE MI
              </LinkScroll>
              <LinkScroll
                activeClass="active-scroll"
                spy={true}
                to="proyectos"
                duration={500}
                smooth={true}
                offset={-80}
              >
                PROYECTOS
              </LinkScroll>
              <LinkScroll
                activeClass="active-scroll"
                spy={true}
                to="contacto"
                duration={500}
                smooth={true}
                offset={-160}
              >
                CONTACTO
              </LinkScroll>
            </div>
          </div>
        </MainWrapper>
      )}
    </>
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

    @media screen and (max-width: 768px) {
      padding: 0 1rem;
    }
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

    @media screen and (max-width: 768px) {
      padding: 0 1rem;
    }

    .active-scroll {
      color: #047469;
    }
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
    margin-bottom: 0.5rem;

    @media screen and (max-width: 768px) {
      justify-content: flex-end;
      align-items: center;
    }

    svg {
      @media screen and (max-width: 768px) {
        display: flex;
        font-size: 3rem;
        color: #047469;
        align-self: flex-start;
        margin-top: 3.5rem;
        background: transparent;
        cursor: pointer;
      }
      @media screen and (min-width: 768px) {
        display: none;
      }
    }
  }
`;

const LogoScroll = styled(Link)`
  display: flex;
  color: #047469;
  font-size: 2.5rem;
  border: 6px solid #047469;
  padding: 0.3rem;
  text-decoration: none;
  margin-top: 4.4rem;
  margin-left: 0.5rem;
  transition: 0.3s;
  cursor: pointer;
  background: transparent;

  &:hover {
    transition: 0.3s;
    transform: translateY(-5px);
    color: #047469;
  }

  @media screen and (max-width: 768px) {
    margin-left: 0;
    border: none;
  }
`;

const LinkScroll = styled(Link)`
  display: flex;
  align-self: center;
  flex-direction: row;
  text-decoration: none;
  font-size: 1.3rem;
  margin-top: 4.1rem;
  cursor: pointer;
  transition: 0.3s;
  white-space: nowrap;
  margin-left: 2.2rem;

  &:hover {
    transition: 0.3s;
    transform: translateY(-5px);
    color: #437772;
  }

  @media screen and (max-width: 1200px) {
    padding-left: 10px;
    padding-right: 10px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
