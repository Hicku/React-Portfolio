import React, { useState } from 'react';
import './form.css';

const Form = () => {
  // State variables to store form input values and error messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  // Event handler for name input changes
  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(''); // Clear the name error message
  };

  // Event handler for email input changes
  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
    setEmailError(''); // Clear the email error message

    // Email validation regex pattern
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailPattern.test(enteredEmail)) {
      setEmailError('Invalid email address'); // Set the email error message if the entered email is invalid
    }
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === '') {
      setNameError('Name is required'); // Set the name error message if the name is empty
    }

    if (email === '') {
      setEmailError('Email is required'); // Set the email error message if the email is empty
    }
  };

  return (
    <div className="formContainer">
      <div className="card">
        <h2 className="contactText">Contact</h2>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                className={nameError ? 'error' : ''}
              />
              {nameError && <span className="error">{nameError}</span>}
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={handleEmailChange}
                className={emailError ? 'error' : ''}
              />
              {emailError && <span className="error">{emailError}</span>}
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Message</label>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            </div>
          </div>

          <div className="col">
            <input type="submit" value="Submit" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;