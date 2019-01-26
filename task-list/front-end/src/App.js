import React, { Component } from 'react';
import './App.css';
import TaskController from './controllers/tasks'
import {
  Navbar,
  Input,
  Tasklist,
  Filter,
  TaskView
} from './components'

class App extends Component { 
  state = {
    tasks: [],
    filterOption: 'active',
    modal: false,
    taskDetail: [],
    refresh: false
  }

  //Takes care of inital load of state after GET Task call
  loadTaskList = (gotTasks) => {
    this.setState({
      tasks: [...gotTasks]
    })
  }

  //Takes care of adding task state w/ new Task
  addTask = (description, status) => {
    TaskController
      .addTask(description, status)
      .then(task => {
        this.setState({
          tasks: [...this.state.tasks, task]
        })
      })
  }

  //Takes care of updating task and updating state
  updateTask = (id, status) => {
    console.log('update called')
    TaskController
      .updateTask(id)
      .then(() => {
        let newArr = this.state.tasks.filter((task => task.id !== id))
        let updatedTask = this.state.tasks.filter((task => task.id === id))
        updatedTask[0].status = status
        this.toggleModal()
        this.setState({
          tasks: [...newArr, updatedTask[0]]
        }, () => console.log('updated array', this.state.tasks ))
      })
  }

  //Takes care of deleting task and updating state
  deleteTask = (id) => {
    TaskController
      .deleteTask(id)
      .then(() => {
        this.toggleModal()
        this.setState({
          tasks: this.state.tasks.filter((task => task.id !== id))
        })
      })
  }

  //Takes care of seting state filter value
  updateFilter = (val) => {
    this.setState({
      filterOption: val
    })
  }

  //Takes care of toggling modal window and calling the task view function
  toggleModal = (id) => {
    console.log('modal updated to: ', this.state.modal)
    this.setState({
      modal: this.state.modal ? false : true,
    }, () => this.taskView(id))
  }

  //Takes care of showing the task details in the modal window
  taskView = (id) => {
    console.log('taskView called for id: ', id,)
    this.setState({
      taskDetail: this.state.tasks.filter((task => task.id === id))
    })

  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Input  addTask={this.addTask}/>
        <Filter tasks={this.state.tasks} updateFilter={this.updateFilter}/>
        <Tasklist 
          loadTaskList={this.loadTaskList} 
          tasks={this.state.tasks} 
          filterOption={this.state.filterOption} 
          taskView={this.taskView} 
          toggleModal={this.toggleModal}

        />
        <TaskView 
          tasks={this.state.tasks} 
          taskDetail = {this.state.taskDetail} 
          modal={this.state.modal} 
          taskView={this.taskView} 
          toggleModal={this.toggleModal}
          updateTask={this.updateTask} 
          deleteTask={this.deleteTask} 
        />
      </div>
    );
  }
}

export default App;