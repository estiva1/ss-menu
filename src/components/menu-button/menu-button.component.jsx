import React, { useState } from "react";
import { HamburgerIconContainer, Line } from "./menu-button.styles";

const HamburgerIcon = ({ change }) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated(!isRotated);
    change(isRotated);
  };

  return (
    <HamburgerIconContainer rotated={isRotated ? "-90deg" : "0"} onClick={handleClick}>
      <Line rotated={isRotated} style={{ width: "66%" }} />
      <Line rotated={isRotated} />
      <Line rotated={isRotated} style={{ width: "33%" }} />
    </HamburgerIconContainer>
  );
};

export default HamburgerIcon;
