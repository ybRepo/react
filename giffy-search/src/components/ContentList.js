import React, {Component } from 'react'
import Content from './Content'


class ContentList extends Component{
    render(){
        let gifsJSX = this.props.gifList.map((element, i) =>{
            return <Content 
                gif = {element.images.original.url}
                key = {i}
                />
        })
        return(                
            <div>{gifsJSX}</div>

        )
    }
}

export default ContentList