import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { NavLink } from 'react-router-dom';

class PostsShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;
        // const id = this.props.post.id 
        this.props.deletePost(id, () => {
            this.props.history.push('/');
        });
    }


    render() {
        const { post } = this.props;
        console.log(post);


        if (!post) {
            return (
                <div>Loading ...</div>
            )  
        }

        return (
            <div>
                <div className="text-xs-left">
                    <NavLink className="btn btn-secondary" to='/'>Back to Index</NavLink>
                </div>
                <button className="btn btn-danger pull-xs-right" 
                        onClick={this.onDeleteClick.bind(this)}>
                        Delete Post
                </button>
                <div>
                    <h3>{post.title}</h3>
                    <h6>Categories: {post.categories}</h6>
                    <p>{post.content}</p>
                </div>
            </div>
        )
    }
}

function mapStateToProps({ posts }, ownProps) {
    return {
        post: posts[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);