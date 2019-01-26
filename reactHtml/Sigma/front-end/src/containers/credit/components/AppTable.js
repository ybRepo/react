import React, {PureComponent} from 'react';
import {Col, Card, CardBody} from 'reactstrap';
import Table from '../../../components/table/Table';
import App from '../../../components/App';

export default class Applications extends PureComponent {

    componentDidUpdate(prevProps, prevState) {
      return (prevProps.apps.length !== this.props.apps.length) ? true: false
    }

  render() {
      let appJSX = this.props.apps.map((element, i) => {
      return <App 
          index = {i}
          id = {element.id}
          source = {element.data.DealerAccessRequest.Network._text}
          date = {element.data.DealerAccessRequest.Date._text}
          firstName = {element.data.DealerAccessRequest.Customer.FirstName._text} 
          lastName = {element.data.DealerAccessRequest.Customer.LastName._text}
          province = {element.data.DealerAccessRequest.Customer.Province._text}
          product ={element.data.DealerAccessRequest.ProductType._text}
          amount = {'$10,000'}
          riskTier = {this.props.status[`${i}`].data.riskTier}
          program = {this.props.status[`${i}`].data.program}
          status ={this.props.status[`${i}`].data.status}
          key = {i}
      />
  })
    
    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <Table responsive className='table--bordered'>
              <thead>
              <tr>
                <th>#</th>
                <th>App ID</th>
                <th>Source</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Province</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Risk Tier</th>
                <th>Program</th>
                <th>Status</th>
                <th>View</th>
              </tr>
              </thead>
              <tbody>
                {appJSX}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

 