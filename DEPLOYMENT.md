# 🚀 מדריך פריסה - תנה (Tene Marketplace)

מדריך מפורט לפריסת אתר תנה לפלטפורמות שונות.

## 📋 דרישות מקדימות

- Node.js (גרסה 14 ומעלה)
- npm או yarn
- חשבון GitHub
- חשבון בפלטפורמת הפריסה הנבחרת

## 🔧 הכנה לפריסה

### 1. בניית הפרויקט
```bash
npm run build
```

### 2. בדיקת הבנייה
```bash
# הרצת שרת מקומי לבדיקה
npm run preview
```

## 🌐 אפשרויות פריסה

### אפשרות 1: Netlify (מומלץ למתחילים)

#### יתרונות:
- ✅ חינמי
- ✅ פריסה אוטומטית מ-GitHub
- ✅ SSL מובנה
- ✅ CDN גלובלי
- ✅ תמיכה ב-SPA

#### שלבי פריסה:

1. **העלאה ל-GitHub**
   ```bash
   git add .
   git commit -m "Prepare for deployment"
   git push origin main
   ```

2. **התחברות ל-Netlify**
   - היכנס ל-[netlify.com](https://netlify.com)
   - לחץ על "Sign up" והתחבר עם GitHub

3. **יצירת אתר חדש**
   - לחץ על "New site from Git"
   - בחר "GitHub" כמקור
   - בחר את הפרויקט שלך

4. **הגדרות בנייה**
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Node version**: `18`

5. **פריסה**
   - לחץ על "Deploy site"
   - האתר יהיה זמין בכתובת: `https://your-site-name.netlify.app`

#### הגדרות נוספות:
- הוסף את הקובץ `netlify.toml` (כבר קיים בפרויקט)
- הגדר custom domain (אופציונלי)

### אפשרות 2: Vercel

#### יתרונות:
- ✅ חינמי
- ✅ פריסה אוטומטית
- ✅ ביצועים מעולים
- ✅ תמיכה ב-React

#### שלבי פריסה:

1. **התחברות ל-Vercel**
   - היכנס ל-[vercel.com](https://vercel.com)
   - התחבר עם GitHub

2. **ייבוא הפרויקט**
   - לחץ על "Import Project"
   - בחר את הפרויקט שלך
   - Vercel יזהה אוטומטית שזה פרויקט React

3. **הגדרות**
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`
   - **Install Command**: `npm install`

4. **פריסה**
   - לחץ על "Deploy"
   - האתר יהיה זמין בכתובת: `https://your-project.vercel.app`

### אפשרות 3: GitHub Pages

#### יתרונות:
- ✅ חינמי
- ✅ אינטגרציה עם GitHub
- ✅ SSL מובנה

#### שלבי פריסה:

1. **התקנת gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **עדכון package.json**
   ```json
   {
     "homepage": "https://your-username.github.io/tene-marketplace",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. **פריסה**
   ```bash
   npm run deploy
   ```

4. **הפעלת GitHub Pages**
   - היכנס להגדרות הפרויקט ב-GitHub
   - לך ל-"Pages" בתפריט הצד
   - בחר "Deploy from a branch"
   - בחר "gh-pages" branch

### אפשרות 4: AWS S3 + CloudFront

#### יתרונות:
- ✅ ביצועים מעולים
- ✅ שליטה מלאה
- ✅ CDN גלובלי

#### שלבי פריסה:

1. **יצירת S3 Bucket**
   - היכנס ל-AWS Console
   - צור S3 bucket חדש
   - הגדר את ה-bucket כ-public

2. **העלאת הקבצים**
   ```bash
   npm run build
   # העלה את תוכן תיקיית 'build' ל-S3
   ```

3. **הגדרת Static Website Hosting**
   - בחר את ה-bucket
   - לך ל-"Properties" > "Static website hosting"
   - הפעל "Enable"
   - הגדר "index.html" כ-index document

4. **הגדרת CloudFront (אופציונלי)**
   - צור CloudFront distribution
   - הגדר את ה-S3 bucket כ-origin
   - הגדר custom domain (אופציונלי)

## 🔧 הגדרות נוספות

### משתני סביבה
צור קובץ `.env` בשורש הפרויקט:
```env
REACT_APP_API_URL=https://api.tene.com
REACT_APP_GOOGLE_MAPS_API_KEY=your_api_key
REACT_APP_ANALYTICS_ID=your_analytics_id
```

### אופטימיזציה
- **Code Splitting**: כבר מובנה ב-React
- **Image Optimization**: השתמש בתמונות מותאמות
- **SEO**: מטא-טאגים מותאמים לעברית
- **PWA**: תמיכה באפליקציה פרוגרסיבית

### בדיקות לאחר פריסה
- [ ] האתר נטען במהירות
- [ ] כל הדפים עובדים
- [ ] הניווט עובד
- [ ] העיצוב נראה טוב על מובייל
- [ ] הטקסטים בעברית מוצגים נכון

## 🚨 פתרון בעיות נפוצות

### בעיה: האתר לא נטען
**פתרון**: בדוק שהקבצים הועלו נכון ל-build directory

### בעיה: ניווט לא עובד
**פתרון**: ודא שה-configured redirects נכון (כבר מוגדר ב-netlify.toml)

### בעיה: תמונות לא נטענות
**פתרון**: בדוק שהנתיבים לתמונות נכונים

### בעיה: עיצוב לא נראה נכון
**פתרון**: בדוק שה-CSS נטען נכון ושאין שגיאות בקונסול

## 📞 תמיכה

אם נתקלת בבעיות:
- בדוק את הלוגים בפלטפורמת הפריסה
- בדוק את הקונסול בדפדפן
- צור issue ב-GitHub repository

---

**תנה - מחברים בין השדה לצרכן** 🌱


