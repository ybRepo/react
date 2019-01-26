import React, {PureComponent} from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from '@material-ui/core/TextField';

const renderTextField = ({input, label, meta: {touched, error}, defaultValue, children}) => (
  <TextField
    className='material-form__field'
    label={label}
    error={touched && error}
    {...input}
    children={children}
    value={defaultValue}
  />
);

class ProfileSettings extends PureComponent {
  state = {
      name: 'Yashar Boosharya',
      email: 'boosharya@mail.com',
      linkedIn: 'www.linkedin.com/yashar-boosharya',
      gitHub: 'www.github.com/ybrepo'
    };
  
  render() {
    return (
      <form className='material-form read-only'>
        <div>
          <label className='material-form__label'>Full Name</label>
          <Field
            name='username'
            component={renderTextField}
            placeholder='Name'
            defaultValue={this.state.name}
          />
        </div>
        <div>
          <label className='material-form__label'>Email</label>
          <Field
            name='email'
            component={renderTextField}
            placeholder='example@mail.com'
            defaultValue={this.state.email}
            type='email'
          />
        </div>
        <div>
          <label className='material-form__label'>GitHub</label>
          <Field
            name='url'
            component={renderTextField}
            placeholder='gibut account'
            defaultValue = {this.state.gitHub}
            type='url'
          />
        </div>
        <div>
          <label className='material-form__label'>LinkedIn</label>
          <Field
            name='password'
            component={renderTextField}
            defaultValue={this.state.linkedIn}
            type='url'

          />
        </div>
      </form>
    )
  }
}

export default reduxForm({
  form: 'profile_settings_form', // a unique identifier for this form
})(ProfileSettings);

