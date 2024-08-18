import React from 'react';
import styled from 'styled-components';

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <h1>Welcome to Our Shop</h1>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  padding: 60px 20px;
  background-color: #f4f4f4;
  text-align: center;
  color: #333;
`;
