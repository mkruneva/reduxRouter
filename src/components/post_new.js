import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'; // reduxForm - similar to connect , aloows component to talk directly to redux Store
import { connect } from 'react-redux';
import { createPost } from '../actions'


class PostNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field; // desctructuring meta from field, touched, error from meta nested object
    const className = `form-group ${touched && error ? 'has-danger': ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input type={field.type} className="form-control"
          {...field.input}
        />
        <div className="text-help">{touched ? error : ''}</div>
      </div>
    )
  }

  onSubmit(values) {
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field 
          label="Title"
          type="text"
          name="title"
          component={this.renderField}
        />
        <Field 
          label="Categories"
          type="email"
          name="categories"
          component={this.renderField}
        />
        <Field 
          label="Post Content"
          type="text"
          name="content"
          component={this.renderField}
        />
        <button type='submit' className="btn btn-primary">Submit</button>
        <NavLink className="btn btn-danger" to='/'>Cancel</NavLink>
        </form>
      </div>
    )
  }
}

function validate(values) {
  // values - {} containing all values user has entered
  // values = { title: '...', categories: '', content: '' }

  const errors = {};

  // Validate inputs for 'values'
  if (!values.title) {
    errors.title = 'Enter a title!'
    // has-danger
  }

  // values.map ()

  // if errors is empty form is good to go
  // if errors has *any* props reduxForm assumes form is invalid
  return errors;

}

export default reduxForm({
  validate,  // validate: validate
  form: 'PostNewForm'
})(
  connect(null, { createPost })(PostNew)
);
