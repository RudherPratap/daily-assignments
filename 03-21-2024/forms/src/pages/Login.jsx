import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initState = {
  email: '',
  password: '',
};

function reducer(state, action) {
  return { ...state, [action.field]: action.value };
}

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const navigate = useNavigate();
  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({ field: name, value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.email.trim() || !state.password.trim()) {
      setFormError('Please fill in all fields.');
      return;
    }

    const userData = JSON.parse(localStorage.getItem('userData'));
    if (userData && userData.email === state.email && userData.password === state.password) {
      alert('Login successful');
    } else {
      setFormError('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={state.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={state.password} onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
