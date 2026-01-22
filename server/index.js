import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/* ✅ CORS FIX */
app.use(cors({
  origin: '*',     // change to your domain in prod
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const SPREADSHEET_ID = process.env.VITE_GOOGLE_SHEET_ID;

/* Google Sheets Init */
async function getSheets() {
  const credentialsData = JSON.parse(
    fs.readFileSync(CREDENTIALS_PATH, 'utf8')
  );

  const auth = new google.auth.GoogleAuth({
    credentials: credentialsData,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

/* Enrollment API */
app.post('/api/enroll', async (req, res) => {
  try {
    if (!SPREADSHEET_ID) {
      return res.status(500).json({ error: 'Sheet ID not configured' });
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      college,
      year,
      internshipTitle,
      enrolledAt
    } = req.body;

    if (!firstName || !email || !internshipTitle) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const sheets = await getSheets();

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:H',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          firstName,
          lastName || '',
          email,
          phone || '',
          college || '',
          year || '',
          internshipTitle,
          new Date(enrolledAt || Date.now())
            .toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        ]]
      }
    });

    res.json({ success: true });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

/* Health */
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
