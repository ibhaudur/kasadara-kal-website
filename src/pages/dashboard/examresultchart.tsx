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
    <div className="bg-white p-4 rounded-xl w-full max-w-xs mx-auto mb-2">
     
      {/* Chart */}
      <div className="relative w-\30 h-30 mx-auto">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-sm font-semibold">
          <p className="text-lg">12</p>
          <p className="text-gray-600">Exams</p>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <span className="text-gray-700">GOOD</span>
          </div>
          <span className="text-green-600 font-semibold">8</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-400" />
            <span className="text-gray-700">AVERAGE</span>
          </div>
          <span className="text-blue-600 font-semibold">3</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <span className="text-gray-700">BAD</span>
          </div>
          <span className="text-red-500 font-semibold">1</span>
        </div>
      </div>
    </div>
  );
};

export default ExamResultChart; 