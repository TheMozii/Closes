import { Grid } from "@mui/material";
import { React } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import HeroSliderBackGround from "../../../assets/Icon/Wrapper/HeroSlider/HeroSliderBackGround.svg";
import TopCategoriesWomentSvg from "../../../assets/Icon/Wrapper/TopCategories/womens.svg";
import TopCategoriesMensSvg from "../../../assets/Icon/Wrapper/TopCategories/mens.svg";
import TopCategoriesKidsSvg from "../../../assets/Icon/Wrapper/TopCategories/kids.svg";

import {
  HeroSliderNewColl,
  HeroSliderMenswear2020,
  HeroSliderButtons,
  HeroSliderShopSale,
  HeroSliderShopTheMenswear,
  HeroSliderSplide,
  HeroSliderIfno,
  TopCategories_1,
  TopCategories_2,
  TopCategories_3,
  TopCategoriesSvg,
  TopCategoriesText,
  TopCategoriesLink,
} from "./style";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <Grid container xs={12}>
      <HeroSliderSplide
        options={{
          rewind: true,
          gap: "1rem",
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide
          style={{
            backgroundImage: `url(${HeroSliderBackGround})`,
            backgroundRepeat: "no-repeat",
            height: 800,
            width: 1920,
          }}
        >
          <HeroSliderIfno>
            <HeroSliderNewColl>New collection</HeroSliderNewColl>
            <HeroSliderMenswear2020>Menswear 2020</HeroSliderMenswear2020>
            <HeroSliderButtons container>
              <HeroSliderShopSale>Shop sale</HeroSliderShopSale>
              <HeroSliderShopTheMenswear>
                Shop the menswear
              </HeroSliderShopTheMenswear>
            </HeroSliderButtons>
          </HeroSliderIfno>
        </SplideSlide>
        <SplideSlide
          style={{
            backgroundImage: `url(${HeroSliderBackGround})`,
            backgroundRepeat: "no-repeat",
            height: 800,
            width: 1920,
          }}
        ></SplideSlide>
        <SplideSlide
          style={{
            backgroundImage: `url(${HeroSliderBackGround})`,
            backgroundRepeat: "no-repeat",
            height: 800,
            width: 1920,
          }}
        >
          <img src={HeroSliderBackGround} alt="Image 3" />
        </SplideSlide>
        <SplideSlide
          style={{
            backgroundImage: `url(${HeroSliderBackGround})`,
            backgroundRepeat: "no-repeat",
            height: 800,
            width: 1920,
          }}
        >
          <img src={HeroSliderBackGround} alt="Image 4" />
        </SplideSlide>
      </HeroSliderSplide>
      <TopCategories_1 container xs={12}>
        <TopCategories_2 container xs={12}>
          <TopCategories_3 container>
            <TopCategoriesLink to={"/"}>
              <TopCategoriesSvg container>
                <img src={TopCategoriesWomentSvg} />
                <TopCategoriesText>Women’s</TopCategoriesText>
              </TopCategoriesSvg>
            </TopCategoriesLink>

            <TopCategoriesLink>
              <TopCategoriesSvg container>
                <img src={TopCategoriesMensSvg} />
                <TopCategoriesText>Men’s</TopCategoriesText>
              </TopCategoriesSvg>
            </TopCategoriesLink>

            <TopCategoriesLink>
              <TopCategoriesSvg container>
                <img src={TopCategoriesKidsSvg} />
                <TopCategoriesText>Kids’</TopCategoriesText>
              </TopCategoriesSvg>
            </TopCategoriesLink>
          </TopCategories_3>
        </TopCategories_2>
      </TopCategories_1>
    </Grid>
  );
};

export default Homepage;
