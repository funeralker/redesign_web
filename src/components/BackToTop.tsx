// src/components/BackToTop.tsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY  > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <Button onClick={scrollToTop} style={{ display: visible ? 'block' : 'none' }}>
      ↑
    </Button>
  );
};

export default BackToTop;

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #6ecf68;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: opacity 0.3s;

  &:hover {
    background-color: #4caf50;
  }
`;
