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

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Filler
);

const lineData = {
  labels: [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ],
  datasets: [
    {
      label: "Accuracy",
      data: [30, 60, 45, 70, 40, 65, 75, 55, 68, 85, 60, 70],
      borderColor: "rgba(44, 140, 83, 0.5)",
      backgroundColor: (context: any) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(75, 100, 75, 75);
        gradient.addColorStop(0, "rgba(44, 140, 83, 0.5)");
        gradient.addColorStop(1, "rgba(44, 140, 83, 0)");
        return gradient;
      },
      tension: 0.4,
      fill: true,
      pointRadius: 0,
    },
  ],
};

const lineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      grid: { display: false },
      ticks: {
        color: "#6b7280", //
        font: { size: 14},
        padding: 10,
      },
    },
  },
};

const AccuracyLineChart = () => {
  return (
    <div className="w-[408px] h-[100px] overflow-hidden">
      <Line data={lineData} options={lineOptions} />
    </div>
  );
};

export default AccuracyLineChart;