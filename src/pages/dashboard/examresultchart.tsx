import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const defaultData = {
  labels: ["GOOD", "AVERAGE", "BAD"],
  datasets: [
    {
      data: [8, 3, 1],
      backgroundColor: ["#4ade80", "#60a5fa", "#f87171"], // green, blue, red
      borderWidth: 3,
      cutout: "70%",
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false }, // hide chart.js legend, we build custom one
  },
};

interface ExamResultChartProps {
  data?: {
    labels: string[];
    datasets: {
      data: number[];
      backgroundColor: string[];
      borderWidth: number;
      cutout: string;
    }[];
  };
}

const ExamResultChart: React.FC<ExamResultChartProps> = ({ data }) => {
  const chartData = data || defaultData;
  const dataset = chartData.datasets[0];

  return (
    <div className="flex flex-col items-center md:flex-row md:items-start">
      {/* Chart */}
      <div className="relative md:w-48 h-48 lg:h-32 w-32">
        <Doughnut data={chartData} options={options} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-sm font-semibold">
          <p className="text-xl">
            {dataset.data.reduce((a, b) => a + b, 0)}
          </p>
          <p className="text-gray-600">Exams</p>
        </div>
      </div>

      {/* Dynamic Legend */}
      <div className="space-y-1 ml-6 w-full lg:mt-5 md:mt-12">
        {chartData.labels.map((label, i) => (
          <div
            key={i}
            className="flex justify-between items-center text-sm text-gray-700"
          >
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: dataset.backgroundColor[i] }}
              />
              <span>{label}</span>
            </div>
            <span
              className="text-lg"
              style={{ color: dataset.backgroundColor[i] }}
            >
              {dataset.data[i]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExamResultChart;
