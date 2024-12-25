import React, { useState } from 'react';
import AuthForm from './components/AuthForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState('');

  const handleLoginSuccess = (username) => {
    setIsLoggedIn(true);
    setWelcomeMessage(`Hello, ${username}!`);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {!isLoggedIn ? (
        <AuthForm onLoginSuccess={handleLoginSuccess} />
      ) : (
        <h1>{welcomeMessage}</h1>
      )}
    </div>
  );
};

export default App;
