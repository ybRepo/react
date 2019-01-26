import React, {PureComponent} from 'react';
import {Link} from 'react-router-dom'
import ImageRobo from '../../img/404/robo.png';

const notFoundWrapper = {
  width: '50%',
  height: '50%',
  alignItems:'center',
  display: 'flex',
  margin: 'auto',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 999,
}

const divStyle = {
  float: 'left',
  textAlign: 'right',
  marginRight: '40px'
}

const imgStyle = {
  float: 'left',
  height: '400px',
  width: 'auto'
}

const h1Style = {
  fontSize : '62px'
}

export default class NotFound404 extends PureComponent {
  render() {
    return (
      <div className='not-found' style={notFoundWrapper}>
        <div className='not-found__content' style={divStyle}>
          <h1 style={h1Style}><span>404</span></h1>
          <h3><span>This page is a future feature</span></h3>
          <p className='not-found__info'><span> The page youre looking for doesnt exist or has been moved.</span></p>
          <br/>
          <Link className='btn btn-primary' to='/module/credit'>Back Home</Link>
        </div>
        <div className = 'not-found__content'>
          <img className='not-found__image' style={imgStyle} src={ImageRobo} alt='404'/>
        </div>
      </div>
    )
  }
}