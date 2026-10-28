"use client";

import type { ReactNode } from "react";

import { googleCalendarSchedulingUrl } from "@/content/scheduling";

type SchedulingCtaProps = {
  className?: string;
  children: ReactNode;
};

function openGoogleCalendarSchedulingPopup(url: string) {
  const width = 640;
  const height = 720;
  const left = Math.max(0, window.screenX + (window.outerWidth - width) / 2);
  const top = Math.max(0, window.screenY + (window.outerHeight - height) / 2);

  window.open(
    url,
    "maple-google-calendar-scheduling",
    `popup=yes,width=${width},height=${height},left=${left},top=${top},scrollbars=yes,resizable=yes`,
  );
}

export function SchedulingCta({ className, children }: SchedulingCtaProps) {
  const handleClick = () => {
    if (googleCalendarSchedulingUrl) {
      openGoogleCalendarSchedulingPopup(googleCalendarSchedulingUrl);
      return;
    }

    window.location.assign("/contact");
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
