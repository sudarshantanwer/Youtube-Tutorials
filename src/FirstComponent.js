import React from 'react';
import './styles/profile.css';
import useUserStore from './UserStore';

const UserForm = () => {
  const { firstName, lastName, email, salary, setUserDetails, clearUserDetails } = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { firstName, lastName, email, salary });
    // Add your form submission logic here
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>User Details</h2>
      <label>
        First Name:
        <input
          type="text"
          value={firstName}
          onChange={(e) => setUserDetails({ firstName: e.target.value })}
        />
      </label>
      <br />

      <label>
        Last Name:
        <input
          type="text"
          value={lastName}
          onChange={(e) => setUserDetails({ lastName: e.target.value })}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setUserDetails({ email: e.target.value })}
        />
      </label>
      <br />

      <label>
        Salary:
        <input
          type="number"
          value={salary}
          onChange={(e) => setUserDetails({ salary: e.target.value })}
        />
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
