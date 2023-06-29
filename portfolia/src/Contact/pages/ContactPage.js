import React from 'react';
import Form from '../components/form';
import Footer from '../../Shared/Footer';
import './ContactPage.css';

const ContactPage = () => {
  return (
      <div className="pageContainer">
        <div className="formContainer">
          <Form />
        </div>
        <Footer />
      </div>
  );
};

export default ContactPage;