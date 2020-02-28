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


  }

  setValue =  async() => {
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


    var url = await "http://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.REACT_APP_API_AUTH;


    axios.get(url)
      .then(response => {

        console.log(response.data.articles)
        this.setState({
          data: response.data.articles
          
       

        })

        console.log(this.state.data[2])
     
      })

  }

  render() {
    return (
      <div className="mainStructure">
        <h3> {this.state.data[2].title}</h3>
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
              <h3>{this.state.data.title}</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>

        </Carousel>

      </div>
    )
  }
}

export default Display;