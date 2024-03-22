import React, { useReducer, useState } from "react";
import {useNavigate } from 'react-router-dom';

const initState = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  password: '',
  confirmPassword: ''
};

function reducer(state, action) {
  return { ...state, [action.field]: action.value }
}

const Signup = () => {
  const [state, dispatch] = useReducer(reducer, initState)
  const navigate = useNavigate();
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.firstName || !state.lastName || !state.email || !state.contact || !state.password || !state.confirmPassword) {
      setFormError('Please fill in all fields.');
      return;
    }

    if (state.password !== state.confirmPassword) {
      setFormError('Passwords do not match.');
      return;
    }
    localStorage.setItem('userData', JSON.stringify(state));
    navigate('/login')
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstName" placeholder="First Name" value={state.firstName} onChange={handleChange} />
        <input type="text" name="lastName" placeholder="Last Name" value={state.lastName} onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} />
        <input type="text" name="contact" placeholder="Contact" value={state.contact} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={state.confirmPassword} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );

};

export default Signup;