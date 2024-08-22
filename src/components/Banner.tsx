import React from 'react';
import styled from 'styled-components';

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerText>Welcome to Our Store</BannerText>
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  width: 100%;
  height: 35vh;
  background-color: #D3D3D3;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BannerText = styled.h1`
  font-size: 36px;
`;
