import React from 'react';
// import {requestToken} from '../../../server';
const helpers = require('../../utils/helpers')

class Start extends React.Component {

  handleClick(e) {
    e.preventDefault();
    helpers.getRequest();
  }

  render() {
    return (
      <div className="start">
        <div>
          <div onClick={this.handleClick}>Listen for tweets...</div>
        </div>
      </div>
    )
  };
};

export default Start