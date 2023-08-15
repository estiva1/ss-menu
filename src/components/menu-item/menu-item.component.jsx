import React, { Fragment } from "react";
import {
  ItemContainer,
  ItemTextWrapper,
  Marketplaces,
  MenuItemText,
  PointText,
  Points,
  TextWithIcon,
} from "./menu-item.styles";

const MenuItem = ({ navLink }) => {
  return (
    <Fragment>
      <ItemContainer>
        <ItemTextWrapper>
          <TextWithIcon>
            <img src={navLink.icon} alt={navLink.title} style={{ height: "24px" }} />
            <MenuItemText>{navLink.title}</MenuItemText>
          </TextWithIcon>

          <Marketplaces>
            {navLink.marketplaces.map((marketplace) => {
              return <img src={marketplace} alt={marketplace} style={{ height: "16px" }} />;
            })}
          </Marketplaces>
        </ItemTextWrapper>

        <Points>
          {navLink.points.map((point, index) => {
            return <PointText key={`point-${index}`}>{point}</PointText>;
          })}
        </Points>
      </ItemContainer>
    </Fragment>
  );
};

export default MenuItem;
