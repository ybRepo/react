import React from 'react'

const Task = ({ id, description, status, toggleModal }) => (
    <tr>
        <td className="task-title">{id}</td>
        <td className="task-title">{description}</td>
        <td className="task-title">{status}</td>
        <td><button id="myBtn" onClick={() => toggleModal(id)}>View</button></td>
    </tr>
)

export default Task


