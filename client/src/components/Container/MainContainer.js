import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: ${props => props.gridDisplay || ""};
  grid-template-rows: ${props => props.gridTemplateRows || ""};
  grid-template-columns: ${props => props.gridTemplateColumns || ""};
  grid-gap: ${props => props.gridGap || "0px"};
  margin-left: ${props => props.marginLeft || "0px"};
  background-color: ${props => props.backgroundColor || ""};
  height: ${props => props.bgHeight || ""};
`;

export default MainContainer;
