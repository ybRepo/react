import React, {Component } from 'react'
import Song from './Song'

var tableStyle = {
    margin: 0,
    padding: 0
}

class PlayList extends Component{

    render(){
        let songsJSX = this.props.playList.map((element, i) =>{
            return <Song 
                title = {element.title}
                album = {element.album}
                albumCover = {element.albumCover}
                id = {i}
                key = {i}
                />
        })
        return(  
            <table className = "table table-dark" style={tableStyle}>
                <tbody>        
                    {songsJSX}
                </tbody>
            </table>
        )
    }
}

export default PlayList