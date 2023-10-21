import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Cookies from "universal-cookie";
const cookies = new Cookies();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const configuration = {
      method: "post",
      url: "https://userauthentication001.onrender.com/login",
      data: {
        email,
        password,
      },
    };

    // Make the Axios request with the current configuration
    axios(configuration)
      .then((result) => {
        cookies.set("TOKEN", result.data.token, {path: "/",});
        // redirect user to the auth page
        window.location.href = "/auth";

        setLogin(true);
      })
      .catch((error) => {
        setLogin(false); // Handle login errors by setting login state to false
      });
  };

  return (
    <>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        {/* Email */}
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder='Enter your Email Address'
          />
        </Form.Group>

        {/* Password */}
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            name="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder='Login password'
          />
        </Form.Group>

        {/* Submit button */}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
      {/* Display login success or error message */}
      {login ? (
        <p className="text-success">Login Successful</p>
      ) : (
        <p className="text-danger">You Are Not Login</p>
      )}
    </>
  );
}
