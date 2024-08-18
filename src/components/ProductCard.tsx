import React from 'react';
import styled from 'styled-components';

interface ProductCardProps {
  name: string;
  price: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price }) => {
  return (
    <Card>
      <ProductImage src="https://via.placeholder.com/150" alt={name} />
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price.toFixed(2)}</ProductPrice>
      </ProductInfo>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 10px;
`;

const ProductName = styled.h3`
  font-size: 1.2em;
  margin: 0;
`;

const ProductPrice = styled.p`
  color: #888;
  margin: 5px 0 0;
`;
