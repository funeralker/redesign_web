import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

// Define the Product interface
interface Product {
  name: string;
  type: string;
  price: number;
  shortDescription: string;
  longDescription: string;
  photo: string;
  thumbnailPhoto1: string;
  thumbnailPhoto2: string;
  thumbnailPhoto3: string;
}

interface ProductListProps {
  title?: string;
  data: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, data }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <ProductGrid>
        {products.map((product, index) => (
          <CardWrapper key={product.name} isOdd={index % 2 !== 0}>
            <ProductCard
              name={product.name}
              price={product.price}
              description={product.shortDescription}
              isOdd={index % 2 !== 0}
              product={product} 
            />
          </CardWrapper>
        ))}
      </ProductGrid>
    </Container>
  );
};

export default ProductList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  margin: 20px 0;
  font-size: 2em;
  font-weight: bold;
  color: #333;
`;

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
