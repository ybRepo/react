import axios from 'axios'

//Takes care of handling API calls to server
export default {
    getTasks: () => {
        return new Promise((resolve, reject) => {
            axios
                .get('http://localhost:8080/tasks')
                .then(response => resolve(response.data))
        })
    },
    addTask: (description, status) => {
        return new Promise((resolve, reject) => {
            axios
                .post('http://localhost:8080/tasks', {
                    description,
                    status,
                })
                .then(response => resolve(response.data))
        })
    },
    updateTask: (id) => {
        return new Promise((resolve, reject) => {
            axios
                .put('http://localhost:8080/tasks/' + id)
                .then(response => resolve(response.data))
        })
    },
    deleteTask: (id) => {
        return new Promise((resolve, reject) => {
            axios
                .delete('http://localhost:8080/tasks/' + id)
                .then(response => resolve(response.data))
        })
    }
}