import React from 'react';
import ReactDOM from 'react-dom/client';
import { KingCaptcha } from './src/KingCaptcha';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <KingCaptcha label="Previewing KingCaptcha" />
  </React.StrictMode>
);
