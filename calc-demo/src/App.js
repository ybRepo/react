import React, { Component } from 'react';
import './App.css';

const inputStyle = {
  width: '70px'

}

class App extends Component {
  state= {
    a: 0,
    b: 0,
    operator: '+',
    results: 0,
  }

  updateValue = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  calculate = () =>{
    let {a, b, operator} = this.state
     this.setState({
      results: eval(`${a}${operator}${b}`) //Instead of eval due to security risk, a switch statement could be used
    })
  }

  render() {
    return (
      <div className="App">
        <input name="a" type="text" style={inputStyle} onKeyUp={this.updateValue}/>
        <select name="operator" onChange={this.updateValue}>
          <option>+</option>
          <option>-</option>
          <option>*</option>
          <option>/</option>
        </select>
        <input name="b" type="text" style={inputStyle} onKeyUp={this.updateValue}/>
        <button onClick={this.calculate}>=</button>
        <input name="results" type="text" value={this.state.results} style={inputStyle}/>
      </div>
    );
  }
}

export default App;
