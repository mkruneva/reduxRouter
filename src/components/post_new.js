import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'; // reduxForm - similar to connect , aloows component to talk directly to redux Store

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
    console.log('values ', values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <div className="text-xs-right">
          <NavLink className="btn btn-primary" to='/'>Back to Posts</NavLink>
        </div>
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
})(PostNew);
