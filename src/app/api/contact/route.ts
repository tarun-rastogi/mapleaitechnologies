import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  budget?: string;
  scope?: string;
  message?: string;
};

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const payload = {
      name: clean(body.name),
      email: clean(body.email),
      company: clean(body.company),
      budget: clean(body.budget),
      scope: clean(body.scope),
      message: clean(body.message),
      submittedAt: new Date().toISOString(),
    };

    if (
      !payload.name ||
      !payload.email ||
      !payload.company ||
      !payload.budget ||
      !payload.scope ||
      !payload.message
    ) {
      return NextResponse.json(
        { success: false, message: "Please complete all required fields." },
        { status: 400 }
      );
    }

    if (!isEmail(payload.email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid work email." },
        { status: 400 }
      );
    }

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      const webhookSecret = process.env.CONTACT_WEBHOOK_SECRET;
      const webhookHeaderName =
        process.env.CONTACT_WEBHOOK_SECRET_HEADER || "x-webhook-secret";

      const headers: Record<string, string> = {
        "Content-Type": "application/json",
      };

      if (webhookSecret) {
        headers[webhookHeaderName] = webhookSecret;
      }

      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(10_000),
      });

      if (!webhookResponse.ok) {
        return NextResponse.json(
          {
            success: false,
            message:
              "Your request could not be delivered right now. Please try again shortly.",
          },
          { status: 502 }
        );
      }
    } else {
      // Keep local visibility in development until a webhook/CRM is configured.
      console.log("Contact request received:", payload);
    }

    return NextResponse.json({
      success: true,
      message: "Request submitted successfully.",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid submission format. Please try again.",
      },
      { status: 400 }
    );
  }
}
