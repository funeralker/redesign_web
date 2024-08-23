import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';

const OrderDetailPage: React.FC = () => {
  const location = useLocation();
  const { photo, name, price } = location.state;

  const [fullName, setFullName] = useState('');
  const [locationSelect, setLocationSelect] = useState('');
  const [deliveryNote, setDeliveryNote] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [resetPopupVisible, setResetPopupVisible] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!fullName.match(/^[A-Za-z ]{1,20}$/)) {
      newErrors.fullName = 'Full Name should only contain letters and be less than 20 characters.';
    }
    if (!locationSelect) {
      newErrors.locationSelect = 'Please select a location.';
    }
    if (!termsAccepted) {
      newErrors.termsAccepted = 'You must accept the terms.';
    }
    return newErrors;
  };

  const handleCheckout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      console.log('Checkout successful');
    }
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setResetPopupVisible(true);
  };

  const confirmReset = (confirm: boolean) => {
    if (confirm) {
      setFullName('');
      setLocationSelect('');
      setDeliveryNote('');
      setTermsAccepted(false);
      setErrors({});
    }
    setResetPopupVisible(false);
  };

  return (
    <Container>
      <Header />
      <Content>
        <LeftSection>
          <ProductImage src={photo} alt={name} />
          <ProductName>{name}</ProductName>
          <ProductPrice>${price.toFixed(2)}</ProductPrice>
        </LeftSection>
        <RightSection>
          <Form>
            <FormTitle>Shipping Information</FormTitle>
            <FormDescription>We ship within 2 working days</FormDescription>

            <Label>Full Name</Label>
            <TextInput
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your full name"
            />
            {errors.fullName && <ErrorText>{errors.fullName}</ErrorText>}

            <Label>Location</Label>
            <SelectInput
              value={locationSelect}
              onChange={(e) => setLocationSelect(e.target.value)}
            >
              <option value="">Please select location</option>
              <option value="Kowloon">Kowloon</option>
              <option value="Hong Kong">Hong Kong</option>
              <option value="New Territories">New Territories</option>
            </SelectInput>
            {errors.locationSelect && <ErrorText>{errors.locationSelect}</ErrorText>}

            <Label>Delivery Note</Label>
            <TextArea
              value={deliveryNote}
              onChange={(e) => setDeliveryNote(e.target.value)}
              placeholder="Enter delivery notes (optional)"
            />

            <UploadSection>
              <Label>Transfer Record Upload</Label>
              <UploadIcon>📤</UploadIcon>
            </UploadSection>

            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <CheckboxLabel>I accept the terms</CheckboxLabel>
            </CheckboxContainer>
            {errors.termsAccepted && <ErrorText>{errors.termsAccepted}</ErrorText>}

            <TermsLink href="#">Terms and Conditions</TermsLink>

            <ButtonContainer>
              <ResetButton onClick={handleReset}>Reset</ResetButton>
              <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
            </ButtonContainer>
          </Form>
        </RightSection>
      </Content>
      <Footer />

      {resetPopupVisible && (
        <PopupOverlay>
          <PopupContent>
            <p>Do you really want to reset?</p>
            <PopupButtonContainer>
              <PopupButton onClick={() => confirmReset(true)}>Yes</PopupButton>
              <PopupButton onClick={() => confirmReset(false)}>No</PopupButton>
            </PopupButtonContainer>
          </PopupContent>
        </PopupOverlay>
      )}
    </Container>
  );
};

export default OrderDetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  display: flex;
  flex: 1;
  padding: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const ProductName = styled.h1`
  font-size: 1.5em;
  text-align: left;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 1.5em;
  color: #333;
  font-weight: bold;
  align-self: flex-end;
  margin-top: -10px; 
`;

const RightSection = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h2`
  font-size: 1.5em;
  text-align: left;
  margin-bottom: 10px;
`;

const FormDescription = styled.p`
  font-size: 0.9em;
  color: #888;
  text-align: left;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1em;
  margin-bottom: 5px;
`;

const TextInput = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 1em;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 1em;
  resize: vertical;
`;

const SelectInput = styled.select`
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  font-size: 1em;
`;

const UploadSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const UploadIcon = styled.span`
  font-size: 1.5em;
  cursor: pointer;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

const CheckboxLabel = styled.label`
  font-size: 1em;
`;

const ErrorText = styled.span`
  color: red;
  font-size: 0.9em;
  margin-bottom: 10px;
`;

const TermsLink = styled.a`
  font-size: 0.9em;
  color: #007bff;
  text-align: left;
  margin-bottom: 20px;
  align-self: flex-start;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ResetButton = styled.button`
  width: 40%;
  padding: 10px;
  background-color: #ff4d4d;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  border: none;

  &:hover {
    background-color: #cc0000;
  }
`;

const CheckoutButton = styled.button`
  width: 40%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
  border: none;

  &:hover {
    background-color: #388e3c;
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

const PopupButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

const PopupButton = styled.button`
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;
