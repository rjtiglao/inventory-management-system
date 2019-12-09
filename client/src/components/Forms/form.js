import React, {Component} from 'react';
import styled from 'styled-components'; 

const Button = styled.button`
  background-color: ${props => props.Color || "#4c84ff"};
  color: white;
  border-radius: ${props => props.borderRadius || "0px"};
  height: 30px;
  width: 80px;

  &:hover{
    opacity: 0.9;
  }

  span{
    color:red;
  }`

const FormStyle = styled.form`
    display: grid;
    background-color: ${props => props.backgroundColor || ""};
    grid-template-columns: ${props => props.gridTemplateColumns || "2fr 1fr 2fr 1fr"};
    grid-template-rows: ${props => props.gridTemplateRows || ""};

    grid-gap: ${props => props.gridGap || "10px"};
    padding: ${props => props.Padding || ""};
    align-content: center;
`

class Form extends Component {
  constructor(props){
    super(props);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target
    const data = new FormData(form);
  
    fetch('http://localhost:8080/api/attendees', {
      method: "POST",
      body: data
    })
  }

  render(){
    return(
      <FormStyle onSubmit={this.handleSubmit} >
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" placeholder="Name"/>

        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="text" placeholder="Email"/>
        
        <label htmlFor="attending">Attending</label>
        <input id="attending" name="attending" type="boolean" placeholder="Attending"/>
        <Button >Submit</Button>
      </FormStyle>
    )
  }
}

export default Form;