import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const AdminContainer = styled(Container)`
  padding: 40px 20px;
  direction: rtl;
  text-align: right;
  min-height: 100vh;
  background: linear-gradient(135deg, #f0f8e8 0%, #e8f5e8 50%, #d4edda 100%);
`;

export const AdminHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
`;

export const AdminTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d5016;
  margin: 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

export const ExportButton = styled.button`
  background: linear-gradient(135deg, #6b8e5a 0%, #4a6741 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(135deg, #4a6741 0%, #2d5016 100%);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(45, 80, 22, 0.3);
  }
`;

export const ClearButton = styled.button`
  background: #e74c3c;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #c0392b;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(231, 76, 60, 0.3);
  }
`;

export const SubmissionsList = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export const SubmissionCard = styled.div`
  background: white;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  border: 2px solid #e8f5e8;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: #6b8e5a;
  }
`;

export const SubmissionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 2px solid #e8f5e8;

  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #2d5016;
    margin: 0;
  }
`;

export const Timestamp = styled.span`
  font-size: 0.9rem;
  color: #6b8e5a;
  font-weight: 500;
`;

export const SubmissionInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SubmissionDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Label = styled.span`
  font-weight: 600;
  color: #2d5016;
  font-size: 0.95rem;
`;

export const Value = styled.span`
  color: #4a6741;
  font-size: 1rem;
  word-break: break-word;
`;

export const NoSubmissions = styled.div`
  text-align: center;
  padding: 60px 20px;
  font-size: 1.2rem;
  color: #6b8e5a;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

// Responsive design
export const AdminHeaderResponsive = styled(AdminHeader)`
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const SubmissionsListResponsive = styled(SubmissionsList)`
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
