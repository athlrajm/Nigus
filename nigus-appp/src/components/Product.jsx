import React from 'react'
import './Product.css'

function ProductsPage({ name, description, imageUrl }) {
  return (
    <div className="product">
    <img src={imageUrl} alt={name} />
    <h3 className='cp12'>{name}</h3>
    <p>{description}</p>
  </div>
);
}

function Product() {
const products = [
  {
    name: 'WEB DEVELOPMENT',
    description: 'web development using react, php, js',
    imageUrl: 'https://png.pngtree.com/element_our/png/20181010/programming-and-coding-concept-application-development-icon-for-websites-png_132994.jpg',
  },
  {
    name: 'SW DEVELOPMENT',
    description: 'web development using react, php, js',
    imageUrl: 'https://us.123rf.com/450wm/stockgiu/stockgiu1709/stockgiu170905477/86637778-computer-with-code-programing-software-data.jpg?ver=6',
  },
  {
    name: 'APP DEVELOPMENT',
    description: 'web development using react, php, js',
    imageUrl: 'https://png.pngtree.com/element_our/png/20181010/programming-and-coding-concept-application-development-icon-for-websites-png_132994.jpg',
  },
 
];

return (
  <div className="products-page">
    <h2>Our Products</h2>
    <div className="products-container">
      {products.map((product, index) => (
        <ProductsPage  
          key={index}
          name={product.name}
          description={product.description}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  </div>
  )
}

export default Product