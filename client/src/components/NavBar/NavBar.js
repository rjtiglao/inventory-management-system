import React from "react";
import styled from "styled-components";

const List = styled.ul`
  margin: 50px 0 0 0;
  padding: 0;
  width: 200px;
  background-color: #212d32;
  position: fixed;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  color: #b8c7cd;

  a {
    display: block;
    color: #b6c5cb;
    text-decoration: none;
    padding: ${props => props.Padding || "12px"};
  }

  a:hover:not(.active) {
    background-color: #555;
    color: white;
  }
  li {
    border-bottom: 1px solid rgba(100, 100, 100, 0.3);
    display: block;
    color: #b6c5cb;
    text-decoration: none;
  }
`;

const NavBar = styled.nav`
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 1fr;
  position: fixed;
  background-color: #3c8cbc;
  color: white;
  transition: 0.5s;
  width: 100%;
  height: 50px;
`;
const Bar = styled.div`
  background-color: ${props => props.bgColor || ""};
  display: flex;
  text-align: ${props => props.Color || "center"};
  justify-content: ${props => props.Color || "center"};
  color: ${props => props.Color || ""};
  border-bottom: 1px solid rgba(100, 100, 100, 0.3);
  position: ${props => props.Position || ""};
`;

const Nav = () => {
  return (
    <div>
      <NavBar>
        <Bar bgColor="#367fa8">
          <h1>HIMS</h1>
        </Bar>
      </NavBar>
      <List>
        <Bar bgColor="#192226" Color="#B6C5CB">
          <p>Main Navigation</p>
        </Bar>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          {" "}
          <a href="/inventory">
            <i class="fa fa-fw fa-home"></i>Inventory
          </a>
        </li>
        <li>
          <a href="/projects">
            <i class="fa fa-fw fa-home"></i>Projects
          </a>
        </li>
        <li>
          <a href="/designs">
            <i class="fa fa-fw fa-home"></i>Designs
          </a>
        </li>
        <li>
          <a href="/builds">
            <i class="fa fa-home"></i>Builds
          </a>
        </li>
        <li>
          <a href="/settings">
            <i class="fa fa-fw fa-home"></i>Settings
          </a>
        </li>
      </List>
    </div>
  );
};

export default Nav;
