import { Grid, Typography, Input, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import LeftLine from "../../../assets/Icon/Header/SpecialOffers/LeftLine.svg";

export const Header = styled(Grid)``;

export const LanguageHeaderButton = styled(Button)`
  transition: all 0.5s;
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
  text-transform: none;
  padding: 0px;
  span {
    display: none;
  }
  :hover {
    background-color: unset;
  }
  min-width: 0px;
`;

export const TopHeader = styled(Grid)`
  background-color: #1e212c;
  height: 45px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

export const AvailableHeaderText = styled(Typography)`
  color: white;
  font-style: normal;
  font-size: 14px;
  line-height: 150%;
  opacity: 0.6;
`;
export const HeaderText = styled(Typography)`
  font-family: "Lato", sans-serif;
  color: white;
  font-style: normal;
  font-size: 14px;
  line-height: 150%;
`;

export const HeaderLog = styled(Button)`
  opacity: 0.6;
  transition: all 0.5s;
  &:hover {
    opacity: 1;
  }
  text-transform: none;
  padding: 0px;
  span {
    display: none;
  }
  :hover {
    background-color: unset;
  }
  min-width: 0px;
`;

export const HeaderTopLogText = styled(Typography)`
  font-family: "Lato", sans-serif;
  color: white;
  font-style: normal;
  font-size: 14px;
  line-height: 150%;
  margin-left: 9px;
`;

export const HeaderTopLinks = styled(Link)`
  text-decoration: none;
  color: white;
  font-style: normal;
  font-size: 14px;
  line-height: 150%;
  opacity: 0.6;
  transition: all 0.5s;
  &:hover {
    opacity: 1;
  }
`;

export const BottomHeader = styled(Grid)`
  height: 85px;
`;

export const HeaderButtomLinks = styled(Link)`
  color: #424551;
  text-decoration: none;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
`;

export const HeaderButtomLinksRed = styled(Link)`
  color: #424551;
  text-decoration: none;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 160%;
  color: #ff4242;
`;
export const SearchHeader = styled(Input)`
  height: 45px;
  width: 320px;
  border: none;
  border-color: #d7dadd;
  border-radius: 5px;
  &::before {
    all: unset;
  }
  &::after {
    all: unset;
  }
`;

export const SearchHeaderButton = styled(Button)`
  margin-left: 10px;
  span {
    display: none;
  }
  &:hover {
    background-color: white;
  }
  min-width: 20px;
`;

export const HeaderButtomLinksHeart = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderButtomLinksCart = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BottomHeaderNumber = styled(Typography)`
  width: 23px;
  height: 20px;
  background-color: #03cea4;
  color: #ffffff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SpecialOffers = styled(Grid)`
  background: #17696a;
`;

export const SpecialOffersLinks = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
`;

export const SpecialOffersLinkLeft = styled(Typography)`
  width: 85px;
  color: white;
  font-weight: 900;
  font-size: 12px;
  line-height: 150%;
`;

export const SpecialOffersLinkRight = styled(Typography)`
  width: 145px;
  color: white;
  font-size: 12px;
  line-height: 150%;
  text-decoration: underline;
`;

export const SpecialOffersSplide = styled(Splide)`
  width: 350px;

  .splide__pagination {
    display: none;
  }

  .splide__track {
    width: 300px;
  }

  .splide__arrow {
    background: none;
    opacity: 1;
    width: 15px;
    height: 15px;
  }

  .splide__arrow svg {
    fill: white;
  }

  display: flex;
  justify-content: center;
  align-items: center;
`;
