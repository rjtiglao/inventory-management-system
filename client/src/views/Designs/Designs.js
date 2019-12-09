// ALL LEADS TO FORMS and Database updates
// 2 windows
// Asset Management Window
// Vendors, Projects, Add Parts, Locations, Asset Type.
//
//
// User Management Window
// Members Users Roles
import React from "react";
import "../../components/NavBar/NavBar";
import MainContainer from "../../components/Container/MainContainer";
import ContentContainer from "../../components/Container/ContentContainer";
import NavBar from "../../components/NavBar/NavBar";
import PageBar from "../../components/PageBar/PageBar";
import "./style.css";
import styled from "styled-components";
// import Fade from "react-reveal/Fade";

const SettingsPage = () => {
  return (
    <MainContainer
      bgHeight="100vh"
      gridDisplay="grid"
      gridTemplateRows="50px 1fr 1fr"
      gridTemplateColumns="200px 1fr 1fr"
    >
      <NavBar />

      <ContentContainer
        backgroundColor="#ECF0F5"
        bgHeight="100%"
        bgWidth="100%"
        gridColumnStart="2"
        gridRowStart="2"
        gridColumnEnd="span 3"
        gridRowEnd=" span 3"
        conPosition="relative"
      >
        <ContentContainer
          backgroundColor="#ECF0F5"
          bgHeight="100%"
          bgWidth="100%"
        >
          <PageBar text="Designs" />
          <ContentContainer
            backgroundColor="white"
            bgHeight="50px"
            bgWidth="50px"
          ></ContentContainer>
        </ContentContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default SettingsPage;
