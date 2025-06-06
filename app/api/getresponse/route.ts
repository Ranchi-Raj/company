import { ContactMessage } from '@/app/api/Models/FormModel';
import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/app/lib/MongoDB';

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const responses = await ContactMessage.find();
    console.log(responses);
    return NextResponse.json(responses, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error:error || "Server error" }, { status: 500 });
  }
}
