import type { InquiryPayload } from "./submit-inquiry";

export type InquiryField = keyof InquiryPayload;

export interface InquiryErrorMessages {
  nameRequired: string;
  organizationRequired: string;
  emailRequired: string;
  emailInvalid: string;
  phoneRequired: string;
  phoneInvalid: string;
  eventTypeRequired: string;
  attendeesRequired: string;
  datePast: string;
  messageRequired: string;
  messageTooShort: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Validasi sisi klien. Mengembalikan peta kolom -> pesan galat (kosong bila valid). */
export function validateInquiry(
  values: InquiryPayload,
  messages: InquiryErrorMessages,
  today: Date = new Date(),
): Partial<Record<InquiryField, string>> {
  const errors: Partial<Record<InquiryField, string>> = {};

  if (!values.name.trim()) errors.name = messages.nameRequired;
  if (!values.organization.trim()) errors.organization = messages.organizationRequired;

  const email = values.email.trim();
  if (!email) errors.email = messages.emailRequired;
  else if (!EMAIL_PATTERN.test(email)) errors.email = messages.emailInvalid;

  const phone = values.phone.trim();
  const digits = phone.replace(/\D/g, "");
  if (!phone) errors.phone = messages.phoneRequired;
  else if (!/^[+\d\s().-]+$/.test(phone) || digits.length < 8 || digits.length > 15) {
    errors.phone = messages.phoneInvalid;
  }

  if (!values.eventType) errors.eventType = messages.eventTypeRequired;
  if (!values.attendees) errors.attendees = messages.attendeesRequired;

  if (values.date) {
    const todayIso = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(
      today.getDate(),
    ).padStart(2, "0")}`;
    if (values.date < todayIso) errors.date = messages.datePast;
  }

  const message = values.message.trim();
  if (!message) errors.message = messages.messageRequired;
  else if (message.length < 20) errors.message = messages.messageTooShort;

  return errors;
}
