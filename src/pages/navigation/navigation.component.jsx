import { AnimatePresence } from "framer-motion";
import React, { Fragment, useEffect, useState } from "react";
import { NavigationContainer, NavigationDropdown, TabName, UserNameText } from "./navigation.styles";

import { navLinksContent } from "../../constants";
import MenuItem from "../../components/menu-item/menu-item.component";
import HamburgerIcon from "../../components/menu-button/menu-button.component";
import { Bars, Circle, HexagonLeft, HexagonRight, Triangle } from "../../figures/figures";

import logo from "../../assets/logo.svg";
import bell from "../../assets/notification-bell-icon.png";
import avatar from "../../assets/account-picture-example.png";

const Navigation = () => {
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  
  const handleClick = () => {
    setIsDropdownShown((current) => !current);
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Fragment>
      <NavigationContainer>
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px" }}>
          {isMobile ? <></> : <HamburgerIcon change={handleClick} onClick={handleClick} />}
          <img src={logo} alt="Company Logo" style={{ height: "20px" }} />
          <TabName>|</TabName>
          <TabName>Menu</TabName>
        </div>

        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "16px" }}>
          <img src={bell} alt="" style={{ width: "14px", height: "14px" }} />
          <img src={avatar} alt="Profile Picture" style={{ width: "28px", height: "28px" }} />
          {isMobile ? <HamburgerIcon change={handleClick} onClick={handleClick} /> : <></>}
          <UserNameText>Jason Stathem</UserNameText>
        </div>
      </NavigationContainer>

      <AnimatePresence>
        {isDropdownShown && (
          <NavigationDropdown
            key="navigation-dropdown"
            initial={{ y: -250, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
            animate={isDropdownShown ? { y: 0, opacity: 1 } : { y: -250, opacity: 0 }}
            exit={{ y: -250, opacity: 0, transition: { duration: 0.5 } }}
          >
            {navLinksContent.map((navLink, index) => (
              <MenuItem key={`item-${index}`} navLink={navLink} />
            ))}

            <HexagonLeft />
            <Triangle />
            <HexagonRight />
            <Bars />
            <Circle />
          </NavigationDropdown>
        )}
      </AnimatePresence>
    </Fragment>
  );
};

export default Navigation;
