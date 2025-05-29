import React from 'react';
import './Breadcrumbs.css';
import arrow_icon from '../Assets/breadcrumbarrow_icon.png';

const Breadcrumbs = (props) => {
  const {product} = props;
  return (
    <div className='breadcrumbs'>
      HOME <img style={{ width: '7px' }} src={arrow_icon} alt="" /> SHOP <img style={{ width: '7px' }} src={arrow_icon} alt="" /> {product.category} <img style={{ width: '7px' }} src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrumbs