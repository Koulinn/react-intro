import React from "react";
import Avatar from "../../atoms/Avatar/Avatar.component";
import CustomButton from "../../atoms/CustomButton/CustomButton.component";
import CustomLink from "../../atoms/CustomLink/CustomLink.component";
import Text from "../../atoms/Text/Text.component";
import {
  CardHeaderWrapper,
  CustomCardWrapper,
  CardBodyWrapper,
  CardFooterWrapper,
  CardIconsWrapper,
} from "./CustomCard.element";

const CustomCard = (props) => {
  const userFullName = "Mike Thompson";
  const jobTitle = "Baker";
  return (
    <CustomCardWrapper>
      <CardHeaderWrapper id="cardHeader">
        <Avatar size="lg" />
        <Text type={"h2"}>{props.userFullName || userFullName}</Text>
      </CardHeaderWrapper>
      <CardBodyWrapper id="card-body">
        <Text type={"h3"}>{props.jobTitle || jobTitle}</Text>
        <CardIconsWrapper>
          <CustomLink>
            <Avatar size="sl" />
          </CustomLink>
          <CustomLink>Linkedin</CustomLink>
          <CustomLink>Instagram</CustomLink>
        </CardIconsWrapper>
      </CardBodyWrapper>
      <CardFooterWrapper id="card-footer">
        <CustomButton styleType={"primary"}>Download CV</CustomButton>
        <CustomButton styleType={"secondary"}>Hire Me</CustomButton>
      </CardFooterWrapper>
    </CustomCardWrapper>
  );
};

export default CustomCard;
