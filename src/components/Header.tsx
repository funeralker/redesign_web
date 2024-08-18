import React from 'react';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <NavBar>
      <Icon>
        <FaShoppingCart size={24} />
      </Icon>
      <NavOptions>
        <NavOption>Home</NavOption>
        <NavOption>Products</NavOption>
        <NavOption>About Us</NavOption>
        <NavOption>Contact</NavOption>
      </NavOptions>
      <SearchBar type="text" placeholder="Search..." />
    </NavBar>
  );
};

export default Header;

const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
`;

const Icon = styled.div`
  flex-shrink: 0;
`;

const NavOptions = styled.nav`
  display: flex;
  gap: 15px;

  @media (max-width: 768px) {
    display: none; 
  }
`;

const NavOption = styled.div`
  cursor: pointer;
`;

const SearchBar = styled.input`
  padding: 5px 10px;
  border-radius: 4px;
  border: none;
  outline: none;
`;
