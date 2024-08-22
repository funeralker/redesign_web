import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import productData from '../data/products.json'; 

const HomePage: React.FC = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <ProductList title="Hot Products" data={productData} /> 
      <Footer />
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;