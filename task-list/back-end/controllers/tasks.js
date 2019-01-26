const Task = require('../model/task')

//Takes care of handling db calls
const TaskController = {
  getTasks: () => {
    return new Promise((resolve, reject) =>{
      Task
      .fetchAll()
      .then(Tasks => {
        const tasks = Tasks.models.map(
          Task => Task.attributes
        )
        resolve(tasks)
      })
      .catch( e => reject(e))
    })

  },
  addTask: (description, status) => {
    return new Promise((resolve, reject) => {
      new Task({
        description,
        status,
      })
      .save()
      .then(Task => resolve(Task.attributes))
    })
  },
  updateTask: (id) => {
    return new Promise((resolve, reject) => {
      new Task(id)
        .where('id',id)
        .save({status: 'done'}, {patch: true})
        .then(() => {
            resolve('Task Updated.')
        })
    })
  },
  deleteTask: (id) => {
    return new Promise((resolve, reject) => {
      new Task({id: id})
        .destroy()
        .then(() => {
          resolve("Task deleted.")
        })
    })
  }
}

module.exports = TaskController