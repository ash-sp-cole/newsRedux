import React, { Component } from 'react';
import {Container,Row,Col,Button} from 'react-bootstrap'
import "./nav.css";
class NavBar extends Component {
    render(){
    return(
        <div>
          <Container className="topSearch">

  <Row>
    <Col>
    1 of 3 <br/>
 <Button variant="light"> SEARCH ONE </Button>
    </Col>
    <Col>2 of 3 <br/>
 <Button variant="light">  SEARCH ONE </Button></Col>
    <Col>3 of 3 <br/>
 <Button variant="light"> SEARCH ONE </Button></Col>
  </Row>
</Container>
        </div>
    )
}
}
export default NavBar;