import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const ColContainer = styled.div`
  display: grid;
  grid-template-rows: ${props => props.gridTemplateRows || ""};
  grid-template-columns: ${props => props.gridTemplateColumns || ""};
  grid-gap: ${props => props.gridGap || "0px"};
  margin-left: ${props => props.marginLeft || "0px"};
  grid-column-start: ${props => props.gridColumnStart || ""};
  grid-row-start: ${props => props.gridRowStart || ""};
  background-color: rgba(27, 30, 46, 0.5);
  height: 100vh;
  align-items: center;
  justify-content: center;
  position: relative;

  a {
    z-index: 2;
    top: 100;
    color: white;
    display: hidden;
    font-family: "Roboto Mono", monospace;
    text-decoration: none;
    font-size: 30px;
  }
  &:hover {
    a{
      color: black;
    }
    background-color: rgba(8, 8, 8, 0.75);
  }
}
`;

export default ColContainer;
