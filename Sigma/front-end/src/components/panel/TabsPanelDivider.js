import React, {PureComponent} from 'react';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';

export default class TabsPanelDivider extends PureComponent {
    state = {
      activeTab: '1',
    };
  
  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  
  render() {
    return (
        <div className='tabs--bordered-bottom'>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({active: this.state.activeTab === '1'})}
                onClick={() => {
                  this.toggle('1');
                }}
              >
                {this.props.titles.title1}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({active: this.state.activeTab === '2'})}
                onClick={() => {
                  this.toggle('2');
                }}
              >
                {this.props.titles.title2}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({active: this.state.activeTab === '3'})}
                onClick={() => {
                  this.toggle('3');
                }}
              >
               {this.props.titles.title3}
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({active: this.state.activeTab === '4'})}
                onClick={() => {
                  this.toggle('4');
                }}
              >
                {this.props.titles.title4}
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId='1'>
              <p>Google Firestore , NodeJS , ExpressJS</p>
            </TabPane>
            <TabPane tabId='2'>
              <p>React , Redux , Javascript , CSS / SCSS , HTML</p>
            </TabPane>
            <TabPane tabId='3'>
              <p>React Router , React Router Dom , MIDI React , Recharts , ReactStrap ,Redux Form, <br/>
                Axios , Axios Progress Bar</p>
            </TabPane>
            <TabPane tabId='4'>
              <p>Postman , Adobe XD, Photoshop CC , GitHub </p>
            </TabPane>
          </TabContent>
        </div>
    )
  }
}