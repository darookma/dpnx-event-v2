"use client";

import Button from "@/components/ui/Button";
import { focusRing, primaryButtonClassName, textSmallCompactClassName } from "@/lib/layout";
import { siteContent } from "@/content/site";

const { form } = siteContent.cta;
const { email: contactEmail } = siteContent.contact;

const formPanelClassName =
  "flex max-md:h-auto h-full flex-col rounded-panel border border-border bg-background p-4 shadow-sm";

const fieldLabelClassName = [
  textSmallCompactClassName,
  "mb-1 block !text-foreground",
].join(" ");

const fieldInputClassName = [
  "w-full rounded-panel border border-border bg-background px-4 py-2",
  "text-[16px] leading-snug text-foreground font-[650]",
  "placeholder:text-muted",
  focusRing,
].join(" ");

const fieldTextareaClassName = [
  fieldInputClassName,
  "min-h-[120px] resize-y",
].join(" ");

export default function ContactInquiryForm({
  className,
}: {
  className?: string;
}) {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const company = String(data.get("company") ?? "");
    const whatsapp = String(data.get("whatsapp") ?? "");
    const email = String(data.get("email") ?? "");
    const eventDetails = String(data.get("event") ?? "");

    const subject = encodeURIComponent(`Event inquiry from ${name} — ${company}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Company: ${company}`,
        `WhatsApp: ${whatsapp}`,
        email ? `Email: ${email}` : null,
        "",
        "Tell us about your event:",
        eventDetails,
      ]
        .filter(Boolean)
        .join("\n"),
    );

    window.location.href = `${contactEmail.href}?subject=${subject}&body=${body}`;
  };

  return (
    <form
      className={[formPanelClassName, className].filter(Boolean).join(" ")}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid max-md:flex-none flex-1 gap-2">
        <div>
          <label htmlFor="contact-name" className={fieldLabelClassName}>
            {form.nameLabel} *
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={fieldInputClassName}
          />
        </div>

        <div>
          <label htmlFor="contact-company" className={fieldLabelClassName}>
            {form.companyLabel} *
          </label>
          <input
            id="contact-company"
            name="company"
            type="text"
            required
            autoComplete="organization"
            className={fieldInputClassName}
          />
        </div>

        <div>
          <label htmlFor="contact-whatsapp" className={fieldLabelClassName}>
            {form.whatsappLabel} *
          </label>
          <input
            id="contact-whatsapp"
            name="whatsapp"
            type="tel"
            required
            autoComplete="tel"
            className={fieldInputClassName}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={fieldLabelClassName}>
            {form.emailLabel}
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            className={fieldInputClassName}
          />
        </div>

        <div>
          <label htmlFor="contact-event" className={fieldLabelClassName}>
            {form.eventLabel} *
          </label>
          <textarea
            id="contact-event"
            name="event"
            required
            className={fieldTextareaClassName}
          />
        </div>
      </div>

      <Button type="submit" className={`mt-4 w-full ${primaryButtonClassName}`}>
        {form.submitLabel}
      </Button>
    </form>
  );
}
