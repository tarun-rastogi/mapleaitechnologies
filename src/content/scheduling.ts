/**
 * Google Calendar appointment scheduling page.
 * Create in Google Calendar: Appointment schedules → Share → Copy link.
 * Set NEXT_PUBLIC_GOOGLE_CALENDAR_SCHEDULING_URL in .env.local
 */
export const googleCalendarSchedulingUrl =
  process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_SCHEDULING_URL ?? "";
