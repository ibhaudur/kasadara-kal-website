import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register components
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: true },
  },
  interaction: {
    mode: "index" as const,
    intersect: false,
  },
  scales: {
    y: { display: false },
    x: {
      grid: { display: false },
      ticks: {
        color: "#6b7280",
        font: { size: 9 },
        padding: 10,
      },
    },
  },
};

const AccuracyLineChart = ({ data }: { data: any }) => {
  // Convert data to numbers
  const labels = data?.map((item: any) => item.month);
  const accuracyValues = data?.map((item: any) =>
    item.accuracy ? parseFloat(item.accuracy.replace("%", "")) : 0
  );

  // ✅ Handle single-point case by duplicating the point slightly
  const fixedLabels =
    accuracyValues.length === 1
      ? [labels[0], labels[0] + " "] // add space to make x-axis wider
      : labels;

  const fixedData =
    accuracyValues.length === 1
      ? [accuracyValues[0], accuracyValues[0]]
      : accuracyValues;

  const lineData = {
    labels: fixedLabels,
    datasets: [
      {
        label: "Accuracy",
        data: fixedData,
        borderColor: "rgba(44, 140, 83, 1)",
        backgroundColor: (context: any) => {
          const { chart } = context;
          const { ctx, chartArea } = chart;
          if (!chartArea) return "rgba(44, 140, 83, 0.2)";

          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(44, 140, 83, 0.2)");
          gradient.addColorStop(1, "rgba(44, 140, 83, 0)");
          return gradient;
        },
        tension: 0.4,
        fill: true,
        pointRadius: 4,
        pointBackgroundColor: "rgba(44, 140, 83, 1)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="w-full h-48 overflow-hidden">
      <Line data={lineData} options={lineOptions} />
    </div>
  );
};

export default AccuracyLineChart;
