import React, {Component } from 'react'
import {Link} from 'react-router-dom'

class Song extends Component{
    render(){
        return( 
            <tr>
                <td><img src={this.props.albumCover} alt="" height='70'/></td>
                <td className="align-middle text-left titleTextStyle"><Link to={`/song/${this.props.id}`}>{this.props.title}</Link></td>
            </tr>
        )
    }
}

export default Song

