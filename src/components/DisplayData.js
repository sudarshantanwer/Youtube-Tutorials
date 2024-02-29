import React from 'react';
import '../styles/displayData.css'; // Import the CSS file
import useEmployeeStore from '../stores/EmployeeStore';
import useUserStore from '../stores/UserStore';

const DisplayData = () => {
  const { employeeCode, salary, department, role } = useEmployeeStore();
  const { firstName, lastName, email, salary: userSalary } = useUserStore();

  return (
    <div className="display-data">
    <h2>User Details:</h2>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>User Salary: {userSalary}</p>
      <br></br>
      <h2>Employee Details:</h2>
      <p>Employee Code: {employeeCode}</p>
      <p>Salary: {salary}</p>
      <p>Department: {department}</p>
      <p>Role: {role}</p>
    </div>
  );
};

export default DisplayData;
