import React, { useState } from 'react';

const userState = {
  name: '',
  email: '',
  password: ''
}

function UserForm({ onCreate }) {
  const [user, setUser] = useState(userState)

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async(event) => {
    event.preventDefault()
    console.log("USER", user)
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const reply = await fetch('http://127.0.0.1:3333/api/users', options)
    const result = await reply.json()
    if (result.status) {
      setUser(userState)
      onCreate && onCreate()
    }
    console.log("POST DATA", result)
  }

  return (
    <div style={{ maxWidth: 300, margin: '0px auto' }}>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          type="text"
          name="name"
          style={{ width: '100%' }}
          required
          value={user.name}
          onChange={handleChange}
          />
        <input
          placeholder="Email"
          type="text"
          name="email"
          style={{ width: '100%' }}
          required
          value={user.email}
          onChange={handleChange}
          />
        <input
          placeholder="Your Passwordr"
          type="password"
          name="password"
          style={{ width: '100%' }}
          required
          value={user.password}
          onChange={handleChange}
          />
        <button type="submit">Add User</button>
      </form>
    </div>

  )
}

export default UserForm
