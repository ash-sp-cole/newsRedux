import React, {Component} from 'react';

import {connect} from 'react-redux';
import {apiRequestUsers} from './actions';
import {Spinner} from 'react-bootstrap';
class UserInfo extends Component {

componentDidMount () {
    this.props.apiRequestUsers(this.props.userIdProp)

}


    render(){
const user = this.props.users.find(user => user.id === this.propss.userIdProp)

console.log(this.props.users)
        return(
            <div>
             <h1>{user.name} </h1> 
            </div>
        )
    }

}
const mapStateToProps  = (state) => {
    return {
        users: state.users
    }
}

export default  connect(mapStateToProps, {apiRequestUsers})(UserInfo);