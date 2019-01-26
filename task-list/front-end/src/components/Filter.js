import React, {Component} from 'react';

class Filter extends Component {
    //Filter w/ all tasks
    allTaskCounter = () =>{
        let val =  this.props.tasks.length
        return val
    }

    //Filter w/ done tasks
    doneTaskCounter = () => {
        let doneTasksArr = this.props.tasks.filter(task => task.status === 'done')
        
        return doneTasksArr.length
    }

    //Filter w/ active tasks
    activeTaskCounter = () => {
        let activeTasksArr = this.props.tasks.filter(task => task.status === 'active')
        return activeTasksArr.length
    }

    //Takes care of rendering filter component
    render(){
        return(
            <div className="container filterWrapper">
                <div className='row'>
                    <div className= 'col-11'>
                    </div>
                    <div className= 'col-1'>
                        <select className= "filterControl" name="filter" onChange={(e)=> this.props.updateFilter(e.target.value)}>
                            <option value="active">Active ({this.activeTaskCounter()})</option>
                            <option value="done">Done ({this.doneTaskCounter()})</option>
                            <option value ="all">All ({this.allTaskCounter()})</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default Filter;