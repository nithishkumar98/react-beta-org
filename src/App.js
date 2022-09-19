import React from 'react';
import './style.css';
// in this am following only the react beta document
function MyButton() {
  return <button>Hello</button>;
}

export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
