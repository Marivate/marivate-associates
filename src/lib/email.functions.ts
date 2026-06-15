import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const TO_EMAIL = "Kateka@MarivateAssociates.co.za";
const FROM = "Marivate & Associates <onboarding@resend.dev>";

async function sendViaResend(payload: {
  subject: string;
  html: string;
  replyTo?: string;
}) {
  const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
    throw new Error("Email service is not configured");
  }
  const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": RESEND_API_KEY,
    },
    body: JSON.stringify({
      from: FROM,
      to: [TO_EMAIL],
      subject: payload.subject,
      html: payload.html,
      ...(payload.replyTo ? { reply_to: payload.replyTo } : {}),
    }),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Email send failed (${res.status}): ${text}`);
  }
  return res.json();
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const consultSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(1).max(40),
  area: z.string().trim().min(1).max(80),
  message: z.string().trim().min(10).max(2000),
});

export const sendConsultation = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => consultSchema.parse(d))
  .handler(async ({ data }) => {
    const rows = [
      ["Name", data.name],
      ["Email", data.email],
      ["Phone", data.phone],
      ["Practice Area", data.area],
    ]
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 12px;color:#666;">${k}</td><td style="padding:6px 12px;"><strong>${escapeHtml(v)}</strong></td></tr>`,
      )
      .join("");
    const html = `<div style="font-family:Georgia,serif;max-width:600px;">
      <h2 style="color:#0a1830;">New Consultation Request</h2>
      <table style="border-collapse:collapse;">${rows}</table>
      <h3 style="color:#0a1830;margin-top:24px;">Message</h3>
      <p style="white-space:pre-wrap;line-height:1.6;">${escapeHtml(data.message)}</p>
    </div>`;
    await sendViaResend({
      subject: `Consultation Request — ${data.area}`,
      html,
      replyTo: data.email,
    });
    return { ok: true };
  });

const applySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().min(1).max(40),
  programme: z.string().trim().min(1).max(120),
  qualification: z.string().trim().min(1).max(200),
  coverLetter: z.string().trim().min(20).max(3000),
  attachments: z
    .array(
      z.object({
        filename: z.string().min(1).max(200),
        content: z.string().min(1), // base64
      }),
    )
    .max(6)
    .optional(),
});

export const sendApplication = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => applySchema.parse(d))
  .handler(async ({ data }) => {
    const rows = [
      ["Name", data.name],
      ["Email", data.email],
      ["Phone", data.phone],
      ["Programme", data.programme],
      ["Qualification", data.qualification],
    ]
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 12px;color:#666;">${k}</td><td style="padding:6px 12px;"><strong>${escapeHtml(v)}</strong></td></tr>`,
      )
      .join("");
    const html = `<div style="font-family:Georgia,serif;max-width:600px;">
      <h2 style="color:#0a1830;">New Application</h2>
      <table style="border-collapse:collapse;">${rows}</table>
      <h3 style="color:#0a1830;margin-top:24px;">Cover Letter</h3>
      <p style="white-space:pre-wrap;line-height:1.6;">${escapeHtml(data.coverLetter)}</p>
    </div>`;

    const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
      throw new Error("Email service is not configured");
    }
    const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: FROM,
        to: [TO_EMAIL],
        reply_to: data.email,
        subject: `Application — ${data.programme} — ${data.name}`,
        html,
        attachments: data.attachments,
      }),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Email send failed (${res.status}): ${text}`);
    }
    return { ok: true };
  });
