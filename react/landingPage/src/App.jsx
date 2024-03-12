// App.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
// import './App.css'; // Assuming you have some global styles
import './style/styles.css'
function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
