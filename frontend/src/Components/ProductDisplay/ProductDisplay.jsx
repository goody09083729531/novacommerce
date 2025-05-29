import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_icon_dull from '../Assets/star_icon_dull.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            {/* <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div> */}
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon_dull} alt="" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
            {/* Description: Experience high-quality sound with our Classic Wireless Earbuds. Designed for comfort and convenience, these earbuds offer crystal-clear audio, a secure fit, and up to 6 hours of battery life on a single charge. Perfect for workouts, commutes, or relaxing at home. Compatible with all Bluetooth-enabled devices.
            Features:
            True wireless stereo sound

            Comfortable ergonomic design

            Built-in microphone for hands-free calls

            Portable charging case included

            Sweat and water resistant */}
            {product.product_desc}
            </div>
            {/* <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div> */}
            <button onClick={() => {addToCart(product.id)}}>Add to Cart</button>
            <p className='productdisplay-right-category'><span>Category: </span>Mobilities, Shoes, Mowers, Furnitures</p>
            <p className='productdisplay-right-category'><span>Category: </span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay