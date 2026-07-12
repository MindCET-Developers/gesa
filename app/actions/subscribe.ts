"use server";

export type SubscribeState = {
  ok: boolean;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Newsletter subscription Server Action.
 *
 * Adds the email to a Resend "Audience" when RESEND_API_KEY + RESEND_AUDIENCE_ID
 * are configured. Without those env vars it succeeds locally (dev/demo) so the UI
 * can be exercised before the email provider is wired up. Swap Resend for Brevo /
 * Mailchimp by changing only the fetch call below.
 */
export async function subscribe(
  _prev: SubscribeState,
  formData: FormData
): Promise<SubscribeState> {
  // Honeypot — bots fill hidden fields.
  if ((formData.get("company") as string)?.length) {
    return { ok: true, message: "Thanks for subscribing!" };
  }

  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  if (!EMAIL_RE.test(email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const audienceId = process.env.RESEND_AUDIENCE_ID;

  if (!apiKey || !audienceId) {
    // Provider not configured yet — accept locally so the flow is testable.
    console.info(`[newsletter] (dev) would subscribe: ${email}`);
    return { ok: true, message: "Thanks for subscribing!" };
  }

  try {
    const res = await fetch(
      `https://api.resend.com/audiences/${audienceId}/contacts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, unsubscribed: false }),
      }
    );

    if (!res.ok && res.status !== 409 /* already a contact */) {
      const body = await res.text();
      console.error(`[newsletter] Resend error ${res.status}: ${body}`);
      return {
        ok: false,
        message: "Something went wrong. Please try again later.",
      };
    }

    return { ok: true, message: "Thanks for subscribing!" };
  } catch (err) {
    console.error("[newsletter] request failed", err);
    return { ok: false, message: "Something went wrong. Please try again later." };
  }
}
