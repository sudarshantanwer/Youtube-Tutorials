// FirstComponent.js
import React from 'react';
import useStore from './store';

const FirstComponent = () => {
    const {text, setText} = useStore();

    const handleChange = (e)=>{
        setText(e.target.value);
    }


  return (
    <div style={{ backgroundColor: 'lightblue', padding: '20px', margin: '10px' }}>
      <h2>First Component</h2>
      <input type="text" value={text} onChange={handleChange} placeholder="Enter text" />
    </div>
  );
};

export default FirstComponent;
