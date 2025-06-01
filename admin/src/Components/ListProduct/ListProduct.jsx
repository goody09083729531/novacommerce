import React, { useEffect, useState } from 'react';
import './ListProduct.css';
import bin_icon from '../../assets/cart_remove_icon.png';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('https://novabackend-hr27.onrender.com/allproducts')
    .then((res) => res.json())
    .then((data) => {setAllProducts(data)});
  }

  useEffect(() => {
    fetchInfo();
  }, []);


  const remove_product = async (id) => {
    await fetch('https://novabackend-hr27.onrender.com/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: id})
    })
    await fetchInfo();
  }

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Product</p>
        <p>Title</p>
        <p>Product Description</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product, index) => {
          return <>
            <div key={index} className="listproduct-format-main listproduct-format">
              <img src={product.image} alt="" className="listproduct-product-icon" />
              <p>{product.name}</p>
              <p>{product.product_desc}</p>
              <p>${product.old_price}</p>
              <p>${product.new_price}</p>
              <p>{product.category}</p>
              <img src={bin_icon} onClick={() => {remove_product(product.id)}} alt="" className="listproduct-remove-icon" />
            </div>
            <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct