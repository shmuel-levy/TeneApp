import React from 'react';
import { Button } from '../../globalStyles';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './Footer.elements';

function Footer() {

  const date = new Date();

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          הצטרף לקהילת תנה - חקלאים וצרכנים מקומיים
        </FooterSubHeading>
        <FooterSubText>קבל עדכונים על מוצרים טריים חדשים וחקלאים חדשים באזור שלך.</FooterSubText>
        <Form>
          <FormInput name='email' type='email' placeholder='האימייל שלך' />
          <Button fontBig>הירשם</Button>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>אודות תנה</FooterLinkTitle>
            <FooterLink to='/sign-up'>איך זה עובד</FooterLink>
            <FooterLink to='/'>סיפורי הצלחה</FooterLink>
            <FooterLink to='/'>הצטרף לצוות</FooterLink>
            <FooterLink to='/'>השקעות</FooterLink>
            <FooterLink to='/'>תנאי שימוש</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>תמיכה</FooterLinkTitle>
            <FooterLink to='/'>צור קשר</FooterLink>
            <FooterLink to='/'>עזרה לחקלאים</FooterLink>
            <FooterLink to='/'>עזרה לצרכנים</FooterLink>
            <FooterLink to='/'>שאלות נפוצות</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>משאבים</FooterLinkTitle>
            <FooterLink to='/'>מדריכים לחקלאים</FooterLink>
            <FooterLink to='/'>בלוג</FooterLink>
            <FooterLink to='/'>מקרי בוחן</FooterLink>
            <FooterLink to='/'>הורדות</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>עקבו אחרינו</FooterLinkTitle>
            <FooterLink to='/'>אינסטגרם</FooterLink>
            <FooterLink to='/'>פייסבוק</FooterLink>
            <FooterLink to='/'>יוטיוב</FooterLink>
            <FooterLink to='/'>טוויטר</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            תנה
          </SocialLogo>
          <WebsiteRights>תנה © {date.getFullYear()} - פלטפורמת מרקטפלייס דיגיטלית לחקלאים</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
              <FaInstagram />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='YouTube' >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
              <FaLinkedin />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;