import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import './CSS/LoginSignup.css';
import { ShopContext } from '../Context/ShopContext'; // ⬅️ Import context

const MakePayment = () => {
  const location = useLocation();
  const totalAmount = location.state?.totalAmount || 0;
  const cartItemsRaw = location.state?.cartItems || {};
  const allProduct = location.state?.allProduct || [];

  const { setCartItems } = useContext(ShopContext); // ⬅️ Destructure cart setter

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSendEmail = () => {
    // Prepare email body to company
    const cartItemsFormatted = allProduct
      .filter(item => cartItemsRaw[item.id] > 0)
      .map(item => `${item.name} - $${item.new_price} x ${cartItemsRaw[item.id]} = $${item.new_price * cartItemsRaw[item.id]}`)
      .join('\n');

    const templateParams = {
      name,
      email,
      address,
      total: totalAmount,
      items: cartItemsFormatted
    };

    emailjs.send(
      'service_5on29ie',      // Replace with your EmailJS service ID
      'template_htuo19b',     // Replace with your EmailJS template ID
      templateParams,
      '4z7T0Syv0t6ApxcOR'       // Replace with your EmailJS public key
    ).then(() => {
      console.log('Order sent to company email.');
    }).catch((error) => {
      console.error('Failed to send company email:', error);
    });

    // Reset the cart items
    const emptyCart = {};
    for (let key in cartItemsRaw) {
      emptyCart[key] = 0;
    }
    setCartItems(emptyCart); // ⬅️ Clears the cart after payment

    // Client-facing email popup
    const companyEmail = 'info@novaandcoltd.top';
    const subject = encodeURIComponent('Payment Request - Nova&Co');
    const body = encodeURIComponent(
      `Good day Nova&Co,\n\nMy name is ${name}.\nI would like to proceed with the payment of $${totalAmount} for the items I selected.\n\nMy address is:\n${address}\n\nPlease let me know how to proceed.\n\nThank you.`
    );
    const mailtoLink = `mailto:${companyEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
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

export default MakePayment;