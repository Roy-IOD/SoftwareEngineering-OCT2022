import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';

function ChangeUsernameForm() {
  const [newName, setNewName] = useState('');
  const [nameChangeResult, setNameChangeResult] = useState('');
  const { user, updateUser } = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();
    updateUser({ ...user, name: newName }); // Update name in context
    axios.put(`http://localhost:8081/api/users/${user._id}/name`, { newName })
      .then(response => {
        setNameChangeResult('Name changed successfully.');
        setNewName(''); // Clear input field
      })
      .catch(error => {
        setNameChangeResult('Error changing name.');
        console.log(error);
      });
  }
  

  if (!user) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Change name</h2>
      <label>
        Current name: {user.name}
      </label>
      <br /><br />
      <label>
        New name:
        <input type="text" value={newName} onChange={(event) => setNewName(event.target.value)} />
      </label>
      <br /><br />
      <button type="submit">Change name</button>

      <p>{nameChangeResult}</p>
    </form>
  );
}

export default ChangeUsernameForm;
