import React, {PureComponent} from 'react';
import {Row, Card, CardBody, Col, Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import Worksheet from '../component/form/Worksheet'
import Asset from '../component/form/Asset'
import Bureau from '../component/form/Bureau'
import LTV from "./charts/Ltv";
import PTI from "./charts/Pti";
import TDSR from "./charts/Tdsr";


export default class JustifyTabsBorderedBottom extends PureComponent {
    state = {
      activeTab: '1'
    }
  
  toggle = (tab)  => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  
  render() {
    return (
      <Col md={12} lg={12} xl={12}>
        <Card>
          <CardBody>
            <div className='tabs tabs--justify tabs--bordered-bottom'>
              <div className='tabs__wrap'>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({active: this.state.activeTab === '1'})}
                      onClick={() => {
                        this.toggle('1');
                      }}
                    >
                      Summary
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({active: this.state.activeTab === '2'})}
                      onClick={() => {
                        this.toggle('2');
                      }}
                    >
                      Worksheet
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({active: this.state.activeTab === '3'})}
                      onClick={() => {
                        this.toggle('3');
                      }}
                    >
                      Asset
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({active: this.state.activeTab === '4'})}
                      onClick={() => {
                        this.toggle('4');
                      }}
                    >
                      Bureau
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({active: this.state.activeTab === '5'})}
                      onClick={() => {
                        this.toggle('5');
                      }}
                    >
                      Income
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({active: this.state.activeTab === '6'})}
                      onClick={() => {
                        this.toggle('6');
                      }}
                    >
                      Funding
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({active: this.state.activeTab === '7'})}
                      onClick={() => {
                        this.toggle('7');
                      }}
                    >
                      Documents
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({active: this.state.activeTab === '8'})}
                      onClick={() => {
                        this.toggle('8');
                      }}
                    >
                      Messages
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({active: this.state.activeTab === '9'})}
                      onClick={() => {
                        this.toggle('9');
                      }}
                    >
                      History
                    </NavLink>
                  </NavItem>
                </Nav>
                
                <TabContent activeTab={this.state.activeTab}>
                  <TabPane tabId='1'>
                   <p>The summary section will provide the end user with a snapshot of relevant information needed for a quick decision.
                      <br/>Some of this information would include LTV, TDSR and PTI charts at the time of the previous decision, any credit policy alerts, 
                      or key indicator flags. 
                      <br/>Examples of key indicators would include a flag to check applicants minimun age. 
                    </p>
                    <br/>
                    <Row> 
                      <LTV val={this.props.stats.ltv} />
                      <TDSR val={this.props.stats.tdsr} />
                      <PTI val={this.props.stats.pti} />
                    </Row>
                  </TabPane>
                  <TabPane tabId='2'>
                    <Worksheet app={this.props.app} stats={this.props.stats} id={this.props.id}/>
                  </TabPane>
                  <TabPane tabId='3'>
                     <Asset id={this.props.id}/>
                  </TabPane>
                  <TabPane tabId='4'>
                      <Bureau />
                  </TabPane>
                  <TabPane tabId='5'>
                    <p>Future Development</p>
                  </TabPane>
                  <TabPane tabId='6'>
                    <p>Future Development</p>
                  </TabPane>
                  <TabPane tabId='7'>
                    <p>Future Development</p>
                  </TabPane>
                  <TabPane tabId='8'>
                    <p>Future Development</p>
                  </TabPane>
                  <TabPane tabId='9'>
                    <p>Future Development</p>
                  </TabPane>
                </TabContent>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}