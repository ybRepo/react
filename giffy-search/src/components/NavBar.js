import React, {Component } from 'react'

class NavBar extends Component {
    render() {
        return (
             <nav className="navbar navbar-light bg-light justify-content-between">
                 <a className="navbar-brand">GIFFY SEARCH</a>
                 <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ref={text => this.text = text} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={() => {this.props.searchText(this.text.value)}}>Search</button>
                 </form>
            </nav>
        )
    }
}

export default NavBar

