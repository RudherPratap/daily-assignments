// App.js
import React from 'react';
import { BrowserRouter as Router,Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/home';
import Users from './components/users';
import Posts from './components/posts';
import Todos from './components/todos';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <NavLink exact="true" to="/" className={({isActive}) => isActive ? "active" : ""} activeclassname="active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeclassname="active">Users</NavLink>
            </li>
            <li>
              <NavLink to="/posts" activeclassname="active">Posts</NavLink>
            </li>
            <li>
              <NavLink to="/todos" activeclassname="active">Todos</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
        <footer>This is the footer.</footer>
      </div>
    </Router>
  );
}

export default App;