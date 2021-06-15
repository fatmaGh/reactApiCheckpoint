import React from 'react'
import './App.css'

const UserList = ({users}) => {
    return (
        <div>
            {
                users && users.map(user=>{
                return(
                    <div className='user__container' key={users.id}>
                        <h4 className='user__name'>{user.name}</h4>
                        <div className='user__information'>
                            <p className='userName'><span className='title'>Username: </span>{user.username}</p>
                            <p className='email'><span className='title'>E-mail: </span>{user.email}</p>
                            <p className='street'><span className='title'>Street: </span>{user.address.street}</p>
                            <p className='city'><span className='title'>City: </span>{user.address.city}</p>
                        </div>
                    </div>
                )

                })
            }
            {/* {
                users && users.map(user=>{
                return(
                    <table>
                            <tr>
                            <th rowspan="2">ID</th>
                            <th rowspan="2">Name</th>
                            <th rowspan="2">User Name</th>
                            <th rowspan="2">Email</th>
                            <th colspan="3">Address</th>              
                            </tr>

                            <tr>
                            <th>Street</th>
                            <th>Suite</th>
                            <th>City</th>
                            </tr>

                            <tr ng-repeat = "user in users">
                            <td>{ user.id }</td>
                            <td>{ user.name }</td>
                            <td>{ user.username }</td>
                            <td>{ user.email }</td>
                            <td>{ user.address.street }</td>
                            <td>{ user.address.suite }</td>
                            <td>{ user.address.city }</td>
                            </tr>
                        </table>)

                    })
                    } */}
                </div>
    )
}
export default UserList
