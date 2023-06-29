import React from 'react';
import Form from '../components/form';
import Navbar from '../../Shared/Navbar';
import Footer from '../../Shared/Footer';
import './ContactPage.css'; // Import the CSS file

const ContactPage = () => {
  return (
    <div className="pageContainer">
      <Navbar />  
      <div className="formContainer">
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;