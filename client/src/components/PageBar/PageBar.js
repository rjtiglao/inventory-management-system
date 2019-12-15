import React, { Component } from "react";
import styled from "styled-components";

const Bar = styled.div`
  // position: ${props => props.Position || "absolute"};
  z-index: 1;
  overflow-x: hidden;
  color: black;
  transition: 0.5s;
  width: 100%;
  padding: ${props => props.Padding || ""};
  background-color: ${props => props.BgColor || ""};
  display: grid;
  grid-template-rows: 1fr;
`;
const List = styled.ul`
  display: float;
  float: left;
  list-style-type: none;
  margin-bottom: 0;

  strong {
    font-size: 20px;
  }
  p {
    padding-left: 10px;
  }
`;

class PageBar extends Component {
  render() {
    return (
      <Bar>
        <List>
          <strong>{this.props.text}</strong>

          <p>Dashboard</p>
          {/* { isEditMode
        ? <ItemEdit item={item} />
        : <ItemView item={item} />
      }
          {this.state.url ? <a href={this.props.url}{this.props.view}>test</a> : null} */}
        </List>
      </Bar>
    );
  }
}

export default PageBar;
