import axios from 'axios'

export default {
    getTasks: () => {
        return new Promise((resolve, reject) => {
            axios
                .get('tasks')
                .then(response => resolve(response.data))
        })
    },
    addTask: (description, status) => {
        return new Promise((resolve, reject) => {
            axios
                .post('tasks', {
                    description,
                    status
                })
                .then(response => resolve(response.data))
        })
    }
}