import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import productData from '../data/recommend.json';

const ProductDetailPage: React.FC = () => {
  const location = useLocation();
  const { product } = location.state;
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate('/order', {
      state: {
        photo: product.photo,
        name: product.name,
        price: product.price,
      },
    });
  };

  return (
    <Container>
      <Header />
      <Content>
        <ImageSection>
          <MainImage src={product.photo} alt={product.name} />
          <ThumbnailWrapper>
            <Thumbnail src={product.thumbnailPhoto1} alt="Thumbnail 1" />
            <Thumbnail src={product.thumbnailPhoto2} alt="Thumbnail 2" />
            <Thumbnail src={product.thumbnailPhoto3} alt="Thumbnail 3" />
          </ThumbnailWrapper>
        </ImageSection>
        <InfoSection>
          <ProductName>{product.name}</ProductName>
          <ProductTag>{product.type}</ProductTag>
          <ProductDescription>{product.longDescription}</ProductDescription>
          <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
          <BuyButton onClick={handleBuyNow}>Buy Now</BuyButton>
        </InfoSection>
      </Content>
      <ProductList title="Recommend You" data={productData} />
      <Footer />
    </Container>
  );
};

export default ProductDetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MainImage = styled.img`
  width: 100%;
  max-width: 400px; 
  height: auto;
  max-height: 400px; 
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
  align-self: center;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Thumbnail = styled.img`
  width: 30%;
  max-width: 300px; 
  height: auto;
  max-height: 300px; 
  object-fit: cover;
  border-radius: 8px;
`;

const InfoSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductName = styled.h1`
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

const ProductTag = styled.span`
  align-self: flex-start;
  background-color: #e0f7fa;
  color: #007bff;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8em;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 0.9em;
  }
`;

const ProductDescription = styled.p`
  white-space: pre-line;
  flex-grow: 1;
  text-align: left;
  margin-bottom: 20px;
  font-size: 0.9em;

  @media (min-width: 768px) {
    font-size: 1em;
  }
`;

const ProductPrice = styled.p`
  font-size: 1.5em;
  color: #333;
  font-weight: bold;
  text-align: right;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 2em;
  }
`;

const BuyButton = styled.button`
  align-self: flex;
  background-color: #90ee90;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1em;
  margin-bottom: 20px;

  &:hover {
    background-color: #77dd77;
  }

  @media (min-width: 768px) {
    padding: 15px 30px;
    font-size: 1.2em;
  }
`;

