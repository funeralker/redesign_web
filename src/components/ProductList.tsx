import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
  return (
    <ProductsContainer>
      <ProductCard name="Product 1" price={29.99} />
      <ProductCard name="Product 2" price={39.99} />
      <ProductCard name="Product 3" price={49.99} />
      <ProductCard name="Product 4" price={59.99} />
    </ProductsContainer>
  );
};

export default ProductList;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  padding: 20px;
`;
