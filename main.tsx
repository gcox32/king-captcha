import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { KingCaptcha } from './src/components/KingCaptcha';

const App = () => {
  const [showCaptcha, setShowCaptcha] = useState(false);

  const handleSuccess = () => {
    alert('Verification successful!');
    setShowCaptcha(false);
  };

  const handleFailure = () => {
    alert('Incorrect move. Try again!');
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
      <h1>KingCaptcha Demo</h1>
      <button 
        onClick={() => setShowCaptcha(true)}
        style={{
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          cursor: 'pointer'
        }}
      >
        I'm Human
      </button>
      
      {showCaptcha && (
        <KingCaptcha 
          label="Prove it" 
          boardSize={3}
          onClose={() => setShowCaptcha(false)}
        />
      )}
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
