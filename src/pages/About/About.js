import React from 'react';
import { AboutSection, AboutContainer, AboutWrapper, AboutHeading, AboutCard, AboutCardInfo, AboutCardIcon, AboutCardTitle, AboutCardText, AboutImage, AboutImageWrapper } from './About.elements';
import { FaSeedling, FaMountain, FaTractor, FaLeaf } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';

const About = () => {
  return (
    <IconContext.Provider value={{ color: '#2d5016', size: 64 }}>
      <AboutSection>
        <AboutContainer>
          <AboutWrapper>
            <AboutHeading>הכירו את הצוות שלנו</AboutHeading>
            
            <AboutCard>
              <AboutCardInfo>
                <AboutCardIcon>
                  <FaSeedling />
                </AboutCardIcon>
                <AboutCardTitle>שמואל - מייסד ומנכ"ל</AboutCardTitle>
                <AboutCardText>
                  שמואל הוא חקלאי מנוסה עם יותר מ-15 שנות ניסיון בגידול ירקות אורגניים. 
                  הוא גדל בחוות משפחתית קטנה בצפון הארץ, שם למד על האתגרים של חקלאים קטנים 
                  במכירה ישירה לצרכנים. החזון שלו הוא לחבר בין השדה לצרכן, 
                  להחזיר את הכוח לידי החקלאים המקומיים ולבנות קהילה שמבוססת על שקיפות ואיכות.
                </AboutCardText>
                <AboutCardText>
                  "אני מאמין שכל צרכן צריך לדעת מי גידל את האוכל שלו, ואיך הוא גדל. 
                  תנה נותנת לנו את הכלים לעשות את זה בצורה הכי פשוטה וישירה."
                </AboutCardText>
              </AboutCardInfo>
              <AboutImageWrapper>
                <AboutImage src={require('../../images/profile.jpg')} alt="שמואל" />
              </AboutImageWrapper>
            </AboutCard>

            <AboutCard>
              <AboutImageWrapper>
                <AboutImage src={require('../../images/profile.jpg')} alt="אלעד" />
              </AboutImageWrapper>
              <AboutCardInfo>
                <AboutCardIcon>
                  <FaTractor />
                </AboutCardIcon>
                <AboutCardTitle>אלעד - מייסד ומנהל טכנולוגיות</AboutCardTitle>
                <AboutCardText>
                  אלעד הוא מהנדס תוכנה עם תשוקה לחקלאות וטכנולוגיה. 
                  הוא עבד בחברות הייטק מובילות לפני שהחליט להקדיש את הקריירה שלו 
                  לפיתוח פתרונות טכנולוגיים לחקלאים. הוא האחראי על הפיתוח הטכני של הפלטפורמה 
                  ועל כך שהיא תהיה פשוטה ונגישה גם לחקלאים ללא רקע טכנולוגי.
                </AboutCardText>
                <AboutCardText>
                  "הטכנולוגיה צריכה לשרת את החקלאים, לא להקשות עליהם. 
                  הפלטפורמה שלנו מאפשרת לחקלאים להתמקד במה שהם הכי טובים בו - גידול אוכל איכותי."
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
