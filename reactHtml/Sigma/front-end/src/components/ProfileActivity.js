import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class ProfileActivity extends PureComponent {
  static propTypes = {
    date: PropTypes.string,
    img: PropTypes.string,
    name: PropTypes.string
  };
  
  render() {
    return (
      <div className='profile__activity'>
        <div>
          <p className='profile__activity-name'>{this.props.name} <span
            className='profile__activity-date'>{this.props.date}</span></p>
          {this.props.children}
        </div>
      </div>
    )
  }
}
