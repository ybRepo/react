import React, {Component } from 'react'
import {Link} from 'react-router-dom'

class NavBar extends Component{
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="/">My Store</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <Link class="nav-item nav-link" to="/">Home</Link>
                        <Link class="nav-item nav-link" to="/Shop">Shop</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar