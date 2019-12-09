import React from "react";
import "../../components/NavBar/NavBar";
import MainContainer from "../../components/Container/MainContainer";
import ContentContainer from "../../components/Container/ContentContainer";
import NavBar from "../../components/NavBar/NavBar";
import "./style.css";
import styled from "styled-components";
// import Fade from "react-reveal/Fade";

const NotFound = () => {
  return (
    <MainContainer>
      <NavBar />
      <ContentContainer
        backgroundColor="#ECF0F5"
        bgHeight="100%"
        bgWidth="100%"
      ></ContentContainer>
    </MainContainer>
  );
};

export default NotFound;
