import React, {Component } from 'react'
import './component.css';

class Player extends Component{


    render(){
        // Takes care of logic required to display previous and next buttons
        let playListLength = this.props.playListCount - 1;
        let disablePrev = (this.props.currSong.id === 0) ? true : false;
        let disableNext = (this.props.currSong.id === playListLength) ? true : false;

        //Takes care of logic required for toggling between Play Pause buton
        let hidePlay = (this.props.playing === false) ? false : true;
        let hidePause = (this.props.playing === false) ? true : false;
        
        return(
            <div className="playerContainer">
                <div className='player'>
                    <button className="playerControlsPrev material-icons" type="button" disabled={disablePrev} ref={self => this.btnPrev = self} onClick={() => {this.props.playSong(this.props.currSong.id - 1)}}>skip_previous </button>
                    <button className="playerControlsPlayPause material-icons" type="button" hidden={hidePlay} ref={self => this.btnPlayPause = self} onClick={() => {this.props.playPauseSong(this.props.playList[0].id, true)}}>play_circle_outline</button>
                    <button className="playerControlsPlayPause material-icons" type="button" hidden={hidePause} ref={self => this.btnPausePause = self} onClick={() => {this.props.playPauseSong(this.props.currSong.id, false)}}>pause_circle_outline</button>
                    <button className="playerControlsNext material-icons" type="button" disabled={disableNext} ref={self => this.btnNext = self} onClick={() => {this.props.playSong(this.props.currSong.id + 1)}}>skip_next</button>
                </div>
            </div>
        )
    }
}

export default Player
