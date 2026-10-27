import React from 'react';
import './Logout.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';

const Logout = () => {
  const user = useSelector((state) => state.user.user); 
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="logout">
      <h1>
        Welcome <span className="user__name">{user.name}</span>
      </h1>
      <h2>You are logged in!</h2>
      <button className="logout__button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;