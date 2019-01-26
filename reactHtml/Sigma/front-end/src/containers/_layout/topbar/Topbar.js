import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom';
import TopbarSidebarButton from './TopbarSidebarButton';
import TopbarProfile from './TopbarProfile';

export default class Topbar extends PureComponent {
  render() {
    return (
      <div className='topbar'>
        <div className='topbar__wrapper'>
          <TopbarSidebarButton/>
          <Link className='topbar__logo' to='/'/>
          <div className='topbar__right'>
            <TopbarProfile/>
          </div>
        </div>
      </div>
    )
  }
}