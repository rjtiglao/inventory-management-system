import React, { Component } from "react";
import styled from "styled-components";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./style.css";
import content from "./Content";

const Wrapper = styled.div`
  width: 100%;
`;

const image = content.map((content, i) => <img src={content.image[i]}></img>);

const listcontent = content.map(content => (
  <div>
    <h1>{content["title"]}</h1>
    <p>{content["description"]}</p>
    {/* <div>{image}</div> */}
    {image}
    {/* <img src={content["image"]}></img> */}
    {/* <img src={images[0]}></img> */}
  </div>
));

class SlideView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const settings = {
      duration: 2000,
      slider: "slider",
      buttonDisabled: "disabled",
      track: "track",
      slide: "slide",
      hidden: "hidden",
      previous: "previous",
      current: "current",
      next: "next"
    };
    return (
      <Wrapper>
        <Slider {...settings}>{listcontent}</Slider>
      </Wrapper>
    );
  }
}

export default SlideView;
