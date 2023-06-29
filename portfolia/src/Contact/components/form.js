import React from 'react';
import './form.css';

const Form = () => {
  return (
  <div className='formContainer'>
    <div className="card">
      <h2 className='contactText'>Contact</h2>
      <div className="row">
        <div className="col">
          <div className="form-group">
            <label>Name</label>
            <input type="text" />
          </div>
        </div>

        <div className="col">
          <div className="form-group">
            <label>Email</label>
            <input type="text" />
          </div>
        </div>

        <div className="col">
          <div className="form-group">
            <label>Message</label>
            <textarea></textarea>
          </div>
        </div>

        <div className="col">
          <input type="submit" value="Submit" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default Form;
