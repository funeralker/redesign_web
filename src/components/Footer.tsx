import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Your Shop. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  padding: 20px;
  background-color: white;
  color: black;
  text-align: center;
  margin-top: auto;
`;
