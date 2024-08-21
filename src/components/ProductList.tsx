import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  const products = [
    { name: 'Product 1', price: 29.99, description: 'This is a great product.' },
    { name: 'Product 2', price: 39.99, description: 'This is another great product.' },
    { name: 'Product 3', price: 19.99, description: 'Yet another amazing product.' },
    { name: 'Product 4', price: 49.99, description: 'A product you can\'t miss.' },
    { name: 'Product 5', price: 59.99, description: 'This product is top-notch.' },
    { name: 'Product 6', price: 24.99, description: 'You\'ll love this product.' },
  ];

  return (
    <ProductGrid>
      {products.map((product, index) => (
        <CardWrapper key={product.name} isOdd={index % 2 !== 0}>
          <ProductCard
            name={product.name}
            price={product.price}
            description={product.description}
            isOdd={index % 2 !== 0}
          />
        </CardWrapper>
      ))}
    </ProductGrid>
  );
};

export default ProductList;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 35px; 
  padding: 20px;
  justify-content: center; 

  @media (max-width: 768px) {
    grid-template-columns: 1fr; 
    justify-items: center; 
  }
`;

const CardWrapper = styled.div<{ isOdd: boolean }>`
  display: flex;
  justify-content: center;
`;
