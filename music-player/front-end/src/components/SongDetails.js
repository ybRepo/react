import React, {Component } from 'react'

class SongDetails extends Component {
    render(){
        let songDetail = ''
        if (this.props.currSong.title === '' && this.props.currSong.title === 0) {
            songDetail = this.props.playList[this.props.currSong.id]
        }else{
            songDetail = this.props.playList[this.props.match.params.songID]

        }
        
          console.log('does id exist', songDetail)
          console.log('currSong Exists:', this.props.currSong)
    
        return(
            <div>
                <div className='detailsWrapper text-left'>
                    <div className = 'backgroundImg'>
                        <h5>Title: {songDetail.title}</h5>
                        <h5>Length: {songDetail.songLength}</h5>
                        <h5>Released: {songDetail.releaseDate}</h5>
                        <h5>Album: {songDetail.album}</h5>
                    </div>
                    <div>    
                        <img src={songDetail.album} alt=''/>
                    </div>
                </div>
            </div>
                
                

        )
    }
}

export default SongDetails


