import React, {Component} from 'react';

import {connect} from 'react-redux';
import {apiRequestUsers} from './actions';
import {Spinner} from 'react-bootstrap';
class UserInfo extends Component {

componentDidMount () {
    this.props.apiRequestUsers(this.props.userId)

}


    render(){

        const user = this.props.users.find((user) => user.id === this.props.userId );
        if (!user) {return < div >   <Spinner animation="grow" /> </div>}

        return(
            <div>
              {user.name}
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