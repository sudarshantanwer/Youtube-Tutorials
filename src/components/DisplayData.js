import React from 'react';
import '../styles/displayData.css'; // Import the CSS file
import useEmployeeStore from '../stores/EmployeeStore';
import useUserStore from '../stores/UserStore';

const DisplayData = () => {
  const employeeData = useEmployeeStore();
  const userData = useUserStore();

  return (
    <div className="display-data">
    <h2>Stores</h2>
    
      <h3>User Data:</h3> <p>{JSON.stringify(userData)} </p>
      <h3>Employee Data:</h3> <p>{JSON.stringify(employeeData)}</p>
    </div>
  );
};

export default DisplayData;
