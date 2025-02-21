import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;
  font-size: 120%;
  position: fixed;
  left: 2rem;
  top: 3rem;
  z-index: 3;
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme}>HMNR</Logo>;
};

export default LogoComponent;
