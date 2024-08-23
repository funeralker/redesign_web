import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Footer from '../components/Footer';
import productData from '../data/products.json'; 

const CategorySearchPage: React.FC = () => {
  const location = useLocation();
  const { type, searchText, title } = location.state || {};

  let filteredProducts = productData;

  if (type) {
    filteredProducts = productData.filter((product) => product.type === type);
  } else if (searchText) {
    filteredProducts = productData.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  const pageTitle = filteredProducts.length > 0 ? title : 'No Result';

  return (
    <Container>
      <Header />
      <ProductList title={pageTitle} data={filteredProducts} /> 
      <Footer />
    </Container>
  );
};

export default CategorySearchPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
