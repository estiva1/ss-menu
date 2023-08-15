import styled from "styled-components";

export const HamburgerIconContainer = styled.div`
  width: 20px;
  height: 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.5s;
  transform: ${({ rotated }) => `rotate(${rotated})`};
  cursor: pointer;

  @media screen and (max-width: 480px) {
    
  }
`;

export const Line = styled.span`
  width: 100%;
  height: 2px;
  transition: background-color 0.5s;
  background-color: ${(props) => (props.rotated ? "#1565D8" : "#4E5969")};
  border-radius: 1px;
`;
