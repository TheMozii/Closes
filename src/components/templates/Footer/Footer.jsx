import { Grid, Typography } from "@mui/material";
import { React } from "react";
import {
  Wrapper,
  TopFooter,
  Help,
  FooterTatel,
  FooterLinks,
  Shop,
  GetInTouch,
  GetInTouchText,
  GetInTouchCont,
  DownloadOurApp,
  ConLinks,
  BottomFooter,
  BottomFooterText,
  BottomFooterButton,
} from "./style";
import facebook from "../../../assets/Icon/Footer/facebook.svg";
import instagram from "../../../assets/Icon/Footer/instagram.svg";
import twitter from "../../../assets/Icon/Footer/twitter.svg";
import youtube from "../../../assets/Icon/Footer/youtube.svg";
import pinterest from "../../../assets/Icon/Footer/pinterest.svg";
import AppStore from "../../../assets/Icon/Footer/app-store.svg";
import GooglePlay from "../../../assets/Icon/Footer/google-play.svg";
import Heart from "../../../assets/Icon/Footer/Heart.svg";

const Footer = () => {
  return (
    <Wrapper container>
      <TopFooter
        container
        xs={12}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid container xs={"auto"} gap={"150px"} height={"185px"}>
          <Help container xs={"auto"} alignContent={"space-between"}>
            <FooterTatel>HELP</FooterTatel>
            <Grid container height={"150px"} flexDirection={"column"}>
              <FooterLinks to={"/"}>Delivery & returns</FooterLinks>
              <FooterLinks to={"/"}>FAQ</FooterLinks>
              <FooterLinks to={"/"}>Track order</FooterLinks>
              <FooterLinks to={"/"}>Contacts</FooterLinks>
              <FooterLinks to={"/"}>Blog</FooterLinks>
            </Grid>
          </Help>
          <Shop container xs={"auto"} alignContent={"space-between"}>
            <FooterTatel>SHOP</FooterTatel>
            <Grid container height={"120px"} flexDirection={"column"}>
              <FooterLinks to={"/"}>New arrivals</FooterLinks>
              <FooterLinks to={"/"}>Trending now</FooterLinks>
              <FooterLinks to={"/"}>Sales</FooterLinks>
              <FooterLinks to={"/"}>Brands</FooterLinks>
            </Grid>
          </Shop>
          <GetInTouch>
            <FooterTatel>GET IN TOUCH</FooterTatel>
            <Grid
              container
              gap={"4px"}
              paddingTop={"12px"}
              paddingBottom={"5px"}
            >
              <GetInTouchText>Call:</GetInTouchText>
              <GetInTouchCont>(405) 555-0128</GetInTouchCont>
            </Grid>
            <Grid container gap={"4px"}>
              <GetInTouchText>Email:</GetInTouchText>
              <GetInTouchCont>hello@createx.com</GetInTouchCont>
            </Grid>
            <Grid container gap={"12px"} paddingTop={"25px"}>
              <ConLinks to={"/"}>
                <img src={facebook} alt="" />
              </ConLinks>
              <ConLinks to={"/"}>
                <img src={instagram} alt="" />
              </ConLinks>
              <ConLinks to={"/"}>
                <img src={twitter} alt="" />
              </ConLinks>
              <ConLinks to={"/"}>
                <img src={youtube} alt="" />
              </ConLinks>
              <ConLinks to={"/"}>
                <img src={pinterest} alt="" />
              </ConLinks>
            </Grid>
          </GetInTouch>
          <DownloadOurApp container alignContent={"space-between"}>
            <FooterTatel>DOWNLOAD OUR APP</FooterTatel>
            <Grid container xs={"auto"} gap={"20px"}>
              <ConLinks to={"/"}>
                {" "}
                <img src={AppStore} alt="" />
              </ConLinks>
              <ConLinks to={"/"}>
                {" "}
                <img src={GooglePlay} alt="" />
              </ConLinks>
            </Grid>
          </DownloadOurApp>
        </Grid>
      </TopFooter>
      <BottomFooter container xs={12} justifyContent={"center"}>
        <Grid
          xs={"auto"}
          container
          gap={"870px"}
          justifyContent={"space-between"}
          flexWrap={"nowrap"}
          alignItems={"center"}
        >
          <Grid width={"auto"} container gap={"4px"} alignItems={"center"}>
            {" "}
            <BottomFooterText>
              © All rights reserved. Made with
            </BottomFooterText>
            <img src={Heart} alt="" />
            <BottomFooterText>by Createx Studio</BottomFooterText>
          </Grid>
          <BottomFooterButton>
            <FooterTatel>Go to top</FooterTatel>
          </BottomFooterButton>
        </Grid>
      </BottomFooter>
    </Wrapper>
  );
};

export default Footer;
