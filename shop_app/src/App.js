import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import {
  NavBar,
  Home,
  Shop,
  NotFound,

} from './components'

class App extends Component {
  state = {
    username: ''
  }
  componentDidMount() {
    this.setState({
      username: localStorage.getItem("name")
  })
}

  render() {
    return (
      <div className='App'>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/Shop' render={(props) => <Shop {...props} username={this.state.username} />} />
        <Route path='/*' component={NotFound}/>
      </Switch>
    </div>
    );
  }
}

export default App;
