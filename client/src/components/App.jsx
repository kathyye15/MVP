import React from 'react';
import { createRoot } from 'react-dom/client';

export default function App() {
    return (
      <div>
        <h2>Welcome to my app</h2>
      </div>
    );
  }

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);