"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          company: formData.get("company"),
          budget: formData.get("budget"),
          scope: formData.get("scope"),
          message: formData.get("message"),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result: { success?: boolean; message?: string } = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Failed to submit your request.");
      }

      form.reset();
      setStatus("success");
      setMessage("Thanks. We have received your request and will respond shortly.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again in a moment."
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
    >
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Full Name
        <input
          type="text"
          name="name"
          required
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-blue-500 transition focus:ring-2"
          placeholder="Jane Smith"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Work Email
        <input
          type="email"
          name="email"
          required
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-blue-500 transition focus:ring-2"
          placeholder="jane@company.com"
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Company
        <input
          type="text"
          name="company"
          required
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-blue-500 transition focus:ring-2"
          placeholder="Acme Inc."
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Budget Range
        <select
          name="budget"
          required
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-blue-500 transition focus:ring-2"
          defaultValue=""
        >
          <option value="" disabled>
            Select budget range
          </option>
          <option value="25k-50k">$25k - $50k</option>
          <option value="50k-100k">$50k - $100k</option>
          <option value="100k-250k">$100k - $250k</option>
          <option value="250k+">$250k+</option>
        </select>
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Project Scope
        <input
          type="text"
          name="scope"
          required
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-blue-500 transition focus:ring-2"
          placeholder="AI assistant, customer portal, cloud modernization..."
        />
      </label>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Message
        <textarea
          name="message"
          rows={6}
          required
          className="rounded-xl border border-slate-300 px-4 py-3 outline-none ring-blue-500 transition focus:ring-2"
          placeholder="Tell us your goals, constraints, and expected launch timeline."
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Submitting..." : "Request Proposal"}
      </button>
      {message ? (
        <p
          className={`text-sm ${
            status === "success" ? "text-emerald-700" : "text-rose-700"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
