import React from 'react';
import './styles/employee.css';
import useEmployeeStore from './EmployeeStore';

const EmployeeForm = () => {
  const { employeeCode, salary, department, role, setEmployeeDetails, clearEmployeeDetails } = useEmployeeStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { employeeCode, salary, department, role });
    // Add your form submission logic here
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>Employee Details</h2>
      <label>
        Employee Code:
        <input
          type="text"
          value={employeeCode}
          onChange={(e) => setEmployeeDetails({ employeeCode: e.target.value })}
        />
      </label>
      <br />

      <label>
        Salary:
        <input
          type="number"
          value={salary}
          onChange={(e) => setEmployeeDetails({ salary: e.target.value })}
        />
      </label>
      <br />

      <label>
        Department:
        <input
          type="text"
          value={department}
          onChange={(e) => setEmployeeDetails({ department: e.target.value })}
        />
      </label>
      <br />

      <label>
        Role:
        <input
          type="text"
          value={role}
          onChange={(e) => setEmployeeDetails({ role: e.target.value })}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default EmployeeForm;
