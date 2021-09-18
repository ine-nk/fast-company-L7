import React, { useEffect, useState } from 'react'
import Users from './components/users'
import api from './api'

const App = () => {
  const [users, setUsers] = useState()

  useEffect(() => {
    api.users.fetchAll()
      .then((data) => {
        setUsers(data)
      })
  }, [])
  console.log('users------------>', users)

  const hanldeDelete = (userId) => {
    const newUsers = users.filter((user) => user._id !== userId)
    setUsers(newUsers)
  }

  const handleToggleBookMark = (id) => {
    // const newUsers = [...users]
    // const index = newUsers.findIndex((user) => user._id === id)
    // newUsers[index].status = !newUsers[index].status
    // setUsers(newUsers)
    setUsers(
      users.map((user) => {
        if (user._id === id) {
          return { ...user, bookmark: !user.bookmark }
        }
        return user
      })
    )
  }

  return (
    <div>
      { users &&
        <Users
          users={ users }
          onDelete={ hanldeDelete }
          onToggleBookMark={ handleToggleBookMark }
        />
      }
    </div>)
}

export default App
