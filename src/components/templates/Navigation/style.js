import { Grid, Typography, Input, Button } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled(Grid)`
  height: 130px;
`;

export const TopHeader = styled(Grid)`
  background-color: #1e212c;
  height: 45px;
  align-items: center;
  justify-content: space-between;
  flex-wrap: nowrap;
`;

export const HeaderText = styled(Typography)`
  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
`;

export const HeaderTopLinks = styled(Link)`
  text-decoration: none;
  color: white;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
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
    background-color: none;
  }
  min-width: 20px;
`;

export const HeaderButtomLinksHeart = styled(Link)`
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

export const SpecialOffersHeaderButton = styled(Button)`
  padding: 0px;
  span {
    display: none;
  }
  &:hover {
    background-color: none;
  }
  min-width: 0px;
`;

export const SpecialOffersLinkLeft = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 900;
  font-size: 12px;
  line-height: 150%;
`;

export const SpecialOffersLinkRight = styled(Link)`
  color: white;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
`;
