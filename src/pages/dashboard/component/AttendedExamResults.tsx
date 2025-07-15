import React from "react";

const AttendedExamResults: React.FC = () => {
  return (
    <table className="w-full text-[13px] text-gray-700 border-separate border-spacing-y-2">
      <tbody>
        <tr className="bg-gray-50 rounded-xl">
          <td className="p-2 rounded-l-xl">Group 4 Exam - Quick Test - 4</td>
          <td align="center" className="p-2">
            <span className="text-blue-600 font-semibold">34</span>/50
          </td>
          <td align="right" className="p-2 rounded-r-xl text-[#5B9EE9]">
            Average
          </td>
        </tr>

        <tr className="bg-gray-50 rounded-xl">
          <td className="p-2 rounded-l-xl">Mock Test - 3</td>
          <td align="center" className="p-2">
            <span className="text-green-600 font-semibold">45</span>/50
          </td>
          <td align="right" className="p-2 rounded-r-xl text-[#5FDAA4]">
            Good
          </td>
        </tr>

        <tr className="bg-gray-50 rounded-xl">
          <td className="p-2 rounded-l-xl">Quick Test - 23</td>
          <td align="center" className="p-2">
            <span className="text-red-500 font-semibold">16</span>/50
          </td>
          <td align="right" className="p-2 rounded-r-xl text-[#FF6666]">
            Bad
          </td>
        </tr>

        <tr className="bg-gray-50 rounded-xl">
          <td className="p-2 rounded-l-xl">Group 1 - Exam - Mock test</td>
          <td align="center" className="p-2">
            <span className="text-blue-600 font-semibold">34</span>/50
          </td>
          <td align="right" className="p-2 rounded-r-xl text-[#5B9EE9]">
            Average
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default AttendedExamResults;
