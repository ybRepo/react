// components/waveform.js
import React from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'

export default class Waveform extends React.Component {

  // Takes care of mounting new wavesurfer with parameters
  componentDidMount() {
    this.$el = ReactDOM.findDOMNode(this)
    this.$waveform = this.$el.querySelector('.wave')
    this.wavesurfer = WaveSurfer.create({
      container: this.$waveform,
      waveColor: 'violet',
      progressColor: 'purple',
    })
  }

  //Takes care of loading wavesurfer. SetTimeout was required as wavesurfer needs the entire audio file loaded
  componentDidUpdate(prevProps, PrevState){
    if (prevProps.src !== this.props.src) {
      this.wavesurfer.load(this.props.src);
      setTimeout(() => {
        this.wavesurfer.playPause();
      }, 2500);
    } else if (prevProps.id === this.props.id && prevProps.playing !== this.props.playing) {
      this.wavesurfer.playPause();
      
    }else{
        return false
    }
  }
  
  render() {
    return (
      <div className='waveform'>
        <div className='wave'></div>
      </div>
    )
  }
}