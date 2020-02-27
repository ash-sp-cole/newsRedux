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

    var url = "http://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.REACT_APP_API_AUTH;


    axios.get(url)
      .then(response => {

        console.log(response.data.articles)
        this.setState({
          data: response.data.articles
          
       

        })

        console.log(this.state.data)
        console.log(this.state.data[this.state.select].description)
      })


  }

  setValue = () => {
    if (this.state.select < 18) {
      this.setState({
        select: this.state.select + 1
      })
    }
    else {
      this.setState({
        select: 1
      })
    }


  }

  render() {
    return (
      <div className="mainStructure">
        <h3> DISPLAY</h3>
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
              src={this.state.data.urlToImage}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3></h3>
              <p>{this.state.data[this.state.select].title}</p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

      </div>
    )
  }
}

export default Display;