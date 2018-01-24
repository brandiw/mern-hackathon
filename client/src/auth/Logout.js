import React, { Component } from 'react';

class Logout extends Component {
  handleLogout = (e) => {
    e.preventDefault();
    //Delete token from local storage
    localStorage.removeItem('mernToken');
    //Go back to home page
    this.props.updateUser();
  }

  render() {
    return (
      <a href='/' onClick={this.handleLogout}>Logout</a>
    );
  }
}

export default Logout;
