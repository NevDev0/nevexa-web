import { NextResponse } from 'next/server';

const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID;
const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY;

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Waitlist`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            'Full Name': data.fullName,
            'Email': data.email,
            'Country': data.country,
            'Client type': data.clientType,
            'Estimated Budget': data.estimatedBudget,
          }
        })
      }
    );
    
    if (!response.ok) {
      const error = await response.json();
      console.error('Airtable error:', error);
      throw new Error('Airtable API error');
    }
    
    const result = await response.json();
    return NextResponse.json({ success: true, id: result.id });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to save data' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/Waitlist`,
      {
        headers: {
          'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        }
      }
    );
    
    const data = await response.json();
    return NextResponse.json({ count: data.records?.length || 0 });
    
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}