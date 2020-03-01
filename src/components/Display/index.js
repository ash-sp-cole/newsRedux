import React, { Component } from 'react';
import './display.css';
import { Carousel, Button, InputGroup, FormControl } from 'react-bootstrap';

import axios from 'axios';

class Display extends Component {


  state = {
    data: [],
    description: [],
    image: [],
    select: 0
  }

  componentDidMount() {

    var url =  "http://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.REACT_APP_API_AUTH;


    axios.get(url)
      .then(response => {
        for(var i = 0; i <response.data.articles.length; i++){
     this.setState({
       data: [
         ...this.state.data,response.data.articles.title
       ]
     })
    }
      })

    }
  
     
  


  setValue =  () => {


  }

  render() {
    this.setValue()
    console.log(this.state.data)
    return (
      <div className="mainStructure">
        <h3>
    {this.state.data}</h3>
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

export default Display;