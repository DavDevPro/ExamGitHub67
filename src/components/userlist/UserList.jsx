import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserCreateContext } from '../../context/UserContext'

const UserList = ({users}) => {
  const {setUser} = useContext(UserCreateContext)
  const navigate = useNavigate()
  
  const userHandler = (user) => {
    setUser(user)
    navigate("/")
  }
  return (
    <ul>
      {
        users.map(user => (
          <li onClick={() => userHandler(user)}>{user.login}</li>
        ))
      }
    </ul>
  )
}

export default UserList