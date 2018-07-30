import React, { Component } from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import {
  Home, 
  About,
  Contact,
  NavBar,
} from './components'

import request from 'request';

class App extends Component {
  state = {
    img: '',
    loading: true
  }

  componentDidMount(){
    request('https://api.nasa.gov/planetary/apod?api_key=gJXOnVw8Q16m871pQuxRF25QXgAxWKRRK8LJ9iNq', (req, resp, body) => {
        const {url} = JSON.parse(body)
        console.log(url)
        this.setState({
          img: url,
          loading: false
        })    
    })
  }

  render() {
    return (
      <div className='App'>
       <NavBar />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
        </Switch>
        {(this.state.loading) ? <p>loading...</p> : <img alt='' src={this.state.img} />}
    </div>
    );
  }
}

export default App;
