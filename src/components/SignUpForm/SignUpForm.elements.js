import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  direction: rtl;
`;

export const ModalContainer = styled.div`
  background: white;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 20px 30px;
  border-bottom: 2px solid #e8f5e8;
`;

export const ModalTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #2d5016;
  margin: 0;
  text-align: center;
  flex: 1;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 2.5rem;
  color: #6b8e5a;
  cursor: pointer;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f0f8e8;
    color: #2d5016;
  }
`;

export const Form = styled.form`
  padding: 30px;
  direction: rtl;
`;

export const FormGroup = styled.div`
  margin-bottom: 25px;
`;

export const Label = styled.label`
  display: block;
  font-size: 1.1rem;
  font-weight: 600;
  color: #2d5016;
  margin-bottom: 8px;
  text-align: right;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px 20px;
  border: 2px solid ${({ error }) => (error ? '#e74c3c' : '#e8f5e8')};
  border-radius: 10px;
  font-size: 1rem;
  color: #2d5016;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
  text-align: right;

  &:focus {
    outline: none;
    border-color: #6b8e5a;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(107, 142, 90, 0.1);
  }

  &::placeholder {
    color: #a8d5a8;
    text-align: right;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 15px 20px;
  border: 2px solid #e8f5e8;
  border-radius: 10px;
  font-size: 1rem;
  color: #2d5016;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
  text-align: right;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #6b8e5a;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(107, 142, 90, 0.1);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 15px 20px;
  border: 2px solid #e8f5e8;
  border-radius: 10px;
  font-size: 1rem;
  color: #2d5016;
  background-color: #f9f9f9;
  transition: all 0.3s ease;
  text-align: right;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #6b8e5a;
    background-color: white;
    box-shadow: 0 0 0 3px rgba(107, 142, 90, 0.1);
  }

  &::placeholder {
    color: #a8d5a8;
    text-align: right;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: 30px;
`;

export const SubmitButton = styled.button`
  background: linear-gradient(135deg, #6b8e5a 0%, #4a6741 100%);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  max-width: 150px;

  &:hover {
    background: linear-gradient(135deg, #4a6741 0%, #2d5016 100%);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(45, 80, 22, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CancelButton = styled.button`
  background: #f8f9fa;
  color: #6b8e5a;
  border: 2px solid #e8f5e8;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  max-width: 150px;

  &:hover {
    background: #e8f5e8;
    border-color: #6b8e5a;
    color: #2d5016;
  }
`;

export const ErrorMessage = styled.span`
  color: #e74c3c;
  font-size: 0.9rem;
  font-weight: 500;
  display: block;
  margin-top: 5px;
  text-align: right;
`;

// Responsive design
export const ModalContainerResponsive = styled(ModalContainer)`
  @media (max-width: 768px) {
    margin: 10px;
    max-width: calc(100% - 20px);
  }
`;

export const FormResponsive = styled(Form)`
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const ButtonContainerResponsive = styled(ButtonContainer)`
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;
