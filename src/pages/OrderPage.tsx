import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderDetailPage: React.FC = () => {

  return (
    <Container>
      <Header />
      <Footer />
    </Container>
  );
};

export default OrderDetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
