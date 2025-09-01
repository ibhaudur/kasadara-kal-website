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
  return new Date(value).toISOString().split("T")[0];
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
export const prepareChartData = (
  stats: Record<string, number>,
  config: { key: string; label: string; color: string }[]
) => {
  return {
    labels: config.map((item) => item.label),
    datasets: [
      {
        data: config.map((item) => stats[item.key] || 0),
        backgroundColor: config.map((item) => item.color),
        borderWidth: 3,
        cutout: "70%",
      },
    ],
  };
};
