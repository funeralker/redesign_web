import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const clearSearch = () => {
    setSearchText('');
  };

  const handleNavClick = (type: string) => {
    navigate('/result', { state: { type, title: type } });
  };

  const handleSearch = () => {
    if (searchText.trim()) {
      navigate('/result', { state: { searchText, title: 'Search Result' } });
    }
  };

  return (
    <NavBar>
      <LeftSection>
        <HomeIcon>
          <FaHome size={48} />
        </HomeIcon>
      </LeftSection>
      <RightSection>
        <NavOptions>
          <NavOption onClick={() => handleNavClick('Electric Cars')}>Electric Cars</NavOption>
          <NavOption onClick={() => handleNavClick('Electric Bicycles')}>Electric Bicycles</NavOption>
          <NavOption onClick={() => handleNavClick('Robots')}>Robots</NavOption>
          <NavOption onClick={() => handleNavClick('Helicopters')}>Helicopters</NavOption>
          <NavOption onClick={() => handleNavClick('Watches')}>Watches</NavOption>
          <NavOption onClick={() => handleNavClick('Other')}>Other</NavOption>
        </NavOptions>
        <SearchSection>
          <SearchBarWrapper>
            <SearchBar
              type="text"
              placeholder="Find something"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            {searchText && <ClearButton onClick={clearSearch}><FaTimes /></ClearButton>}
          </SearchBarWrapper>
          <SearchButton onClick={handleSearch}>
            <FaSearch size={20} color="#333" />
          </SearchButton>
        </SearchSection>
        <MenuButton onClick={toggleMenu}>
          <FaBars size={24} />
        </MenuButton>
      </RightSection>
      {menuOpen && (
        <MobileMenu>
          <MobileNavOption onClick={() => handleNavClick('Electric Cars')}>Electric Cars</MobileNavOption>
          <MobileNavOption onClick={() => handleNavClick('Electric Bicycles')}>Electric Bicycles</MobileNavOption>
          <MobileNavOption onClick={() => handleNavClick('Robots')}>Robots</MobileNavOption>
          <MobileNavOption onClick={() => handleNavClick('Helicopters')}>Helicopters</MobileNavOption>
          <MobileNavOption onClick={() => handleNavClick('Watches')}>Watches</MobileNavOption>
          <MobileNavOption onClick={() => handleNavClick('Other')}>Other</MobileNavOption>
        </MobileMenu>
      )}
    </NavBar>
  );
};

export default Header;

// Styled components as defined previously


const NavBar = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #ffffff;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 15vh;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  padding-left: 40px;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  padding-right: 40px;
`;

const HomeIcon = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;

const NavOptions = styled.nav`
  display: flex;
  gap: 15px;
  margin-left: 20px;
  margin-right: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavOption = styled.div`
  cursor: pointer;
  font-size: 22px;
  color: #333;

  &:hover {
    color: #007bff;
  }
`;

const SearchSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchBarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchBar = styled.input`
  padding: 8px 12px;
  border-radius: 20px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 16px;
  width: 200px;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const ClearButton = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 15vh;
  right: 0;
  background-color: white;
  width: 200px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;

  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileNavOption = styled.div`
  padding: 10px 20px;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;

  &:hover {
    background-color: #f4f4f4;
  }

  &:last-child {
    border-bottom: none;
  }
`;
