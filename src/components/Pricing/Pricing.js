import React from 'react';
import { Button } from '../../globalStyles';
import { FaSeedling, FaTractor, FaMountain } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';

 const Pricing = () => {
  return (
    <IconContext.Provider value={{ color: '#2d5016', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>תוכניות המחירים שלנו</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaSeedling />
                </PricingCardIcon>
                <PricingCardPlan>חקלאי מתחיל</PricingCardPlan>
                <PricingCardCost>₪0</PricingCardCost>
                <PricingCardLength>לחודש</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>עמוד חקלאי אישי</PricingCardFeature>
                  <PricingCardFeature>עד 20 מוצרים</PricingCardFeature>
                  <PricingCardFeature>3% עמלה על מכירות</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>התחל בחינם</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaTractor />
                </PricingCardIcon>
                <PricingCardPlan>חקלאי מקצועי</PricingCardPlan>
                <PricingCardCost>₪29</PricingCardCost>
                <PricingCardLength>לחודש</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>מוצרים בלתי מוגבלים</PricingCardFeature>
                  <PricingCardFeature>ניתוח מכירות מתקדם</PricingCardFeature>
                  <PricingCardFeature>2% עמלה על מכירות</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>בחר תוכנית</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <FaMountain />
                </PricingCardIcon>
                <PricingCardPlan>חקלאי פרימיום</PricingCardPlan>
                <PricingCardCost>₪59</PricingCardCost>
                <PricingCardLength>לחודש</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>כל התכונות + עדיפות</PricingCardFeature>
                  <PricingCardFeature>1% עמלה על מכירות</PricingCardFeature>
                  <PricingCardFeature>תמיכה 24/7</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>בחר תוכנית</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing