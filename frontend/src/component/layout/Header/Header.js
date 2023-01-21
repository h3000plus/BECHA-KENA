import React from "react";
import { ReactNavbar } from "overlay-navbar";
import {MdAccountCircle } from "react-icons/md";
import {MdSearch } from "react-icons/md";
import {MdAddShoppingCart } from "react-icons/md";

const options = {
  logo: "https://www.lunapic.com/editor/premade/transparent.gif",
  burgerColor:"crimson",
  burgerColorHover: "#900",
  logoWidth: "30%",
  navColor1: "#fff5f5",
  logoHoverSize: "10px",
  logoHoverColor: "crimson",
  link1Text: "Home",
  link2Text: "Services",
  link3Text: "Contact",
  link4Text: "About Us",
  link1Url: "/",
  link2Url: "/services",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "#121212",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link1Margin: "1vmax",
  profileIconUrl: "/login",
  profileIcon:true,
  profileIconColor: "#121212",
  ProfileIconElement: MdAccountCircle, 
  searchIcon:true,
  searchIconColor: "#121212",
  SearchIconElement:MdSearch,
  cartIcon:true,
  cartIconColor: "#121212",
  CartIconElement:MdAddShoppingCart,
  profileIconColorHover: "crimson",
  searchIconColorHover: "crimson",
  cartIconColorHover: "crimson",
  cartIconMargin: "1vmax",
  searchIconMargin:"0.5vmax",
  profileIconMargin:"0.5vmax"
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;