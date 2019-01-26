import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import ProfileTabs from './components/ProfileTabs';

export default class Account extends PureComponent {
  render() {
    return (
      <Container>
        <div className='profile'>
          <Row>
            <Col md={12} lg={12} xl={12}>
                <ProfileTabs/>
            </Col>
          </Row>
        </div>
      </Container>
    )
  }
}