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
    <div className="bg-white p-6 rounded-xl shadow flex items-center justify-between w-full max-w-md">
      {/* Chart */}
      <div className="relative w-32 h-32">
        <Doughnut data={data} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-sm font-semibold">
          <p className="text-xl">12</p>
          <p className="text-gray-600">Exams</p>
        </div>
      </div>

      {/* Legend */}
      <div className="space-y-4 ml-6 w-full max-w-[140px]">
        <div className="flex justify-between items-center text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span>GOOD</span>
          </div>
          <span className=" text-green-600 text-lg">8</span>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-400" />
            <span>AVERAGE</span>
          </div>
          <span className=" text-blue-600 text-lg">3</span>
        </div>

        <div className="flex justify-between items-center text-sm text-gray-700">
          <div className="flex items-center gap-2 ">
            <span className="w-3 h-3 rounded-full bg-red-400 " />
            <span>BAD</span>
          </div>
          <span className="text-red-500 text-lg">1</span>
        </div>
      </div>
    </div>
  );
};

export default ExamResultChart; 