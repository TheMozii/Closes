import { Button, Grid, Typography } from "@mui/material";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

export const HeroSliderIfno = styled(Grid)`
  width: 545px;
  position: absolute;
  top: 18%;
  left: 20%;
`;

export const HeroSliderNewColl = styled(Typography)`
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 1px;
  text-transform: uppercase;
  height: auto;
  width: 180px;
`;

export const HeroSliderMenswear2020 = styled(Typography)`
  color: #1e212c;
  font-size: 72px;
  font-weight: 900;
  line-height: 130%;
  letter-spacing: 1px;
  width: 545px;
  padding-top: 12px;
  padding-bottom: 60px;
`;

export const HeroSliderButtons = styled(Grid)`
  gap: 24px;
  width: 415px;
`;

export const HeroSliderShopSale = styled(Button)`
  color: #17696a;
  font-size: 16px;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: 0.5px;
  text-transform: none;
  background-color: none;
  border: solid #17696a;
  width: 160px;
  height: 50px;
  padding: 0;
  &:hover {
    background-color: #17696a;
    color: white;
  }
`;

export const HeroSliderShopTheMenswear = styled(Button)`
  color: white;
  font-size: 16px;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: 0.5px;
  text-transform: none;
  background-color: #17696a;
  border: solid #17696a;
  width: 230px;
  height: 50px;
  padding: 0;

  &:hover {
    color: #17696a;
    background-color: transparent;
  }
`;

export const HeroSliderSplide = styled(Splide)`
  width: 100%;
  .splide__arrow {
    background: white;
    width: 50px;
    height: 50px;
    opacity: 1;
  }
  .splide__pagination__page {
    border-radius: 0;
    transform: none;
    background: none;
    width: 180px;
    height: 55px;
    border-bottom: solid #ccc 2px;
    color: #ccc;
    font-size: 28px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: 700;
    line-height: 150%;
    display: flex;
    align-items: center;
  }
  .splide__pagination__page.is-active {
    border-bottom: solid black 2px;
    color: black;
  }

  .splide__pagination {
    counter-reset: pagination-num;
  }

  .splide__pagination__page:before {
    counter-increment: pagination-num;
    content: "0" counter(pagination-num);
  }

  .splide__pagination {
    width: 745px;
    padding: 0;
    position: absolute;
    bottom: 23%;
    left: 20%;
  }
`;

export const TopCategories_1 = styled(Grid)`
  height: 560px;
  position: relative;
  justify-content: center;
`;

export const TopCategories_2 = styled(Grid)`
  justify-content: center;
`;

export const TopCategories_3 = styled(Grid)`
  width: auto;
  position: absolute;
  top: -10%;
  flex-wrap: nowrap;
  gap: 30px;
`;

export const TopCategoriesSvg = styled(Grid)`
  width: 390px;
  height: 440px;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const TopCategoriesText = styled(Typography)`
  color: #424551;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

export const TopCategoriesLink = styled(Link)`
  text-decoration: none;
`;
