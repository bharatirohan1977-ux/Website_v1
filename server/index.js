import express from 'express';
import cors from 'cors';
import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/* CORS */
app.use(cors({
  origin: '*', // restrict in prod
  methods: ['POST', 'GET'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

const CREDENTIALS_PATH = path.join(__dirname, 'credentials.json');
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;

/* Google Sheets init */
async function getSheets() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

  return google.sheets({ version: 'v4', auth });
}

/* Enrollment API */
app.post('/api/enroll', async (req, res) => {
  try {
    if (!SPREADSHEET_ID) {
      return res.status(500).json({ error: 'GOOGLE_SHEET_ID not set' });
    }

    const {
      firstName,
      lastName,
      email,
      phone,
      college,
      year,
      program,
      mode,
      duration,
      category,
      enrolledAt
    } = req.body;

    if (!firstName || !email || !program) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const sheets = await getSheets();

    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Sheet1!A:K',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[
          firstName,
          lastName || '',
          email,
          phone || '',
          college || '',
          year || '',
          program,
          mode || '',
          duration || '',
          category || '',
          new Date(enrolledAt || Date.now())
            .toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        ]]
      }
    });

    res.json({ success: true });

  } catch (err) {
    console.error('Enroll error:', err);
    res.status(500).json({ error: err.message });
  }
});

/* Health check */
app.get('/health', (_, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
