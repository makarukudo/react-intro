import React, { useState, useEffect } from 'react';

function UsersTable({ refresh }) {
  const [users, setUsers] = useState([])

  useEffect(() => {
    loadUsers()
  }, [refresh])

  const loadUsers = async() => {
    console.log("LOADING USERS FROM SERVER")
    const reply = await fetch('http://127.0.0.1:3333/api/users')
    const result = await reply.json()
    if (result.status) {
      setUsers(result.users)
    }
    console.log("USERS", result)
  }

  const renderUser = (user, userIndex) => (
    <tr key={user._id}>
      <td>{user._id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  )

  return (
    <div>
      <h1>Users Table</h1>
      <table style={{ width: '100%' }}>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        { users.map(renderUser) }
      </table>
    </div>

  )
}

export default UsersTable
