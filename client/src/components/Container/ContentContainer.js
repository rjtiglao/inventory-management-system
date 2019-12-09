import React from "react";
import styled from "styled-components";

const ContentContainer = styled.div`
  display: grid;
  grid-template-rows: ${props => props.gridTemplateRows || ""};
  grid-template-columns: ${props => props.gridTemplateColumns || ""};
  grid-gap: ${props => props.gridGap || ""};
  margin-left: ${props => props.marginLeft || ""};
  background-color: ${props => props.backgroundColor || ""};
  height: ${props => props.bgHeight || ""};
  width: ${props => props.bgWidth || ""};
  grid-column-start: ${props => props.gridColumnStart || ""};
  grid-column-end: ${props => props.gridColumnEnd || ""};
  grid-row-start: ${props => props.gridRowStart || ""};
  grid-row-end: ${props => props.gridRowEnd || ""};
  border-radius: ${props => props.borderRadius || ""};
  position: ${props => props.conPosition || ""};
  padding: ${props => props.Padding || ""};

  h1 {
    color: white;
  }
`;

export default ContentContainer;
