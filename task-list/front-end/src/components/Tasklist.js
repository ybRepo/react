import React, {Component} from 'react'
import Task from './Task'
import TaskController from '../controllers/tasks'

class Tasklist extends Component {
    //Takes care of calling b/e GET api call
    componentDidMount() {
        console.log('refresh from tasklist', this.props.refresh)
        this.makeGetCall()
    }

    //Takes care of calling b/e GET end point
    makeGetCall = () => {
        TaskController
            .getTasks()
            .then(tasks => {
                this.props.loadTaskList(tasks)
            })
    }

    //Render tasks list based on selected filter option
    render(){
        let filteredTasks = this.props.filterOption === 'all' ? this.props.tasks : this.props.tasks.filter((task => task.status === this.props.filterOption))
        let newTasksJSX = filteredTasks.map((element, i) => {
            return <Task 
                id = {element.id}
                description = {element.description}
                createdAt = {element.created_at}
                status = {element.status}
                taskView = {this.props.taskView}
                toggleModal ={this.props.toggleModal}
                key = {i}
            />
        })
        
        return(
            <table className="table text-center">
                <thead className="thead-light">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Description</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {newTasksJSX}
                </tbody>
            </table>
        )
    }
}

export default Tasklist