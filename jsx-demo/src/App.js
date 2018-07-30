import React, { Component } from 'react';
import './App.css';




//Take care of defining the constructor used to add new students to the student array
class StudentData {
  constructor(name, program, grade) {
    this.name = name
    this.program = program
    this.grade = grade
  }
}

// The app component contains the input fields needed for a user to add new students, and calls the StudentList component. 
class App extends Component {
  // Takes care of rendering the input fields and passing the students array from state to the the StudentList component
  render() {
    return (
      <div className="App">
        <UserInput /> 
      </div>
    );
  }
}

// Takes care of rendering the inputs fields and 
class UserInput extends Component{
    state = {
      name: '',
      program: '',
      grade: '',
      students:[],
      filters:[{
        grade: 86
      }]
    }

  // Takes care of taking user input from onChange and assign its value to state keys
  updateStudentInfo = (e) => {
    console.log([e.target.name], e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  // Takes care of adding student to students array in state followed by a callback to clearState 
  addStudent = () => {
    this.setState({
      students: this.state.students.concat(new StudentData(this.state.name, this.state.program, this.state.grade))
    }, () => {
      this.clearState()
    })
  }

  // Takes care of clearing the state once a user has submitted new students
  clearState = () => {
    this.setState({
      id: '',
      name: '',
      program: '',
      grade: ''
    })
  }

  render(){
    return(
      <div>
        <div>
          <input type="text" name="name" onChange={this.updateStudentInfo} value={this.state.name}/>
          <input type = "text" name="program" onChange={this.updateStudentInfo} value={this.state.program}/>
          <input type = "text" name="grade" onChange={this.updateStudentInfo} value={this.state.grade}/>
          <button onClick={this.addStudent}>Submit</button>
        </div>
        <StudentList newStudentList = {this.state.students} filters = {this.state.filters} /> 
      </div>
    )
  }
}

// Takes props from the array state.students[] and then renders a component containing an array built from the Student component. 
class StudentList extends Component{ 
  render(){
    
    //StudentJSX is an array of Student components.
    let studentsJSX = this.props.newStudentList.map((element, i) => {
      return <Student 
        //Student component requires the values for name and program which are passed to it as props from its parent StudentList.
        student = {element.name}
        program = {element.program}
        grade = {element.grade}
        key = {i}
        />
    })
    
    return (
     <div>{studentsJSX}</div>
    ) 
  }
}

// Provides the instructions for rending each student using the props it received from StudentList
class Student extends Component {
  render () {
    return (
      <li>
        <div>Name: {this.props.student}</div>
        <div>Program: {this.props.program}</div>
        <div>grade: {this.props.grade}</div>
      </li>
    )
  }
}

export default App;