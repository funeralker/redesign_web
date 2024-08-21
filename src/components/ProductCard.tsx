import React from 'react';
import styled from 'styled-components';

interface ProductCardProps {
  name: string;
  price: number;
  description: string;
  isOdd: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, price, description, isOdd }) => {
  return (
    <Card isOdd={isOdd}>
      <ProductName>{name}</ProductName>
      <CardContent>
        <ProductImage src="https://via.placeholder.com/200" alt={name} />
        <ProductDetails>
          <ProductDescription>{description}</ProductDescription>
          <ProductPrice>${price.toFixed(2)}</ProductPrice>
        </ProductDetails>
      </CardContent>
    </Card>
  );
};

export default ProductCard;

const Card = styled.div<{ isOdd: boolean }>`
  background-color: ${({ isOdd }) => (isOdd ? '#e0f7fa' : '#fffde7')};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
  padding: 15px;
  width: 450px;
  height: 300px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductName = styled.h3`
  font-size: 1.2em;
  margin: 0 0 10px 0; 
`;

const CardContent = styled.div`
  display: flex;
  align-items: center; 
  flex-grow: 1;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 10px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  flex-grow: 1;
`;

const ProductDescription = styled.p`
  margin: 0;
  font-size: 1em;
  color: #555;
  flex-grow: 1;
`;

const ProductPrice = styled.p`
  color: #333;
  font-weight: bold;
  margin: 10px 0 0 0;
`;
