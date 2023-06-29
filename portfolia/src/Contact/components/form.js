import React, { useState } from 'react';
import './form.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError('');
  };

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);
    setEmailError('');

    // Email validation regex pattern
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (!emailPattern.test(enteredEmail)) {
      setEmailError('Invalid email address');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === '') {
      setNameError('Name is required');
    }

    if (email === '') {
      setEmailError('Email is required');
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
              <input type="text" value={name} onChange={handleNameChange} className={nameError ? 'error' : ''} />
              {nameError && <span className="error">{nameError}</span>}
            </div>
          </div>

          <div className="col">
            <div className="form-group">
              <label>Email</label>
              <input type="text" value={email} onChange={handleEmailChange} className={emailError ? 'error' : ''} />
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