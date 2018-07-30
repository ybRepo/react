import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import {
  NavBar,
  ContentList,
} from './components'


const key = 'g7OAzFwsT4V1Jov1nnIa5r0hJbHRKvbx';
const urlTrending = 'https://api.giphy.com/v1/gifs/trending?api_key='
const urlSearch = 'https://api.giphy.com/v1/gifs/search?api_key='
const limitTxt = '&limit='
const limitVal = 9
const ratingTxt = '&rating='
const ratingVal = 'G'
const queryString = '&q='
var queryValue = ''
const lang = '&lang=en'


class App extends Component {
  state = {
    gifs: []
  }

  componentDidMount(){
    let reqUrl = urlTrending + key + limitTxt + limitVal + ratingTxt + ratingVal
    this.makeAPICall(reqUrl)
  }

  updateSearchText = (query) => {
    queryValue = query
    let reqUrl = urlSearch + key + queryString + queryValue + limitTxt + limitVal + ratingTxt + ratingVal + lang
    this.makeAPICall(reqUrl)
  }

  makeAPICall = (url) => {
    axios.get(url)
      .then((response) => {
        this.setState({
          gifs: response.data.data
        })
      })
  }
  render() {
    return (
      <div className="App">
          <NavBar searchText={this.updateSearchText}/>
          <ContentList gifList={this.state.gifs}/>
      </div>
    );
  }
}

export default App;
