import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>At Nova & Co, where lifestyle meets performance. From From stylish footwear to comfortable home furnishings to innovative mobility solutions and outdoor power equipment, we bring together quality products that support how you live, move, and relax. Whether you're upgrading your space, stepping into something new, or tackling your next outdoor project, Nova & Co. delivers trusted essentials, all in one place.</p>
            <p>Your all-in-one destination for smart, everyday living. Explore our curated selection of durable footwear, functional furniture, efficient mobility aids, and high-performance lawn care tools — all chosen to make life easier, more comfortable, and more productive</p>
        </div>
    </div>
  )
}

export default DescriptionBox