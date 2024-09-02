import React from 'react';
import styled from 'styled-components';

const Banner: React.FC = () => {
  return (
    <BannerContainer>
      <BannerImage src="/img/banner.png" alt="Banner" />
    </BannerContainer>
  );
};

export default Banner;

const BannerContainer = styled.div`
  background-color: transparent;
  width: 100%;
  height: 40vh;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 35vh; 
  }

  @media (max-width: 480px) {
    height: 30vh; 
  }
`;

const BannerImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: cover;

  @media (max-width: 768px) {
    width: auto;
    height: 100%; 
  }

  @media (max-width: 480px) {
    width: auto;
    height: 100%; 
  }
`;
