"use client";

import { useEffect, useId, useRef, useState, type FormEvent, type ReactNode } from "react";
import type { SiteContent } from "@/content";
import { submitInquiry, type InquiryPayload } from "@/lib/submit-inquiry";
import { validateInquiry, type InquiryField } from "@/lib/validate-inquiry";
import { Icon } from "@/components/ui/Icon";

type FormContent = SiteContent["contact"]["form"];
type Status = "idle" | "submitting" | "success" | "error";

const EMPTY: InquiryPayload = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  eventType: "",
  attendees: "",
  date: "",
  message: "",
};

const FIELD_ORDER: InquiryField[] = [
  "name",
  "organization",
  "email",
  "phone",
  "eventType",
  "attendees",
  "date",
  "message",
];

export function ContactForm({ form }: { form: FormContent }) {
  const uid = useId();
  const [values, setValues] = useState<InquiryPayload>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<InquiryField, string>>>({});
  const [status, setStatus] = useState<Status>("idle");
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const fieldId = (field: InquiryField) => `${uid}-${field}`;
  const errorId = (field: InquiryField) => `${uid}-${field}-galat`;
  const errorFields = FIELD_ORDER.filter((field) => errors[field]);
  const submitting = status === "submitting";

  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  const update = (field: InquiryField, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    // Hapus galat kolom begitu pengguna memperbaikinya.
    if (errors[field]) setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    const nextErrors = validateInquiry(values, form.errors);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus("submitting");
    try {
      const result = await submitInquiry({
        ...values,
        name: values.name.trim(),
        organization: values.organization.trim(),
        email: values.email.trim(),
        phone: values.phone.trim(),
        message: values.message.trim(),
      });
      setStatus(result.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div ref={successRef} tabIndex={-1} role="status" className="flex flex-col items-start p-7 outline-none md:p-10">
        <span className="flex h-12 w-12 items-center justify-center border border-navy-900 text-navy-900">
          <Icon name="check" />
        </span>
        <h3 className="mt-6 text-2xl leading-snug text-navy-900">{form.success.title}</h3>
        <p className="mt-3 max-w-md text-base leading-relaxed text-muted">{form.success.description}</p>
        <button
          type="button"
          className="btn btn-outline mt-8"
          onClick={() => {
            setValues(EMPTY);
            setErrors({});
            setStatus("idle");
          }}
        >
          {form.success.reset}
        </button>
      </div>
    );
  }

  /** Atribut bersama untuk setiap kontrol formulir. */
  const control = (field: InquiryField, required: boolean) => ({
    id: fieldId(field),
    name: field,
    value: values[field],
    "aria-required": required || undefined,
    "aria-invalid": errors[field] ? (true as const) : undefined,
    "aria-describedby": errors[field] ? errorId(field) : undefined,
    disabled: submitting,
    className: "field-input mt-2",
  });

  const Field = ({
    field,
    required = false,
    className = "",
    children,
  }: {
    field: InquiryField;
    required?: boolean;
    className?: string;
    children: ReactNode;
  }) => (
    <div className={className}>
      <label htmlFor={fieldId(field)} className="block text-sm font-semibold text-ink">
        {form.fields[field].label}
        {required ? (
          <span aria-hidden="true" className="text-[#a4201b]">
            {" "}
            *
          </span>
        ) : (
          <span className="font-normal text-muted"> ({form.optional})</span>
        )}
      </label>
      {children}
      {errors[field] ? (
        <p id={errorId(field)} className="mt-2 text-sm font-medium text-[#a4201b]">
          {errors[field]}
        </p>
      ) : null}
    </div>
  );

  return (
    <form noValidate onSubmit={handleSubmit} aria-labelledby={`${uid}-judul`} className="p-6 md:p-10">
      <h3 id={`${uid}-judul`} className="text-2xl leading-snug text-navy-900">
        {form.title}
      </h3>
      <p className="mt-2 text-sm text-muted">{form.requiredNote}</p>

      {errorFields.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="mt-6 border border-[#a4201b] bg-[#fdf3f2] p-4 text-sm text-[#7d1814]"
        >
          <p className="font-semibold">{form.errors.summary}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {errorFields.map((field) => (
              <li key={field}>
                <a href={`#${fieldId(field)}`} className="underline underline-offset-2">
                  {errors[field]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
        {Field({
          field: "name",
          required: true,
          children: (
            <input
              {...control("name", true)}
              type="text"
              autoComplete="name"
              onChange={(event) => update("name", event.target.value)}
            />
          ),
        })}
        {Field({
          field: "organization",
          required: true,
          children: (
            <input
              {...control("organization", true)}
              type="text"
              autoComplete="organization"
              onChange={(event) => update("organization", event.target.value)}
            />
          ),
        })}
        {Field({
          field: "email",
          required: true,
          children: (
            <input
              {...control("email", true)}
              type="email"
              inputMode="email"
              autoComplete="email"
              placeholder={form.fields.email.placeholder}
              onChange={(event) => update("email", event.target.value)}
            />
          ),
        })}
        {Field({
          field: "phone",
          required: true,
          children: (
            <input
              {...control("phone", true)}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder={form.fields.phone.placeholder}
              onChange={(event) => update("phone", event.target.value)}
            />
          ),
        })}
        {Field({
          field: "eventType",
          required: true,
          children: (
            <select {...control("eventType", true)} onChange={(event) => update("eventType", event.target.value)}>
              <option value="">{form.fields.eventType.placeholder}</option>
              {form.eventTypes.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ),
        })}
        {Field({
          field: "attendees",
          required: true,
          children: (
            <select {...control("attendees", true)} onChange={(event) => update("attendees", event.target.value)}>
              <option value="">{form.fields.attendees.placeholder}</option>
              {form.attendeeRanges.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ),
        })}
        {Field({
          field: "date",
          className: "md:col-span-2 md:max-w-[calc(50%-0.75rem)]",
          children: (
            <input {...control("date", false)} type="date" onChange={(event) => update("date", event.target.value)} />
          ),
        })}
        {Field({
          field: "message",
          required: true,
          className: "md:col-span-2",
          children: (
            <textarea
              {...control("message", true)}
              rows={5}
              placeholder={form.fields.message.placeholder}
              onChange={(event) => update("message", event.target.value)}
            />
          ),
        })}
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-6 border border-[#a4201b] bg-[#fdf3f2] p-4 text-sm font-medium text-[#7d1814]">
          {form.errors.submitFailed}
        </p>
      ) : null}

      <div className="mt-8 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-sm leading-relaxed text-muted">{form.privacy}</p>
        <button type="submit" className="btn btn-accent shrink-0 aria-disabled:opacity-80" aria-disabled={submitting}>
          {submitting ? (
            <>
              <span
                aria-hidden="true"
                className="h-4 w-4 animate-[spin_0.8s_linear_infinite] rounded-full border-2 border-white/40 border-t-white"
              />
              {form.submitting}
            </>
          ) : (
            <>
              {form.submit}
              <Icon name="arrowRight" size={18} />
            </>
          )}
        </button>
      </div>
      <p aria-live="polite" className="sr-only">
        {submitting ? form.submitting : ""}
      </p>
    </form>
  );
}
