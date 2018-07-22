import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'; // reduxForm - similar to connect , aloows component to talk directly to redux Store

class PostNew extends Component {
  renderField(field) {
    console.log(field);
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input type={field.type} className="form-control"
          {...field.input}
        />
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <NavLink className="btn btn-primary" to='/'>Back to Posts</NavLink>
        </div>
        <form action="">
        <Field 
          label="Title"
          type="text"
          name="title"
          component={this.renderField}
        />
        <Field 
          label="Tags"
          type="password"
          name="tags"
          component={this.renderField}
        />
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'PostNewForm'
})(PostNew);
