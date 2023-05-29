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

export const SearchHeader = styled(Input)`
  height: 45px;
  width: 300px;
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
  span {
    display: none;
  }
  .MuiButtonBase-root {
    min-width: auto;
  }
`;
