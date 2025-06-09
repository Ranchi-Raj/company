import { Document, Schema, model, models } from 'mongoose';

export interface IContactMessage extends Document {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const contactMessageSchema = new Schema<IContactMessage>(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address'],
    },
    subject: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite issue in Next.js
export const ContactMessage =
  models.ContactMessage || model<IContactMessage>('ContactMessage', contactMessageSchema);
