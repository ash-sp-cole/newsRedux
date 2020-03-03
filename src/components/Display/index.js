import React, { Component } from 'react';
import './display.css';
import { Carousel, Button, InputGroup, FormControl } from 'react-bootstrap';
import {apiRequestPosts} from '../actions';
import {connect} from 'react-redux';
import axios from 'axios';

class Display extends Component {


  state = {
    data: [],
   
  }

  componentDidMount() {
this.props.apiRequestPosts();
      }
  
     
  


  setValue =  () => {

  }

  render() {
    this.setValue()
   
    return (
      <div className="mainStructure">
        <h3>
    {this.state.data.map(titleName => <p>{titleName.name}</p>)}</h3>
        <InputGroup className="mb-3" >
          <FormControl
            placeholder="Search......"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            id="formValue"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={() => this.setValue()} >Submit</Button>
          </InputGroup.Append>
        </InputGroup>
        <Carousel>
          <Carousel.Item>
            <img
              className="caroImage"
              
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{}</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

      </div>
    )
  }
}

export default connect (null,{apiRequestPosts}) (Display);