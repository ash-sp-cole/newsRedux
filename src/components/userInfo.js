// import React, {Component} from 'react';

// import {connect} from 'react-redux';
// import {apiRequestUsers} from './actions';
// import {Spinner} from 'react-bootstrap';
// class UserInfo extends Component {

// componentDidMount () {
//     this.props.apiRequestUsers(this.props.userIdProp)

// }


//     render(){


// console.log(this.props.users)
//         return(
//             <div>
//              <h1>{user.name} </h1> 
//             </div>
//         )
//     }

// }
// const mapStateToProps  = (state,ownProps) => {
//     return {
//       users :state.users.find(user => user.id === ownProps.userIdProp)
      
//     }
// }

// export default  connect(mapStateToProps, {apiRequestUsers})(UserInfo);