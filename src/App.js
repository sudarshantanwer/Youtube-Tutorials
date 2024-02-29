// App.js
import React from 'react';

import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import DisplayData from './DisplayData';

const App = () => {
  return (
    <div className='app'>
      <FirstComponent />
      <SecondComponent />
      <DisplayData />
    </div>
  );
};

export default App;
