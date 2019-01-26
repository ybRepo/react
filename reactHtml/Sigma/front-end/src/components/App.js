import React from 'react'
import { Link } from 'react-router-dom'
import {Badge} from 'reactstrap'

var rowStyle = {
    cursor: 'pointer'
}

function getBadgeValue(status) {
    if (status === 'Active') {
        return 'secondary' 
    } else if (status === 'Pending') {
        return 'warning'
    } else if (status === 'Approved'){
        return 'success'
    } else if (status === 'Declined') {
        return 'danger'
    }else{
        return 'primary'
    }
}

const App = ({ index, id, source, date, firstName, lastName, province, product, amount, riskTier, program, status }) => (
    <tr style={rowStyle} >
        <td>{index}</td>
        <td>{id}</td>
        <td>{source}</td>
        <td>{date}</td>
        <td>{firstName} {lastName}</td>
        <td>{province}</td>
        <td>{product}</td>
        <td>{amount}</td>
        <td>{riskTier}</td>
        <td>{program}</td>
        <td><Badge color={getBadgeValue(status)}>{status}</Badge></td>
        <td><Link to={`/module/credit/${id}`}>View</Link></td>
    </tr>
)

export default App