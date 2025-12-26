# Product Management API

REST API לניהול מוצרים עם Express.js ו-MongoDB.

## 📋 תיאור הפרויקט

API מלא לניהול מוצרים (CRUD) עם אימות נתונים, חיבור ל-MongoDB, ותמיכה בכל הפעולות הבסיסיות.

## 🚀 טכנולוגיות

- **Node.js** - סביבת הרצה
- **Express.js** - פריימוורק לשרת
- **MongoDB** - מסד נתונים
- **Mongoose** - ODM למונגו
- **Joi** - אימות נתונים
- **dotenv** - ניהול משתני סביבה

## 📦 התקנה

```bash
# שכפול הפרויקט
git clone <repository-url>
cd express-project2

# התקנת תלויות
npm install

# יצירת קובץ .env
touch .env
```

## ⚙️ הגדרת משתני סביבה

צור קובץ `.env` בתיקיית הפרויקט:

```env
NODE_ENV=development
PORT=חסוי
MONGODB_URI="חסוי"
```

## 🏃 הרצת הפרויקט

```bash
# הרצה רגילה
node index.js

# עם nodemon (מפתחים)
nodemon index.js
```

השרת ירוץ על `http://localhost:9000`

## 🛣️ API Routes

### קבלת כל המוצרים
```http
GET /api/products
```

**תשובה:** מערך של כל המוצרים

---

### קבלת מוצר ספציפי
```http
GET /api/products/:productId
```

**פרמטרים:**
- `productId` - מזהה המוצר

**תשובה:** אובייקט מוצר בודד

---

### יצירת מוצר חדש
```http
POST /api/products
```

**Body:**
```json
{
  "productid": 1,
  "name": "Phone",
  "price": 4000,
  "category": "smartphone",
  "description": "A smart phone"
}
```

---

### עדכון מוצר
```http
PUT /api/products/:productId
```

**פרמטרים:**
- `productId` - מזהה המוצר

**Body:** שדות לעדכון (כל השדות חובה)
```json
{
  "productid":_,
  "name": "_",
  "price": _,
  "category": "_",
  "description": "_"
}
```


---

### מחיקת מוצר
```http
DELETE /api/products/:productId
```

**פרמטרים:**
- `productid` - מזהה המוצר

**תשובה:** הודעת אישור

---

## 📊 מבנה מוצר (Product Schema)

```javascript
{
  productid: Number,      // חובה - מזהה ייחודי
  name: String,           // חובה - שם המוצר
  price: Number,          // חובה - מחיר
  category: String,       // חובה - קטגוריה
  description: String     // אופציונלי - תיאור
}
```

## 📁 מבנה הפרויקט

```
express-project2/
├── models/
│   └── Product.js      # מודל MongoDB
├── routes/
│   └── product.js      # Routes של מוצרים
├── .env                # משתני סביבה (לא בGit)
├── .gitignore          # קבצים להתעלם
├── index.js            # נקודת כניסה
├── package.json        # תלויות
└── README.md           # תיעוד
```

## 🔒 אבטחה

- קובץ `.env` לא מועלה ל-Git
- אימות נתונים עם Joi
- טיפול בשגיאות מקיף

## 📝 קודי Status

- `200` - הצלחה
- `201` - נוצר בהצלחה
- `400` - נתונים שגויים
- `404` - לא נמצא
- `500` - שגיאת שרת

## 👨‍💻 פיתוח

```bash
# התקנת nodemon
npm install -g nodemon

# הרצה עם nodemon
nodemon index.js
```

## 📄 License

ISC
