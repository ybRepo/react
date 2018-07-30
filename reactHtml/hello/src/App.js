import React, { Component } from 'react';
import './App.css';




  
class App extends Component {
  state = {
    name: 'Yashar Boosharya',
    counter: 0,
  }

  increment = () => {
    this.setState({
      counter : this.state.counter + 1
    })
  }
    
  render() {
    return (
      <div className="App">
        <header>
          <h1>{this.state.name}</h1>
          <h1>{this.state.counter}</h1>
          <button onClick={() => this.increment()}>Button</button>
        </header>
      </div>
    );
  }
}

export default App;
