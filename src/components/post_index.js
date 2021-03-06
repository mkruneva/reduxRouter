import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { NavLink } from 'react-router-dom';

import _ from 'lodash';

class PostIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return (
      _.map(this.props.posts, post => {
        if (post.title) {
          return (
            <li className="list-group-item" key={post.id}>
              <NavLink to={`/posts/${post.id}`}>{post.title}</NavLink>
            </li>
          )
        }
      })
    )
  }

  render() {
    return(
      <div>
        <div className="text-xs-right">
          <NavLink className="btn btn-primary" to='/posts/new'>New Post</NavLink>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex);