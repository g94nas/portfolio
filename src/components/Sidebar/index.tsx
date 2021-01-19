// @ts-nocheck

import { MdClose } from "react-icons/md";
import styled from "styled-components";
import { Link } from "react-scroll";

const Sidebar: React.FC<IProps> = ({ setIsOpen }) => {
  const viewHeight = window.outerHeight;

  return (
    <MainWrapper style={{ height: viewHeight }}>
      <MdClose onClick={() => setIsOpen(false)} />
      <LinkScroll to="home" offset={-80} onClick={() => setIsOpen(false)}>
        HOME
      </LinkScroll>
      <LinkScroll to="sobre-mi" offset={-120} onClick={() => setIsOpen(false)}>
        SOBRE MI
      </LinkScroll>
      <LinkScroll to="proyectos" offset={-80} onClick={() => setIsOpen(false)}>
        PROYECTOS
      </LinkScroll>
      <LinkScroll to="contacto" offset={-160} onClick={() => setIsOpen(false)}>
        CONTACTO
      </LinkScroll>
    </MainWrapper>
  );
};

export default Sidebar;

const MainWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(241, 241, 241, 0.95);
  z-index: 10;
  width: 100%;
  overflow: hidden;

  svg {
    position: absolute;
    right: 10%;
    top: 5%;
    font-size: 3rem;
    color: #047669;
    cursor: pointer;
  }
`;

const LinkScroll = styled(Link)`
  margin-bottom: 1rem;
  color: #047669;
  font-size: 2rem;
  margin-top: 1rem;
  cursor: pointer;
  text-shadow: 0px 11px 15px rgba(0, 0, 0, 0.1);
`;
