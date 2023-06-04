import { Button, Grid, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled(Grid)`
  background-color: #1e212c;
`;

export const TopFooter = styled(Grid)`
  height: 285px;
`;
export const Help = styled(Grid)`
  height: 185px;
  width: 130px;
`;

export const Shop = styled(Grid)`
  height: 155px;
  width: 100px;
`;

export const GetInTouch = styled(Grid)`
  height: 150px;
`;

export const DownloadOurApp = styled(Grid)`
  height: 100px;
  width: 345px;
`;

export const FooterTatel = styled(Typography)`
  height: auto;

  font-weight: 700;
  font-size: 16px;
  line-height: 160%;
  color: white;
  font-family: "Lato", sans-serif;
`;

export const FooterLinks = styled(Link)`
  height: 30px;
  text-decoration: none;
  font-size: 16px;
  line-height: 160%;
  color: white;
  opacity: 0.6;
  transition: all 0.5s;
  &:hover {
    opacity: 1;
  }
  display: flex;
  align-items: center;
`;

export const GetInTouchText = styled(Typography)`
  font-size: 16px;
  line-height: 160%;
  color: white;
`;

export const GetInTouchCont = styled(Typography)`
  font-size: 16px;
  line-height: 160%;
  opacity: 0.6;
  color: white;
`;

export const ConLinks = styled(Link)`
  text-decoration: none;
`;

export const BottomFooter = styled(Grid)`
  border-top: 1px solid rgba(80, 82, 91);
  height: 75px;
`;

export const BottomFooterText = styled(Typography)`
  font-size: 12px;
  line-height: 150%;
  color: white;
`;

export const BottomFooterButton = styled(Button)`
  width: auto;
  height: 30px;
  text-transform: none;
  padding: 0px;
  span {
    display: none;
  }
  :hover {
    background-color: unset;
  }
  min-width: 0px;
  opacity: 0.6;
`;
