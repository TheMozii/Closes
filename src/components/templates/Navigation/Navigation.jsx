import { Grid } from "@mui/material";
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
} from "./style";
import USAFlag from "../../../assets/Icon/Navbar/flag-usa.svg";
import DovnChevron from "../../../assets/Icon/Navbar/Line (Stroke).svg";
import MenIcon from "../../../assets/Icon/Navbar/men.svg";
import logo from "../../../assets/Icon/Navbar/logo.svg";
import searge from "../../../assets/Icon/Navbar/Vector (Stroke).svg";

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
      <BottomHeader container xs={12}>
        <img src={logo} alt="" />
        <Grid>
          <HeaderButtomLinks to={"/"}>Women</HeaderButtomLinks>
          <HeaderButtomLinks to={"/"}>Men</HeaderButtomLinks>
          <HeaderButtomLinks to={"/"}>Girls</HeaderButtomLinks>
          <HeaderButtomLinks to={"/"}>Boys</HeaderButtomLinks>
          <HeaderButtomLinks to={"/"}>Sale</HeaderButtomLinks>
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
          justifyContent={"right"}
        >
          <SearchHeader

            placeholder="Search for products..."
          />
          <SearchHeaderButton
            sx={{
              "&:hover": { backgroundColor: "unset" },
            }}
          >
            <img src={searge} alt="" />
          </SearchHeaderButton>
        </Grid>
      </BottomHeader>
    </Header>
  );
};

export default Navigation;
