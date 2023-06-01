import { Grid, Typography } from "@mui/material";
import { React } from "react";
import {
  Header,
  HeaderText,
  TopHeader,
  HeaderTopLinks,
  BottomHeader,
  HeaderButtomLinks,
  SearchHeader,
  SearchHeaderButton,
  BottomHeaderNumber,
  HeaderButtomLinksRed,
  HeaderButtomLinksHeart,
  SpecialOffers,
  SpecialOffersHeaderButton,
  SpecialOffersLinkLeft,
  SpecialOffersLinkRight,
} from "./style";
import USAFlag from "../../../assets/Icon/Header/Navbar/flag-usa.svg";
import DovnChevron from "../../../assets/Icon/Header/Navbar/Line (Stroke).svg";
import MenIcon from "../../../assets/Icon/Header/Navbar/men.svg";
import Logo from "../../../assets/Icon/Header/Navbar/logo.svg";
import Searge from "../../../assets/Icon/Header/Navbar/Vector (Stroke).svg";
import Heart from "../../../assets/Icon/Header/Navbar/Heart/Vector (Stroke).svg";
import Divider from "../../../assets/Icon/Header/Navbar/divider.svg";
import Cart from "../../../assets/Icon/Header/Navbar/Cart.svg";
import LeftLine from "../../../assets/Icon/Header/SpecialOffers/LeftLine.svg";
import RightLine from "../../../assets/Icon/Header/SpecialOffers/RightLine.svg";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Header container>
      <TopHeader container xs={12}>
        <Grid container xs={4} justifyContent={"center"}>
          <HeaderText>Available 24/7 at (405) 555-0128</HeaderText>
        </Grid>
        <Grid container xs={4} justifyContent={"center"} gap={"32px"}>
          <HeaderTopLinks to={"/"}>Delivery & returns</HeaderTopLinks>
          <HeaderTopLinks to={"/"}>Track order</HeaderTopLinks>
          <HeaderTopLinks to={"/"}>Blog</HeaderTopLinks>
          <HeaderTopLinks to={"/"}>Contacts</HeaderTopLinks>
        </Grid>
        <Grid container xs={4} justifyContent={"center"} gap={"60px"}>
          <Grid container xs={"auto"} alignContent={"center"}>
            <img src={USAFlag} alt="" />
            <HeaderText paddingLeft={"12px"} paddingRight={"6px"}>
              Eng / $
            </HeaderText>
            <img src={DovnChevron} alt="" />
          </Grid>

          <Grid container xs={"auto"} alignContent={"center"} gap={"9px"}>
            <img src={MenIcon} alt="" />
            <HeaderTopLinks to={"/"}>Log in / Register</HeaderTopLinks>
          </Grid>
        </Grid>
      </TopHeader>
      <BottomHeader
        container
        xs={12}
        alignContent={"center"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <img src={Logo} alt="" />
        <Grid
          container
          xs={"auto"}
          gap={"40px"}
          paddingLeft={"60px"}
          paddingRight={"130px"}
        >
          <HeaderButtomLinks to={"/"}>Women</HeaderButtomLinks>
          <HeaderButtomLinks to={"/"}>Men</HeaderButtomLinks>
          <HeaderButtomLinks to={"/"}>Girls</HeaderButtomLinks>
          <HeaderButtomLinks to={"/"}>Boys</HeaderButtomLinks>
          <HeaderButtomLinksRed to={"/"}>Sale</HeaderButtomLinksRed>
        </Grid>
        <Grid
          height="44px"
          width="380px"
          border="solid"
          container
          flexWrap={"nowrap"}
          alignItems={"center"}
          borderRadius={"5px"}
          borderColor={"#D7DADD"}
          justifyContent={"center"}
        >
          <SearchHeader placeholder="Search for products..." />
          <SearchHeaderButton>
            <img src={Searge} alt="" />
          </SearchHeaderButton>
        </Grid>

        <Grid
          paddingLeft={"130px"}
          height={"25px"}
          container
          xs={"auto"}
          gap={"20px"}
          flexWrap={"nowrap"}
          alignItems={"center"}
        >
          <Grid container alignItems={"center"} gap={"8px"}>
            <HeaderButtomLinksHeart to={"/"}>
              <img src={Heart} alt="" />
            </HeaderButtomLinksHeart>
            <Typography
              width={"10px"}
              height={"26px"}
              fontWeight={"400"}
              fontSize={"16px"}
              lineHeight={"160%"}
              color={"#424551"}
            >
              2
            </Typography>
          </Grid>

          <img src={Divider} alt="" />
          <Grid container xs={"auto"} alignItems={"center"} gap={"9px"}>
            <img src={Cart} alt="" />
            <BottomHeaderNumber>4</BottomHeaderNumber>
          </Grid>
        </Grid>
      </BottomHeader>
      <SpecialOffers
        height={"34px"}
        container
        xs={12}
        justifyContent={"center"}
      >
        <Grid
          width={"275px"}
          container
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <SpecialOffersHeaderButton>
            <img src={LeftLine} alt="" />
          </SpecialOffersHeaderButton>

          <Grid container xs={"auto"} gap={"4px"}>
            <SpecialOffersLinkLeft>Up to 70% Off. </SpecialOffersLinkLeft>
            <SpecialOffersLinkRight>
              Shop our latest sale styles
            </SpecialOffersLinkRight>
          </Grid>
          <SpecialOffersHeaderButton>
            <img src={RightLine} alt="" />
          </SpecialOffersHeaderButton>
        </Grid>
      </SpecialOffers>
    </Header>
  );
};

export default Navigation;
