// App.js
import React from 'react';

import UserComponent from './components/UserComponent';
import EmployeeComponent from './components/EmployeeComponent';
import DisplayData from './components/DisplayData';

const App = () => {
  return (
    <div className='app'>
      <UserComponent />
      <EmployeeComponent />
      <DisplayData />
    </div>
  );
};

export default App;
