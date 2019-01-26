import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import axios from 'axios'
import './App.css';
import {
  NavBar,
  PlayList,
  Player,
  SongDetails,
  Waveform
} from './components'

class App extends Component {
  state = {
    songs: [],
    currSong: {
      id: '0',
      title: ''
    },
    playing: false,
    playListCount: ''
  }

  //Get songs from server
  componentDidMount() {
    axios.get('http://localhost:8000/')
      .then(response => {
        const songsArr = response.data
        this.setState({
          songs: songsArr,
          playListCount: songsArr.length
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  //Takes care of calling appropriate sub functions
  playPauseSong = (id, bool) => {
    (bool === true) ? this.playSong(id) : this.pauseSong()
  }

  //Takes care of setting state re: playing song
  playSong = (id) => {
    this.setState({
      currSong: this.state.songs[id],
      playing: true,
    })
}

  //Takes care of setting state re: pausing song
  pauseSong = () => {
    this.setState({
      playing: false,

    })
  }

  render() {

    return (
      <div className="App" >
        <NavBar />
        <div className="container cardContainerStyle">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body player">
                  <Player playListCount={this.state.playListCount} playList={this.state.songs} currSong={this.state.currSong} playing={this.state.playing} playPauseSong={this.playPauseSong} playSong={this.playSong}/>
                  <Waveform src={this.state.currSong.path} id={this.state.currSong.id}  playing={this.state.playing}/>
                  <PlayList playList={this.state.songs}/>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card songDetails">
                <Switch>
                  <Route path="/" exact render = {() => <h3>Click play to start your experience!</h3>} />
                  <Route path="/song/:songID" render={(props)=> <SongDetails {...props} playList={this.state.songs} currSong={this.state.currSong} playListCount={this.playListCount}/>} />
                </Switch>
            </div>
          </div>
        </div>
      </div>
    <div>
  </div>
</div>
    );
  }
}

export default App;

