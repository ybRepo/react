import React, {PureComponent} from 'react';
import axios from 'axios'
import {Col, Container, Row} from 'reactstrap';
import Declined from './components/charts/Declined';
import Approved from './components/charts/Approved';
import Pending from './components/charts/Pending';
import New from './components/charts/New';
import AppTable from './components/AppTable'
import {
  loadProgressBar
} from 'axios-progress-bar'


export default class CreditHome extends PureComponent {
  state = {
    apps: [],
    status: [],
    activeAppCount: 0,
    approvedAppCount: 0,
    declinedAppCount: 0,
    pendingAppCount: 0,
    isLoading: true
  }

  componentDidMount(){
    this.getAllApps()
    this.getInitialAppCount()
  }

  pushNewApp = (e) => {
    e.preventDefault();
    axios.put('http://localhost:8080/new')
      .then(()=>this.getAllApps())
      .then(()=>this.updateAppCounter(null, 'active'))
      .then(()=>this.getAllAppStats())
      .catch(error => {
        console.log(error)
      })
  }

  getAllApps = () => {
    axios.get(`http://localhost:8080/apps/dt`)
    .then(response => {
      let data = response.data
      this.setState({
        apps: data,
        isLoading: true,
      })
    })
    .then(()=>this.getAllAppStats())
    .catch(error => {
      console.log(error)
    })
  }

  getAllAppStats = () => {
    axios.get(`http://localhost:8080/apps/app`)
      .then(response => {
        let data = response.data
        this.setState({
          status: data,
          isLoading: false
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  getInitialAppCount = () =>{
    axios.get(`http://localhost:8080/apps/app`)
    .then(response => {
      let data = response.data
      let activeCount = 0
      let approvedCount = 0
      let pendingCount = 0
      let declinedCount = 0

      for (let i = 0; i < data.length; i++) {
        activeCount += (data[i].data.status === 'Active') ? 1 : 0
        approvedCount += (data[i].data.status === 'Approved') ? 1 : 0
        pendingCount += (data[i].data.status === 'Pending') ? 1 : 0
        declinedCount += (data[i].data.status === 'Declined') ? 1 : 0
      }

      this.setState({
        status: data,
        activeAppCount: activeCount,
        approvedAppCount: approvedCount,
        pendingAppCount: pendingCount,
        declinedAppCount: declinedCount,
      }) 
    })
    .catch(error => {
      console.log(error)
    })
  }

  updateAppCounter = (prevStatus, newStatus) => {
    switch (prevStatus) {
      case 'active':
        this.setState({
          activeAppCount: this.state.activeAppCount - 1
        })
        break;
      case 'approved':
        this.setState({
          approvedAppCount: this.state.approvedAppCount - 1
        })
        break;
      case 'pending':
        this.setState({
          pendingAppCount: this.state.pendingAppCount - 1
        })
        break;
      default:
    }
    switch (newStatus) {
      case 'active':
        this.setState({
          activeAppCount: this.state.activeAppCount + 1
        })
        break;
      case 'approved':
        this.setState({
          approvedAppCount: this.state.approvedAppCount + 1
        })
        break;
      case 'pending':
        this.setState({
          pendingAppCount: this.state.pendingAppCount + 1
        })
        break;
      default:
        console.log("Invalid status submitted or there was no prevStatus")
    }
  }
    
  render() {
    return this.state.isLoading ? 
      <div>{loadProgressBar()}</div> : (
      <Container className='dashboard'>
        <Row>
          <Col md={12}>
            <h3 className='page-title'>All Apps Queue</h3>
            <button className='btn btn-sm btn-primary rounded' onClick={(e)=> this.pushNewApp(e)}>Push New App</button>
          </Col>
        </Row>
        <Row>
          <New count={this.state.activeAppCount}/>
          <Pending count={this.state.pendingAppCount}/>
          <Approved count={this.state.approvedAppCount}/>
          <Declined count={this.state.declinedAppCount}/>
        </Row>
        <Row>
          <AppTable apps={this.state.apps} status={this.state.status}/>
        </Row>
      </Container>
    )
  }
}