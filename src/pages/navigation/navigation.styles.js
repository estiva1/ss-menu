import { motion } from "framer-motion";
import styled from "styled-components";

export const NavigationContainer = styled.nav`
  position: relative;
  display: flex;
  align-items: center;
  height: 54px;
  padding: 0px 24px;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.07);
  z-index: 2;
`;

export const NavigationDropdown = styled(motion.div)`
  position: relative;
  column-count: 6;
  padding: 20px 24px 40px 24px;
  align-items: flex-start;
  justify-content: center;
  border-radius: 0px 0px 20px 20px;
  background: #fff;
  box-shadow: 4px 4px 25px 0px rgba(111, 213, 246, 0.25);
  overflow: hidden;

  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin: auto;
  }
  @media screen and (max-width: 1250px) {
    column-count: 5;
  }
  @media screen and (max-width: 1055px) {
    column-count: 4;
  }
  @media screen and (max-width: 860px) {
    column-count: 3;
  }
  @media screen and (max-width: 665px) {
    column-count: 2;
  }
  @media screen and (max-width: 480px) {
    column-count: 1;
  }
`;

export const UserNameText = styled.h3`
  color: #000;
  font-family: Titillium Web;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1rem;
  margin: 0;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const TabName = styled.h2`
  color: #1565d8;
  font-family: Oswald;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.03125rem; /* 109.091% */
  letter-spacing: -0.0265rem;
  text-transform: uppercase;
  margin: 0;
`;
