import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class PostNew extends Component {
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <NavLink className="btn btn-primary" to='/'>Back to Posts</NavLink>
        </div>
        Post New
      </div>
    )
  }
}

export default PostNew;
