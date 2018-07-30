import React, {Component } from 'react'

class Content extends Component{
    render(){
        return(
            <div>
                <img src={this.props.gif} alt='' />
            </div>
        )
    }
}

export default Content