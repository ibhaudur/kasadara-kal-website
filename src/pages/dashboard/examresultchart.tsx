import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["GOOD", "AVERAGE", "BAD"],
  datasets: [
    {
      data: [8, 3, 1],
      backgroundColor: ["#4ade80", "#60a5fa", "#f87171"],
      borderWidth: 3,
      cutout: "70%",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
  },
};

const ExamResultChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow flex items-center justify-between">
      {/* Chart */}
      <div className="relative w-32 h-32">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-sm font-semibold">
          <p className="text-xl">12</p>
          <p className="text-gray-600">Exams</p>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-6 mr-24">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500 " />
          <span className="text-sm text-gray-700">GOOD</span>
          <span className="text-sm font-semibold text-green-600 ml-2">8</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-400" />
          <span className="text-sm text-gray-700">AVERAGE</span>
          <span className="text-sm font-semibold text-blue-600 ml-2">3</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="text-sm text-gray-700">BAD</span>
          <span className="text-sm font-semibold text-red-400 ml-2">1</span>
        </div>
      </div>
    </div>
  );
};

export default ExamResultChart; 