
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

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Filler);

const lineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Accuracy",
      data: [75, 60, 65, 78, 55, 70, 78, 60, 75, 80, 60, 70],
      borderColor: "#22c55e",
      backgroundColor: "rgba(34, 197, 94, 0.1)",
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
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      display: false,
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
};

const AccuracyLineChart = () => (
  <div className="h-32 w-full">
    <Line data={lineData} options={lineOptions} />
  </div>
);
export default AccuracyLineChart;