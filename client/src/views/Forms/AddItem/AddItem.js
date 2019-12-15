// ALL LEADS TO FORMS and Database updates
// 2 windows
// Asset Management Window
// Vendors, Projects, Add Parts, Locations, Asset Type.
//
//
// User Management Window
// Members Users Roles
import React, { Component } from "react";
import MainContainer from "../../../components/Container/ContentContainer";
import NavBar from "../../../components/NavBar/NavBar";
import ContentContainer from "../../../components/Container/ContentContainer";
import PageBar from "../../../components/PageBar/PageBar";
import axios from "axios";
import addImageRoute from "../routes";
import styled from "styled-components";

const FormStyle = styled.form`
  // position: absolute;
  display: grid;
  background-color: ${props => props.backgroundColor || ""};
  grid-template-columns: ${props => props.gridTemplateColumns || "1fr"};
  grid-template-rows: ${props => props.gridTemplateRows || ""};
  width: 50%;
  grid-gap: ${props => props.gridGap || "10px"};
  padding: ${props => props.Padding || ""};
  align-content: center;
  z-index: 3;
  overflow: hidden;
  margin-left: 25%;

  input{
    background-position:6px;
    border:1px solid #DADADA;
    margin-top:10px;
    margin-bottom:10px;
    padding-left:35px;
    width:310px;
    height:30px;
    font-size:14px;
  
  }
  select{
    width: 310px;
    height:30px;
    margin-top:10px;
    margin-bottom:10px;}

  }
`;

// import Fade from "react-reveal/Fade";

class AddItemPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
      selectedFile: "",
      fullname: "",
      quantity: "",
      // State for software revisions
      software: "",
      location: "",
      part_number: ""
    };
  }

  onChange = e => {
    switch (e.target.name) {
      case "selectedFile":
        this.setState({ selectedFile: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });
    }
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      description,
      selectedFile,
      fullname,
      quantity,
      software,
      location,
      part_number
    } = this.state;
    let formData = new FormData();

    formData.append("description", description);
    formData.append("selectedFile", selectedFile);
    formData.append("fullname", fullname);
    formData.append("quantity", quantity);
    formData.append("software", software);
    formData.append("location", location);
    formData.append("part_number", part_number);

    //POST IMAGE TO LOCAL REPO /ASSETS/IMAGES
    axios.post(addImageRoute, formData).then(result => {
      // access results...
    });
    console.log(fullname);
    console.log(quantity);
    console.log(software);
    console.log(location);
    console.log(part_number);
  };

  render() {
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
              MinHeight="500px"
              MaxHeight="800px"
              bgWidth="80%"
              marginLeft="50px;"
              marginTop="50px"
              MaxWidth="50%;"
              conPosition="relative"
            >
              <PageBar text="Add A New Item" />

              <FormStyle onSubmit={this.onSubmit}>
                <label>Name</label>
                <input
                  type="text"
                  name="fullname"
                  value={this.fullname}
                  onChange={this.onChange}
                />
                <label>Part Number</label>
                <select
                  name="part_number"
                  id="item_part_number"
                  onChange={this.onChange}
                >
                  <option value="">Please Select Part Number</option>
                  <option value="104745-00-02/A">104745-00-02/A</option>
                  <option value="104745-00-05/A">104745-00-05/A</option>
                  <option value="104745-00-06/A">104745-00-06/A</option>
                  <option value="105576-00-02/A">105576-00-02/A</option>
                  <option value="105576-00-02/C">105576-00-02/C</option>
                  <option value="105576-00-03/A">105576-00-03/A</option>
                  <option value="12345160-00-01">12345160-00-01</option>
                  <option value="232204-00-02">232204-00-02</option>
                  <option value="31M-300-0">31M-300-0</option>
                  <option value="ACC28517808D H1BT-9G768-AF">
                    ACC28517808D H1BT-9G768-AF
                  </option>
                  <option value="ACC28587435 H1BT-9G768-AF">
                    ACC28587435 H1BT-9G768-AF
                  </option>
                  <option value="ACC541007 FK7T-9G768-AF">
                    ACC541007 FK7T-9G768-AF
                  </option>
                  <option value="ACC551609  DG1T-9G768-BD">
                    ACC551609 DG1T-9G768-BD
                  </option>
                  <option value="KAVT-19J266-AA">KAVT-19J266-AA</option>
                  <option value="KAVT-19J266-MA">KAVT-19J266-MA</option>
                </select>

                <label>Serial Number</label>
                <input
                  type="text"
                  name="serial"
                  value={this.serial}
                  onChange={this.onChange}
                />
                <label>Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  value={this.quantity}
                  onChange={this.onChange}
                />

                <label>Software Revisions</label>
                <input
                  type="text"
                  name="software"
                  value={this.software}
                  onChange={this.onChange}
                />

                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  value={this.description}
                  onChange={this.onChange}
                />

                <label>Location</label>
                <select
                  name="location"
                  id="item_location"
                  onChange={this.onChange}
                >
                  <option value="">Please select</option>
                  <option value="Pittsburgh">Pittsburgh</option>
                  <option value="Dearborn">Dearborn</option>
                  <option value="New Jersey">New Jersey</option>
                  <option value="Palo Alto">Palo Alto</option>
                </select>

                <input
                  type="file"
                  name="selectedFile"
                  onChange={this.onChange}
                />
                <div>
                  <button type="submit">Submit</button>
                </div>
              </FormStyle>
            </ContentContainer>
            {/* <img src={14973ce7-b774-4681-a922-67658de21e00.png}></img> */}
          </ContentContainer>
        </ContentContainer>
      </MainContainer>
    );
  }
}

export default AddItemPage;
