import React from 'react';
import styled from 'styled-components';
import { FaHome, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Divider />
      <FooterContent>
        <FooterSection>
          <HomeIcon>
            <FaHome size={32} />
          </HomeIcon>
          <SocialIcons>
            <FaInstagram size={20} />
            <FaFacebook size={20} />
            <FaYoutube size={20} />
          </SocialIcons>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Customer Service</SectionTitle>
          <FooterNav>
            <NavLink>Shipping Policy</NavLink>
            <NavLink>Terms and Conditions</NavLink>
          </FooterNav>
        </FooterSection>
        <FooterSection>
          <SectionTitle>Contact Us</SectionTitle>
          <ContactInfo>
            <ContactItem>
              Tel: <span>+47-22149166</span>
            </ContactItem>
            <ContactItem>
              Mobile: <span>+47-92060873</span>
            </ContactItem>
            <ContactItem>
              Fax: <span>+47-22148237</span>
            </ContactItem>
            <ContactItem>
              Skype: <span>frithjof.arngren</span>
            </ContactItem>
            <ContactItem>
              Email: <span>frithjof@arngren.net</span>
            </ContactItem>
          </ContactInfo>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: white;
  color: black;
  margin-top: auto;
  padding-top: 20px;
`;

const Divider = styled.div`
  height: 1px;
  background-color: #e0e0e0;
  margin-bottom: 10px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 30px;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
  margin-bottom: 40px;
  width: 30%;
`;

const HomeIcon = styled.div`
  margin-top: 20px;
  margin-bottom: 15px; 
  cursor: pointer;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
`;

const SectionTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 1.2em;
  font-weight: bold;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
`;

const NavLink = styled.a`
  color: black;
  text-decoration: none;
  margin-bottom: 5px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactItem = styled.p`
  margin: 5px 0;
  font-size: 1em;

  span {
    color: #555;
  }
`;
