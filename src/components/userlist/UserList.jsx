import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserCreateContext } from '../../context/UserContext'
import './style.scss'

const UserList = ({users}) => {
  const {setUser} = useContext(UserCreateContext)
  const navigate = useNavigate()

  const userHandler = (user) => {
    setUser(user)
    navigate("/")
  }
  return (
    <ul className='user__list my-5 border rounded shadow py-3 pe-5'>
      <i className='text-center text-muted'>Users matching your search:</i>
      {
        users.map(user => (
          <li onClick={() => userHandler(user)}>
            <img src={user.avatar_url} width={40} className="rounded-circle me-3 my-2" />
            {user.login}
          </li>
        ))
      }
    </ul>
  )
}

export default UserList