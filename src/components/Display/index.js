import React, { Component } from 'react';
import './display.css';
import { Carousel, Card, Button, InputGroup, FormControl } from 'react-bootstrap';
import { apiRequestPosts } from '../actions';
import { connect } from 'react-redux';
import UserInfo from '../userInfo';

class Display extends Component {


  state = {
    data: [],

  }

  componentDidMount() {
    this.props.apiRequestPosts();
  }

  renderList (){
    return this.props.posts.map (post =>{
      return (
        <div className="item" key={post.id}>
        <Card bg="light" style={{ width: '18rem', margin:"auto" , marginBottom: "10px"}}>
      
        <Card.Body>
          <Card.Title>{post.userId}</Card.Title>
          <Card.Text>
          {post.title}
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        <UserInfo userIdProp={post.userId}/>
        </Card.Body>
      </Card>
       
        
       
        </div>
      )
    })
  }




  render() {
    console.log(this.props.posts)

    return (
      <div className="mainStructure">
        {this.renderList()}
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

const mapStateToProps = (state) => {

  return {
    posts: state.posts
  }

}

export default connect(mapStateToProps, { apiRequestPosts })(Display);