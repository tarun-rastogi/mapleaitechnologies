"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function DemoRequestForm() {
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
          scope: formData.get("interest"),
          message: formData.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      });

      const result: { success?: boolean; message?: string } = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Failed to submit. Please try again.");
      }

      form.reset();
      setStatus("success");
      setMessage("We have received your request. Our team will reach out within one business day.");
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-[16px] font-semibold text-emerald-800">Request Received!</p>
        <p className="max-w-[400px] text-[14px] leading-[22px] text-emerald-700">{message}</p>
        <button
          onClick={() => { setStatus("idle"); setMessage(""); }}
          className="mt-2 rounded-full border border-emerald-300 px-5 py-2 text-[13px] font-medium text-emerald-800 transition hover:bg-emerald-100"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:gap-5 sm:p-8"
      style={{ boxShadow: "0px 4px 24px rgba(15,23,42,0.08), 0px 1px 3px rgba(15,23,42,0.06)" }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-[13px] font-medium text-slate-700">
          Full Name *
          <input
            type="text"
            name="name"
            required
            placeholder="Jane Smith"
            className="rounded-xl border border-slate-300 px-4 py-2.5 text-[14px] text-slate-800 outline-none ring-[#155DFC] transition focus:ring-2"
          />
        </label>
        <label className="grid gap-1.5 text-[13px] font-medium text-slate-700">
          Work Email *
          <input
            type="email"
            name="email"
            required
            placeholder="jane@company.com"
            className="rounded-xl border border-slate-300 px-4 py-2.5 text-[14px] text-slate-800 outline-none ring-[#155DFC] transition focus:ring-2"
          />
        </label>
      </div>

      <label className="grid gap-1.5 text-[13px] font-medium text-slate-700">
        Company *
        <input
          type="text"
          name="company"
          required
          placeholder="Acme Corp"
          className="rounded-xl border border-slate-300 px-4 py-2.5 text-[14px] text-slate-800 outline-none ring-[#155DFC] transition focus:ring-2"
        />
      </label>

      <label className="grid gap-1.5 text-[13px] font-medium text-slate-700">
        Area of Interest
        <select
          name="interest"
          className="rounded-xl border border-slate-300 px-4 py-2.5 text-[14px] text-slate-800 outline-none ring-[#155DFC] transition focus:ring-2"
          defaultValue=""
        >
          <option value="" disabled>Select a service area</option>
          <option value="ai-application">AI Application Development</option>
          <option value="web-app">Web Application Development</option>
          <option value="mobile-app">Mobile App Development</option>
          <option value="platform">Enterprise Platform & Integration</option>
          <option value="design">UI/UX Design</option>
          <option value="other">Other / Not sure yet</option>
        </select>
      </label>

      <label className="grid gap-1.5 text-[13px] font-medium text-slate-700">
        Tell us about your project
        <textarea
          name="message"
          rows={4}
          placeholder="Describe your goals, current challenges, or what you'd like to demo..."
          className="rounded-xl border border-slate-300 px-4 py-2.5 text-[14px] text-slate-800 outline-none ring-[#155DFC] transition focus:ring-2"
        />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-full bg-[#155DFC] py-3 text-[14px] font-semibold text-white transition hover:bg-[#1447E6] disabled:cursor-not-allowed disabled:opacity-60"
        style={{ boxShadow: "0px 8px 20px rgba(21,93,252,0.3)" }}
      >
        {status === "loading" ? "Submitting…" : "Request a Demo →"}
      </button>

      {status === "error" && message ? (
        <p className="text-[13px] text-rose-600">{message}</p>
      ) : null}

      <p className="text-center text-[11px] leading-4 text-slate-400 sm:text-[12px]">
        No spam. We respond within one business day.
      </p>
    </form>
  );
}
