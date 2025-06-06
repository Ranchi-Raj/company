import { NextRequest, NextResponse } from 'next/server';
import { dbConnect } from '@/app/lib/MongoDB';
import { ContactMessage } from '@/app/api/Models/FormModel';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();

    const data = await req.json();

    const { firstName, lastName, email, subject, message } = data;

    // Basic validation (optional)
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { status: "error", message: "All fields are required." },
        { status: 400 }
      );
    }

    const newMessage = await ContactMessage.create({
      firstName,
      lastName,
      email,
      subject,
      message,
    });

    return NextResponse.json(
      { status: "success", message: "Message sent successfully.", data: newMessage },
      { status: 201 }
    );
  } catch (error:any) {
    console.error("POST error:", error);
    return NextResponse.json(
      { status: "error", message: error.message },
      { status: 500 }
    );
  }
}
