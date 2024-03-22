import React from 'react';
import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup/>} /> 
      </Routes>
    </Router>
  );
};

export default App;
