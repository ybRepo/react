import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonToolbar, Modal} from 'reactstrap';
import {Link} from 'react-router-dom'

export default class ModalComponent extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    color: PropTypes.string,
    colored: PropTypes.bool,
    header: PropTypes.bool,
    modal: PropTypes.bool
  };
  
    state = {
      modal: false
    };
  
  render() {
    let Icon;
    
    switch (this.props.color) {
      case 'primary':
        Icon = <span className='lnr lnr-pushpin modal__title-icon'/>;
        break;
      case 'success':
        Icon = <span className='lnr lnr-thumbs-up modal__title-icon'/>;
        break;
      case 'warning':
        Icon = <span className='lnr lnr-flag modal__title-icon'/>;
        break;
      case 'danger':
        Icon = <span className='lnr lnr-cross-circle modal__title-icon'/>;
        break;
      default:
        break;
    }
    
    return (
      <div>
        <Modal isOpen={this.props.modal} toggle={this.props.toggle}
               className={`modal-dialog--${this.props.color} ${this.props.colored ? 'modal-dialog--colored' : ''} ${this.props.header ? 'modal-dialog--header' : ''}`}>
          <div className='modal__header'>
            <span className='lnr lnr-cross modal__close-btn' onClick={this.props.toggle}/>
            {this.props.header ? '' : Icon}
            <h4 className='bold-text  modal__title'>{this.props.title}</h4>
          </div>
          <div className='modal__body'>
            {this.props.message}
          </div>
          <ButtonToolbar className='modal__footer'>
            <Button onClick={ this.props.toggle}><Link to='/module/credit'>Go Home</Link></Button>{' '}
            <Button outline={this.props.colored} color={this.props.color} onClick={this.props.toggle}>Ok</Button>
          </ButtonToolbar>
        </Modal>
      </div>
    
    );
  }
}