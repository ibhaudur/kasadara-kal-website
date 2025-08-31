import moment from "moment";

export const formatMinutesToHours = (minutes?: number) => {
  if (!minutes) return "0m";

  const duration = moment.duration(minutes, "minutes");
  const hours = Math.floor(duration.asHours());
  const mins = duration.minutes();

  if (hours > 0) {
    return `${hours}h ${mins > 0 ? `${mins}m` : ""}`.trim();
  }
  return `${mins}min`;
};

export const formatDateOnly = (value?: string) => {
  if (!value) return "";
  return new Date(value).toISOString().split("T")[0]; // "YYYY-MM-DD"
};

export const formatTime = (isoString?: string) => {
  if (!isoString) return "";
  const date = new Date(isoString);

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

export const formatDate = (dateString?: string): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};
