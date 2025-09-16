import React, { useState } from 'react'
import {InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img} from './InfoSection.elements'
import { Container, Button } from '../../globalStyles'
import { SignUpForm } from '../index'

 const InfoSection = ({ 
    
    primary,
    lightBg,
    topLine,
    lightTopLine,
    lightText,
    lightTextDesc,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    start
}) => {
    const [isSignUpOpen, setIsSignUpOpen] = useState(false);

    const handleSignUpClick = () => {
        if (buttonLabel === 'התחל עכשיו' || buttonLabel === 'התחל לקנות') {
            setIsSignUpOpen(true);
        }
    };

    const handleSignUpSubmit = async (formData) => {
        console.log('Form submitted:', formData);
        
        try {
            // Option 1: Send to your email (using EmailJS or similar)
            // await sendToEmail(formData);
            
            // Option 2: Send to Google Sheets (using Google Apps Script)
            // await sendToGoogleSheets(formData);
            
            // Option 3: Send to a backend API
            // await sendToBackend(formData);
            
            // Option 4: Store in localStorage (for testing)
            const submissions = JSON.parse(localStorage.getItem('teneSubmissions') || '[]');
            submissions.push({
                ...formData,
                timestamp: new Date().toISOString(),
                id: Date.now()
            });
            localStorage.setItem('teneSubmissions', JSON.stringify(submissions));
            
            alert('תודה! בקשה נשלחה בהצלחה. נחזור אליך בקרוב.');
            
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('אירעה שגיאה בשליחת הטופס. אנא נסה שוב או צור קשר ישירות.');
        }
    };

    const handleSignUpClose = () => {
        setIsSignUpOpen(false);
    };

    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Button 
                                big 
                                fontBig 
                                primary={primary}
                                onClick={handleSignUpClick}
                            >
                                {buttonLabel}
                            </Button>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
            
            <SignUpForm 
                isOpen={isSignUpOpen}
                onClose={handleSignUpClose}
                onSubmit={handleSignUpSubmit}
            />
        </>
    )
}

export default InfoSection;