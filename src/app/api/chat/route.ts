import { NextResponse } from "next/server";

import { generateChatReply } from "@/lib/chatbot/engine";

type ChatRequestBody = {
  message?: string;
};

export async function POST(request: Request) {
  let body: ChatRequestBody;

  try {
    body = (await request.json()) as ChatRequestBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const message = body.message?.trim();

  if (!message) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  if (message.length > 2000) {
    return NextResponse.json({ error: "Message is too long." }, { status: 400 });
  }

  const reply = generateChatReply(message);

  return NextResponse.json({ reply });
}
