// SecondComponent.js
import React from 'react';
import useStore from './store';

const SecondComponent = () => {
  const {text} = useStore();

  return (
    <div style={{ backgroundColor: 'lightgreen', padding: '20px', margin: '10px' }}>
      <h2>Second Component</h2>
      <p> {text}</p>
    </div>
  );
};

export default SecondComponent;
