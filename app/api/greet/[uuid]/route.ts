import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import { readFileSync } from 'fs';
import path from 'path';

// Function to fetch data from Google Sheets by UUID
async function getData(uuid: string) {
  if (!uuid) {
    throw new Error('Invalid UUID');
  }

  // Path to your service account key file
  const keyFilePath = path.join(process.cwd(), 'config', 'googleServiceAccount.json');

  // Read and parse the service account key
  const keyFile = readFileSync(keyFilePath, 'utf-8');
  const credentials = JSON.parse(keyFile);

  const auth = new google.auth.GoogleAuth({
    credentials, // Manually provide credentials from the key file
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
  });

  const sheets = google.sheets({ version: 'v4', auth });

  // Fetch columns A, B, and C from the sheet
  const range = `Sheet1!A:G`;
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID, // Ensure this is set in your environment variables
    range,
  });

  const values = response.data.values;

  if (!values || values.length === 0) {
    return null;
  }

  // Find the row that matches the given UUID in the first column
  const matchingRow = values.find(row => row[0] === uuid);

  if (!matchingRow) {
    return null;
  }

  const [ id, count, label, message, music, video, images ] = matchingRow;
  return { id, count, label, message, music, video, images };
}

// API handler to handle the request
export async function GET(request: Request) {
  const url = new URL(request.url); // Create a URL object from request.url
  const uuid = url.pathname.split('/').pop(); // Extract the uuid from the URL path

  if (!uuid) {
    return NextResponse.json({ error: 'Invalid UUID' }, { status: 400 });
  }

  try {
    const data = await getData(uuid);
    if (!data) {
      return NextResponse.json({ error: 'Data not found' }, { status: 404 });
    }

    const { id, count, label, message, music, video, images } = data;

    return NextResponse.json({ id, count, label, message, music, video, images }, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}