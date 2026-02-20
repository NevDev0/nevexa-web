// app/api/referral/route.ts

import { NextResponse } from 'next/server';

const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Referrals`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: body.fields
        })
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error('Airtable error:', error);
      return NextResponse.json(
        { success: false, error: 'Airtable API error' },
        { status: response.status }
      );
    }

    const result = await response.json();
    return NextResponse.json({ success: true, id: result.id });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save referral' },
      { status: 500 }
    );
  }
}