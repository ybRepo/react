import React, { Component } from 'react' 

class Home extends Component{
    render() {
        return (
            <div class = "text-center" >
                <form onSubmit = {() => localStorage.setItem("name", document.getElementById("name").value)} >
                    Enter Name: <input type="text" name="name" id="name"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Home