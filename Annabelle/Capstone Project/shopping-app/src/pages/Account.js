import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import ChangeUsernameForm from '../components/ChangeUsernameForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UserPage() {
  const { user, updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleDelete = () => {
    axios.delete(`http://localhost:8081/api/users/${user._id}`)
      .then(response => {
        updateUser(null);
        navigate('/home');
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>Welcome {user.name}</h1>
      <p>Email: {user.email}</p>
      <button onClick={handleDelete}>Delete Account</button>
      <ChangeUsernameForm />
    </div>
  );
}

export default UserPage;
