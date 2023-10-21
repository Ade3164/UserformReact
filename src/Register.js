import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(false); // Define the register state

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Create the configuration object inside handleSubmit
    const configuration = {
      method: "post",
      url: "https://userauthentication001.onrender.com/register",
      data: {
        email,
        password,
      },
    };

    // Make the Axios request with the current configuration
    axios(configuration)
      .then((result) => {
        setRegister(true);
      })
      .catch((error) => {
        setRegister(false); // Handle errors by setting register state to false
      });
  };

  return (
    <>
      <h2>Register</h2>
      <Form onSubmit={handleSubmit}>
        {/* email */}
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            name="email"
            value={email}
            placeholder='Enter your email address'
            onChange={handleEmailChange}
          />
        </Form.Group>

        {/* password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handlePasswordChange}
          />
        </Form.Group>

        {/* submit button */}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {/* Display success or error message based on the register state */}
      {register ? (
        <p className="text-success">You Are Registered Successfully</p>
      ) : (
        <p className="text-danger">You Are Not Registered</p>
      )}
    </>
  );
}
