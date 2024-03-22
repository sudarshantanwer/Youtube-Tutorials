import React from 'react';
import '../styles/profile.css';
import useUserStore from '../stores/UserStore';
import ProductDetails from './ProductDetails';

const UserForm = () => {
  const { firstName, lastName, email, setUserDetails, fetchData, product } = useUserStore();
console.log("product>>>", product);
console.log("fetchData>>>", fetchData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { firstName, lastName, email });
    // Add your form submission logic here
  };

  return (
    <div className="user-form">
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
<ProductDetails></ProductDetails>
    </div>
  );
};

export default UserForm;
