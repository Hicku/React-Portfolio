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
    setEmail(event.target.value);
    setEmailError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      setNameError('Name is required');
    }

    if (!email) {
      setEmailError('Email is required');
    }

    // Additional validation and submission logic here
  };

  return (
    <div className='formContainer'>
      <div className="card">
        <h2 className='contactText'>Contact</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label>Name</label>
                <input type="text" value={name} onChange={handleNameChange} />
                {nameError && <p className="error">{nameError}</p>}
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Email</label>
                <input type="text" value={email} onChange={handleEmailChange} />
                {emailError && <p className="error">{emailError}</p>}
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <label>Message</label>
                <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
              </div>
            </div>

            <div className="col">
              <input type="submit" value="Submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;