import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './CSS/LoginSignup.css';

const MakePayment = () => {
  const location = useLocation();
  const totalAmount = location.state?.totalAmount || 0;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSendEmail = () => {
    const companyEmail = 'info@novaandcoltd.top'; // Replace with your company email
    const subject = encodeURIComponent('Payment Request - Nova&Co');
    const body = encodeURIComponent(
      `Good day Nova&Co,\nMy Name is ${name}\nI would like to proceed with the payment of $${totalAmount}, for the items I selected`
    );

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${companyEmail}&su=${subject}&body=${body}`;
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Make Payment</h1>
        <div className="loginsignup-fields">
          <input
            type="text"
            placeholder='Your Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder='Address Line'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="number"
            placeholder='Total Amount'
            value={totalAmount}
            readOnly
          />
        </div>
        <button onClick={handleSendEmail}>Continue to Pay</button>
      </div>
    </div>
  );
};

export default MakePayment