import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class TopbarMenuLinks extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    onClick: PropTypes.func
  };
  
  render() {

    return (
      <Link className='topbar__link' to={this.props.path} onClick={this.props.onClick}>
        <span className={`topbar__link-icon lnr lnr-${this.props.icon}`}/>
        <p className='topbar__link-title'>{this.props.title}</p>
      </Link>
    )
  }
}