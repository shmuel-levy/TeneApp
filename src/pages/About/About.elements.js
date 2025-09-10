import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const AboutSection = styled.div`
  padding: 160px 0;
  background: linear-gradient(135deg, #f0f8e8 0%, #e8f5e8 50%, #d4edda 100%);
  min-height: 100vh;
`;

export const AboutContainer = styled(Container)`
  direction: rtl;
  text-align: right;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const AboutHeading = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  color: #2d5016;
  text-align: center;
  margin-bottom: 60px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
  
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const AboutCard = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border: 2px solid #a8d5a8;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
  
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  
  @media screen and (max-width: 768px) {
    flex-direction: column !important;
    gap: 30px;
    padding: 30px;
  }
`;

export const AboutCardInfo = styled.div`
  flex: 1;
  direction: rtl;
  text-align: right;
`;

export const AboutCardIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  color: #2d5016;
`;

export const AboutCardTitle = styled.h2`
  font-size: 2.2rem;
  font-weight: 600;
  color: #2d5016;
  margin-bottom: 20px;
  text-align: center;
  
  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const AboutCardText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a6741;
  margin-bottom: 15px;
  text-align: right;
  
  strong {
    color: #2d5016;
    font-weight: 600;
  }
  
  &:last-child {
    font-style: italic;
    color: #6b8e5a;
    border-right: 3px solid #a8d5a8;
    padding-right: 15px;
    margin-top: 20px;
  }
`;

export const AboutImageWrapper = styled.div`
  flex: 0 0 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 768px) {
    flex: none;
    width: 100%;
  }
`;

export const AboutImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid #a8d5a8;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;
