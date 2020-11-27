import React from 'react';
import './Welcome.css';

interface WelcomeProps {  }

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <div className="container">
      <strong>io ionic</strong>
      <p>Welcome to io ionic, send / receive data from your RPi's IO pins.</p>
    </div>
  );
};

export default Welcome;
