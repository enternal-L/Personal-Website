import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';
import Desktop from './components/Desktop';

const App = () => {
  return (
    <div className="h-screen bg-[#ffffff] text-[#37352f] w-full">
      <Desktop />
      <Analytics />
    </div>
  );
};

export default App;
