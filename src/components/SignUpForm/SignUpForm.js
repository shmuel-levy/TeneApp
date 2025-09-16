import React, { useState } from 'react';
import {
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  CloseButton,
  Form,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  SubmitButton,
  CancelButton,
  ButtonContainer,
  ErrorMessage
} from './SignUpForm.elements';

const SignUpForm = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    userType: 'farmer', // farmer or consumer
    farmName: '',
    location: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'שם הוא שדה חובה';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'אימייל הוא שדה חובה';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'אימייל לא תקין';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'טלפון הוא שדה חובה';
    } else if (!/^[0-9\-+()\s]+$/.test(formData.phone)) {
      newErrors.phone = 'מספר טלפון לא תקין';
    }

    if (formData.userType === 'farmer' && !formData.farmName.trim()) {
      newErrors.farmName = 'שם החווה הוא שדה חובה לחקלאים';
    }

    if (!formData.location.trim()) {
      newErrors.location = 'מיקום הוא שדה חובה';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        userType: 'farmer',
        farmName: '',
        location: '',
        message: ''
      });
      onClose();
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>הצטרף לתנה</ModalTitle>
          <CloseButton onClick={onClose}>×</CloseButton>
        </ModalHeader>
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">שם מלא *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="הכנס את שמך המלא"
              error={errors.name}
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">אימייל *</Label>
            <Input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              error={errors.email}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="phone">טלפון *</Label>
            <Input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="050-1234567"
              error={errors.phone}
            />
            {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="userType">אני *</Label>
            <Select
              id="userType"
              name="userType"
              value={formData.userType}
              onChange={handleChange}
            >
              <option value="farmer">חקלאי</option>
              <option value="consumer">צרכן</option>
            </Select>
          </FormGroup>

          {formData.userType === 'farmer' && (
            <FormGroup>
              <Label htmlFor="farmName">שם החווה *</Label>
              <Input
                type="text"
                id="farmName"
                name="farmName"
                value={formData.farmName}
                onChange={handleChange}
                placeholder="שם החווה או העסק"
                error={errors.farmName}
              />
              {errors.farmName && <ErrorMessage>{errors.farmName}</ErrorMessage>}
            </FormGroup>
          )}

          <FormGroup>
            <Label htmlFor="location">מיקום *</Label>
            <Input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="עיר, אזור"
              error={errors.location}
            />
            {errors.location && <ErrorMessage>{errors.location}</ErrorMessage>}
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">הודעה נוספת</Label>
            <TextArea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="ספר לנו על עצמך או על הצרכים שלך..."
              rows="4"
            />
          </FormGroup>

          <ButtonContainer>
            <CancelButton type="button" onClick={onClose}>
              ביטול
            </CancelButton>
            <SubmitButton type="submit">
              שלח בקשה
            </SubmitButton>
          </ButtonContainer>
        </Form>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default SignUpForm;
