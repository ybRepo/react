import React, {Component} from 'react'
import {Switch, Route, NavLink} from 'react-router-dom'

class About extends Component {
    render() {
        const { match } = this.props
        return (
            <div>
                <h1> About page </h1>
                <nav>
                    <li><NavLink to={match.url + "/jon"}>Jon</NavLink></li>
                    {' '}
                    <li><NavLink to={match.url + "/bruna"}>Bruna</NavLink></li>
                </nav>
                <Switch>
                    <Route path={match.path + "/jon"} component={JohnDetails} />
                    <Route path={match.path + "/bruna"} component={BrunaDetails} />
                </Switch>
            </div>
        )
    }
}

class JohnDetails extends Component {
    render(){
        return(
            <h1>Stuff about John</h1>
        )
    }
}

class BrunaDetails extends Component {
    render(){
        return(
            <h1>Stuff about Bruna</h1>
        )
    }
}

export default About