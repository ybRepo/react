import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
				<DisplayGiff />
			</div>		
    )
  }
}

class DisplayGiff extends Component{
  state = {
    previous: 0,
    next: 0,
    index: 0,
    img: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif'
  }

  updateBtnState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => this.updateIndex())
  }

  updateIndex = () => {
    this.setState({
      index: this.state.index + Number(this.state.next) + Number(this.state.previous)
    }, this.getNextImg())
  }

  getNextImg = () => {
    let imgArr = [
      'https://media.giphy.com/media/wpoLqr5FT1sY0/giphy.gif',
      'https://media.giphy.com/media/5Zesu5VPNGJlm/giphy.gif',
      'https://media.giphy.com/media/o7OChVtT1oqmk/giphy.gif',
    ]
    this.setState({
      img: (imgArr[this.state.index])
    }, this.clearState())
  }

  clearState = () =>{
    this.setState({
      previous: 0,
      next: 0
    })
  }

  render(){
    return (
      <div>
        <h1 >Image Carousel</h1>
			    <div>
			    	<button onClick={this.updateBtnState} name='previous' value="-1">Previous</button>
			      <span>1 of 4</span>
			      <button onClick={this.updateBtnState} name='next' value="1">Next</button>
			    </div>
				<div>
					<img src={`${this.state.img}`} />
				</div>
      </div>
    )

  }
}

export default App;
