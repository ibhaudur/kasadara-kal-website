import React from "react";

const AttendedExamResults: React.FC = () => {
  return (
            <table className="w-full text-[13px] text-gray-700 border-separate border-spacing-y-2">
            <tbody>
           <tr className="bg-gray-50 rounded-xl w-full flex flex-col sm:table-row sm:rounded-none sm:w-auto">
            <td className=" p-2 sm:rounded-l-xl text-sm text-gray-800">
              Group 4 Exam - Quick Test - 4
            </td>
            <td className="p-2 text-sm text-gray-800 text-start">
              <span className="font-bold text-[16px]">34</span><span className="text-gray-500"> / 50</span>
           
            <span className="p-2  text-left text-sm font-medium text-blue-500 sm:rounded-r-xl">
             Average</span>
            </td>
          </tr>

        <tr className="bg-gray-50 rounded-xl w-full flex flex-col sm:table-row sm:rounded-none sm:w-auto">
            <td className="p-2 sm:rounded-l-xl text-sm text-gray-800">
              Group 4 Exam - Quick Test - 4
            </td>
            <td className="p-2 text-sm text-gray-800 text-start">
              <span className="font-bold text-[16px]">34</span><span className="text-gray-500"> / 50</span>
           
            <span className="p-2  text-left text-sm font-medium text-green-500 sm:rounded-r-xl">
             Good</span>
            </td>
          </tr>

        <tr className="bg-gray-50 rounded-xl w-full flex flex-col sm:table-row sm:rounded-none sm:w-auto">
            <td className="p-2 sm:rounded-l-xl text-sm text-gray-800">
              Group 4 Exam - Quick Test - 4
            </td>
            <td className="p-2 text-sm text-gray-800 text-start ">
              <span className="font-bold text-[16px]">34</span><span className="text-gray-500"> / 50</span>
            
            <span className="p-2  text-left text-sm font-medium text-red-500 ">
             Bad</span>
            </td>
          </tr>

        
      </tbody>
    </table>
  );
};

export default AttendedExamResults;
