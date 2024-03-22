import React from 'react';
import productStore from "../stores/productStore";

function ProductDetails() {
  let store = productStore();
  let {product, fetchData, isLoading} = store;
  
  return (
    <div>
       
      <button onClick={fetchData}>Show Product Details</button>
      {
        isLoading && <div>Loading ...</div>
       }
    { product.title ?
    <div>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Discount: {product.discountPercentage}%</p>
        <p>Rating: {product.rating}</p>
        <p>Stock: {product.stock}</p>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <img src={product.thumbnail} alt={product.title} />
        <h3>Images</h3>
        <div>
            {product.images.map((image, index) => (
            <img key={index} src={image} alt="" />
            ))}
            </div>
      </div> : ''
}
    </div>
  );
}

export default ProductDetails;
