import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  break-inside: avoid; /* Prevent items from breaking inside columns */
  margin-bottom: 32px;
  //padding: 8px 16px;
  z-index: 10;

  @media screen and (max-width: 480px) {
    padding: 0px 16px;
    margin-bottom: 24px;
  }
`;

export const ItemTextWrapper = styled.div`
  display: flex;
  width: 198px;
  height: 58px;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 40px;
  border: 1px solid #1565d8;
  background: #fff;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const TextWithIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MenuItemText = styled.h1`
  color: #4e5969;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.125rem;
  margin: 0;
`;

export const PointText = styled.h2`
  color: #4e5969;
  font-family: Titillium Web;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1rem;

  margin: 0;
  cursor: pointer;
  position: relative;
  &:before,
  &:after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #1565d8;
  }

  &:before {
    opacity: 0;
    transform: translateY(-8px);
    transition: transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s;
  }
  &:after {
    opacity: 0;
    transform: translateY(8px/2);
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s;
  }
  &:hover,
  &:focus {
    &:before,
    &:after {
      opacity: 1;
      transform: translateY(0);
    }
    &:before {
      transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s;
    }
    &:after {
      transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s 0.2s;
    }
  }
`;

export const Marketplaces = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2px;
`;

export const Points = styled.div`
  display: flex;
  width: 146px;
  padding: 12px 16px 0px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;

  @media screen and (max-width: 480px) {
    width: 166px;
    padding: 12px 80px 0px 0px;
  }
  @media screen and (max-width: 400px) {
    padding: 12px 40px 0px 0px;
  }
  @media screen and (max-width: 360px) {
    padding: 12px 16px 0px 16px;
  }
`;
