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
import DataTable from "../../components/DataTable/DataTable";
import TestDataTable from "../../components/DataTable/Sandbox/SortingTable";
import styled from "styled-components";
// import Fade from "react-reveal/Fade";

const InventoryPage = () => {
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
          <ContentContainer
            backgroundColor="white"
            MaxHeight="80%;"
            bgWidth="80%"
            marginLeft="50px;"
            marginTop="50px"
            MaxWidth="90%;"
          >
            {/* <TestDataTable></TestDataTable> */}
            <PageBar text="Inventory" url="/" view="additem" />
            <TestDataTable></TestDataTable>
          </ContentContainer>
          <a href="/additem">Add New Item</a>
        </ContentContainer>
      </ContentContainer>
    </MainContainer>
  );
};

export default InventoryPage;
