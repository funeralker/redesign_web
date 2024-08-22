import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import productData from '../data/recommend.json'; 

const ProductDetailPage: React.FC = () => {
  const location = useLocation();
  const { product } = location.state;

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
          <ProductTag>Type Tag</ProductTag>
          <ProductDescription>{product.longDescription}</ProductDescription>
          <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
          <BuyButton>Buy Now</BuyButton>
        </InfoSection>
      </Content>
      <ProductList title="Recommend You" data={productData}/>
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
  padding: 20px;
  gap: 20px;
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Thumbnail = styled.img`
  width: 30%;
  height: auto;
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
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
`;

const ProductTag = styled.span`
  align-self: flex-start;
  background-color: #e0f7fa;
  color: #007bff;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.9em;
  margin-bottom: 20px;
`;

const ProductDescription = styled.p`
  flex-grow: 1;
  text-align: left;
  margin-bottom: 20px;
`;

const ProductPrice = styled.p`
  font-size: 2em;
  color: #333;
  font-weight: bold;
  text-align: right;
  margin-bottom: 20px;
`;

const BuyButton = styled.button`
  align-self: flex;
  background-color: #90ee90;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2em;
  margin-bottom: 20px;

  &:hover {
    background-color: #77dd77;
  }
`;
