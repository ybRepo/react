import React, {PureComponent} from 'react';
import {Col, Container, Row} from 'reactstrap';
import JustifyTabsBorderedBottom from './component/JustifyTabsBorderedBottom'
import axios from 'axios'
import {
  loadProgressBar
} from 'axios-progress-bar'

const h5Style ={
  textTransform: 'uppercase',
  color: '#9400d3',
}

export default class Application extends PureComponent {
  state = {
    primaryID: this.props.match.params.id,
    app: '',
    stats: '',
    cbb: '',
    bureau: '',
    isAppLoading: true,
    isStatLoading: true,
  }

  componentDidMount() {
     this.getApp(this.state.primaryID)
     this.getAppStats(this.state.primaryID)
  }

  getApp = (id) => {
    axios.get(`http://localhost:8080/app/dt/${id}`)
       .then(response => {
         let data = response.data
         this.setState({
           app: data.DealerAccessRequest,
           isAppLoading: false
         })
       })
       .catch(error => {
         console.log(error)
       })
  }

  getAppStats = (id) => {
    axios.get(`http://localhost:8080/app/app/${id}`)
      .then(response => {
        let data = response.data
        this.setState({
          stats: data,
          isStatLoading: false
        })
      })
      .catch(error => {
        console.log(error)
      })
    }

  render() {
    return this.state.isAppLoading || this.state.isStatLoading ?
      <div>{loadProgressBar()}</div> : (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>{this.state.app.Customer.FirstName._text} {this.state.app.Customer.LastName._text}</h3>
            <h5 style={h5Style}>{this.state.stats.status} | {this.state.stats.program} | {this.state.stats.riskTier}</h5>
          </Col>
        </Row>
        <Row>
          <JustifyTabsBorderedBottom app={this.state.app} stats={this.state.stats} id={this.state.primaryID}/>
          
        </Row>
      </Container>
    )
  }
}

