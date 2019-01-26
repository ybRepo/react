import React, {PureComponent} from 'react';
// import { Redirect } from 'react-router'
import {Field, reduxForm} from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import KeyVariantIcon from 'mdi-react/KeyVariantIcon';
import AccountOutlineIcon from 'mdi-react/AccountOutlineIcon';
import {Link} from 'react-router-dom';
import renderCheckBoxField from '../../../components/form/CheckBox';

// const INITIAL_STATE = {
//   email: '',
//   password: '',
//   isLogginPending: false,
//   isLogginSuccess: false,
//   LoginError: null,
// };

class LogInForm extends PureComponent {
    state = {
      showPassword: false,
      name: '',
      password: '',
      isLogginPending: false,
      isLogginSuccess: false,
      LoginError: null,
  }
  
  showPassword = (e) => {
    e.preventDefault();
    this.setState({
      showPassword: !this.state.showPassword
    })
  }

  loginUser = () => {
    localStorage.setItem('username', this.refs.username.value)
    this.setState({
      name: this.refs.username.value,
      password: this.refs.password.value,
      isLogginPending: true
    }, this.authenticateUser())

  }

  authenticateUser = () => {
    // console.log('parameters passed for login')
    // auth.doSignInWithEmailAndPassword(this.state.email, this.state.password)
    //   .then(() => {
    //     console.log('firebase login was successful')
    //     this.setState({
    //         isLogginPending: false,
    //         isLogginSuccess: true,
    //       })
    //   })
    //   .then(() => {
    //     <Redirect to="/module/credit"/>
    //     this.setState({ ...INITIAL_STATE
    //     });

    //   })
    //   .catch(error => {
    //     console.log('login error', error)
    //     this.setState({
    //       LoginError: error
    //     });
    //   })
  }
  
  render() {
    const {handleSubmit} = this.props;
    return (
      <form className='form' onSubmit={handleSubmit}>
        <div className='form__form-group'>
          <label className='form__form-group-label'>Username</label>
          <div className='form__form-group-field'>
            <div className='form__form-group-icon'>
              <AccountOutlineIcon/>
            </div>
            <Field
              ref = 'username'
              name='name'
              component='input'
              type='text'
              placeholder='user@email.com'
              autoComplete = "on"
            />
          </div>
        </div>
        <div className='form__form-group'>
          <label className='form__form-group-label'>Password</label>
          <div className='form__form-group-field'>
            <div className='form__form-group-icon'>
              <KeyVariantIcon/>
            </div>
            <Field
              ref = 'password'
              name='password'
              component='input'
              type={this.state.showPassword ? 'text' : 'password'}
              placeholder='Password'
              autoComplete = "current-password"
            />
            <button className={`form__form-group-button${this.state.showPassword ? ' active' : ''}`}
                    onClick={(e) => this.showPassword(e)}><EyeIcon/></button>
          </div>
          <div className='account__forgot-password'>
            <a href=''>Forgot a password?</a>
          </div>
        </div>
        <div className='form__form-group'>
          <div className='form__form-group-field'>
            <Field
              name='remember_me'
              component={renderCheckBoxField}
              label='Remember me'
            />
          </div>
        </div>
        <Link className='btn btn-primary account__btn account__btn--small' to='/module/credit' onClick={ this.loginUser}>Sign In</Link>
        <Link className='btn btn-outline-primary account__btn account__btn--small' to='/register'>Create Account</Link>
      </form>
    )
  }
}

export default reduxForm({
  form: 'log_in_form',
})(LogInForm);
