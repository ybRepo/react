import React, {Component} from 'react'

class Input extends Component {
    state = {
        title: ''
    }

    //Takes care of capturing input from user
    captureInput = (e) => {
        this.setState({
        [e.target.name]: e.target.value,
        })
    }

    //Takes care of clearing state when the user clicks the add button
    clearState = () => {
        this.setState({
        title: ''
        })
    }

    //Takes care of rendering input component
    render(){
        return(
            <div className="inputContainer">
                <div className="row">
                    <div className='col-1'></div>
                    <div className="col-10 inputCol  ">
                        <input className='textInput'type="text" name="title" onChange={(e) => {this.captureInput(e)}} value={this.state.title}/>
                        <button className='material-icons addBtn' onClick={() => {
                            this.props.addTask(this.state.title, 'active')
                            this.clearState()
                            }}>add_box
                        </button>
                    </div>
                    <div className='col-1'></div>
                </div>
            </div>
        )
    }
}

export default Input