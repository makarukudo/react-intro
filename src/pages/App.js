import React, { useState, useEffect } from 'react';
import './App.css';
import UserForm from '../components/user/UserForm';
import UsersTable from '../components/user/UsersTable';

function App() {
  const [refresh, setRefresh] = useState(false)

  const handleRefresh = () => {
    setRefresh(!refresh)
  }

  return (
    <div className="App">
      <UsersTable refresh={refresh} />
      <UserForm onCreate={handleRefresh} />
    </div>
  );
}

export default App;
