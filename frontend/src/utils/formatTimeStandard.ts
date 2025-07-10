'use client'
export function formatToStandardTime(time: string) {
  const [hours, minutes] = time.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  const standardHours = hours % 12 || 12; // Convert 0 or 12 to 12 for standard time
  return `${standardHours}:${minutes.toString().padStart(2, "0")} ${period}`;
}
