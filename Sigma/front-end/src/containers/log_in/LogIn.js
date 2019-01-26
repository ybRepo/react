import React, {PureComponent} from 'react';
import LogInForm from './components/LogInForm';

export default class LogIn extends PureComponent {

  render() {
    return (
      <div className='account'>
        <div className='account__wrapper'>
          <div className='account__card'>
            <div className='account__head'>
              <h3 className='account__title'>Welcome to <span className='account__logo'>SIG<span
                className='account__logo-accent'>MA</span></span></h3>
              <h4 className='account__subhead subhead'>Loan originations platform</h4>
            </div>
            <LogInForm onSubmit />
          </div>
        </div>
      </div>
    )
  }
}
