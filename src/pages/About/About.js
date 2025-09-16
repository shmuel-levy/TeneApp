import React from 'react';
import { AboutSection, AboutContainer, AboutWrapper, AboutHeading, AboutCard, AboutCardInfo, AboutCardIcon, AboutCardTitle, AboutCardText, AboutImage, AboutImageWrapper } from './About.elements';
import { FaCode, FaMountain, FaCamera, FaLeaf } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const About = () => {
  return (
    <IconContext.Provider value={{ color: '#2d5016', size: 64 }}>
      <AboutSection>
        <AboutContainer>
          <AboutWrapper>
            <AboutHeading>הכירו את המייסדים שלנו</AboutHeading>
            
            <AboutCard>
              <AboutCardInfo>
                <AboutCardIcon>
                  <FaCode />
                </AboutCardIcon>
                <AboutCardTitle>שמואל - מייסד ומנכ"ל משותף</AboutCardTitle>
                <AboutCardText>
                  שמואל הוא מומחה בבניית אתרים ופיתוח תוכנה עם תשוקה לחקלאות וטכנולוגיה. 
                  הוא מתמחה בפיתוח פתרונות דיגיטליים מתקדמים לחקלאים, כולל מערכות ניהול, 
                  פלטפורמות מסחר אלקטרוני וכלים טכנולוגיים שמחברים בין השדה לצרכן. 
                  החזון שלו הוא להביא את הטכנולוגיה המתקדמת ביותר לחקלאים המקומיים.
                </AboutCardText>
                <AboutCardText>
                  "אני מאמין שטכנולוגיה מתקדמת צריכה להיות נגישה לכל חקלאי. 
                  תנה נותנת לנו את הכלים הטכנולוגיים הכי מתקדמים לניהול ומכירה יעילה."
                </AboutCardText>
              </AboutCardInfo>
              <AboutImageWrapper>
                <AboutImage src={require('../../images/shmuel white.jpg')} alt="שמואל" />
              </AboutImageWrapper>
            </AboutCard>

            <AboutCard>
              <AboutImageWrapper>
                <AboutImage src={require('../../images/profile.jpg')} alt="אלעד" />
              </AboutImageWrapper>
              <AboutCardInfo>
                <AboutCardIcon>
                  <FaCamera />
                </AboutCardIcon>
                <AboutCardTitle>אלעד - מייסד ומנכ"ל משותף</AboutCardTitle>
                <AboutCardText>
                  אלעד הוא מומחה בשיווק ופרסום עם רחפן, עם ניסיון רב בתחום השיווק הדיגיטלי והצילום האווירי. 
                  הוא מתמחה ביצירת תוכן ויזואלי מרהיב לחקלאים, כולל צילומי רחפן של השדות, 
                  סרטוני שיווק וקמפיינים דיגיטליים שמבליטים את האיכות והטריות של התוצרת החקלאית. 
                  החזון שלו הוא להביא את הסיפור של החקלאים לצרכנים בצורה הכי מרשימה ויעילה.
                </AboutCardText>
                <AboutCardText>
                  "אני מאמין שכל חקלאי צריך לספר את הסיפור שלו. 
                  תנה נותנת לנו את הכלים הויזואליים והשיווקיים הכי מתקדמים להציג את התוצרת שלנו."
                </AboutCardText>
              </AboutCardInfo>
            </AboutCard>

            <AboutCard>
              <AboutCardInfo>
                <AboutCardIcon>
                  <FaMountain />
                </AboutCardIcon>
                <AboutCardTitle>החזון שלנו</AboutCardTitle>
                <AboutCardText>
                  תנה נולדה מהאמונה שחקלאים קטנים ובינוניים הם עמוד השדרה של החקלאות המקומית. 
                  אנחנו רוצים להחזיר את הכוח לידי החקלאים, לחבר בין הצרכן לשדה, 
                  ולבנות רשת שמבוססת על שקיפות, הוגנות וטריות.
                </AboutCardText>
                <AboutCardText>
                  הפלטפורמה שלנו מאפשרת לחקלאים למכור ישירות לצרכנים, בלי תיווך, 
                  במחיר הוגן, ולצרכנים לקבל אוכל טרי, מקומי ואיכותי ישירות מהשדה.
                </AboutCardText>
              </AboutCardInfo>
              <AboutImageWrapper>
                <AboutImage src={require('../../images/svg-1.svg')} alt="חזון תנה" />
              </AboutImageWrapper>
            </AboutCard>

            <AboutCard>
              <AboutImageWrapper>
                <AboutImage src={require('../../images/svg-2.svg')} alt="הערכים שלנו" />
              </AboutImageWrapper>
              <AboutCardInfo>
                <AboutCardIcon>
                  <FaLeaf />
                </AboutCardIcon>
                <AboutCardTitle>הערכים שלנו</AboutCardTitle>
                <AboutCardText>
                  <strong>שקיפות מלאה:</strong> כל צרכן יודע מי גידל את האוכל שלו ואיך הוא גדל.
                </AboutCardText>
                <AboutCardText>
                  <strong>הוגנות:</strong> מחירים הוגנים לחקלאים ולצרכנים כאחד.
                </AboutCardText>
                <AboutCardText>
                  <strong>טריות:</strong> אוכל טרי ישירות מהשדה, ללא אחסון ממושך.
                </AboutCardText>
                <AboutCardText>
                  <strong>קהילתיות:</strong> תמיכה בחקלאים מקומיים ובכלכלה המקומית.
                </AboutCardText>
              </AboutCardInfo>
            </AboutCard>
          </AboutWrapper>
        </AboutContainer>
      </AboutSection>
    </IconContext.Provider>
  );
};

export default About;
