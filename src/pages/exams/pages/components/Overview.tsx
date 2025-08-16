import React from 'react';
import logo from '../../../../../public/images/overview-logo.png'; 

const Overview: React.FC = () => {
  return (
    <div className="w-[100%] p-[15px] sm:p-[20px_30px] mx-auto border border-[#e0e0e0] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)] font-['Segoe_UI',sans-serif] mt-5">
      <div className="w-full min-h-[114px] mb-3 sm:mb-5 h-auto sm:max-w-[65%]">
        <h2 className="text-[15px] sm:text-2xl mt-0 mb-2 sm:mb-2.5 text-[#333] font-bold">Overview</h2>
        <p className="text-[12px] sm:text-[13px] leading-relaxed mb-3 sm:mb-4 text-[rgb(113,122,138)]">
          Kasadara kal offers full-length mock tests, quick practice quizzes, and detailed performance insights to help you prepare 
          smarter and faster. Stay updated with the latest patterns, track your progress easily, and boost your chances of success 
          anytime, anywhere.
        </p>
      </div>
      
      <div className="flex justify-between mt-3 sm:mt-5 flex-wrap gap-3 sm:gap-5 min-h-[205px] h-auto">
        <div className="flex-1 basis-[65%] rounded-md">
          <h3 className="text-[15px] sm:text-lg mb-3 sm:mb-4 mt-0 text-[#333] font-semibold">Product Highlights</h3>
          <div className="flex flex-col sm:flex-row justify-between gap-0 sm:gap-5 flex-wrap">
            <ul className="list-none p-0 m-0 w-full sm:flex-1">
              <li className="mb-2 sm:mb-3 flex items-start text-[12px] sm:text-base font-normal text-[#444]">
                <span className="text-white mr-2 font-bold inline-flex items-center justify-center w-6 h-6 bg-[#C7FFE6] rounded-[30%] flex-shrink-0 relative before:content-['★'] before:text-[#2BBC7C] before:text-sm"></span>
                <span>Full-Length Mock Tests Based on Latest Exam Patterns</span>
              </li>
              <li className="mb-2 sm:mb-3 flex items-start text-[12px] sm:text-base font-normal text-[#444]">
                <span className="text-white mr-2 font-bold inline-flex items-center justify-center w-6 h-6 bg-[#C7FFE6] rounded-[30%] flex-shrink-0 relative before:content-['★'] before:text-[#2BBC7C] before:text-sm"></span>
                <span>Instant Test Reports with Accuracy and Time Analysis</span>
              </li>
              <li className="mb-2 sm:mb-3 flex items-start text-[12px] sm:text-base font-normal text-[#444]">
                <span className="text-white mr-2 font-bold inline-flex items-center justify-center w-6 h-6 bg-[#C7FFE6] rounded-[30%] flex-shrink-0 relative before:content-['★'] before:text-[#2BBC7C] before:text-sm"></span>
                <span>Time Management Practice</span>
              </li>
              <li className="mb-2 sm:mb-3 flex items-start text-[12px] sm:text-base font-normal text-[#444]">
                <span className="text-white mr-2 font-bold inline-flex items-center justify-center w-6 h-6 bg-[#C7FFE6] rounded-[30%] flex-shrink-0 relative before:content-['★'] before:text-[#2BBC7C] before:text-sm"></span>
                <span>Mock Test Series Aligned with Upcoming Exam Schedules</span>
              </li>
            </ul>
            
            <ul className="list-none p-0 m-0 w-full sm:flex-1">
              <li className="mb-2 sm:mb-3 flex items-start text-[12px] sm:text-base font-normal text-[#444]">
                <span className="text-white mr-2 font-bold inline-flex items-center justify-center w-6 h-6 bg-[#C7FFE6] rounded-[30%] flex-shrink-0 relative before:content-['★'] before:text-[#2BBC7C] before:text-sm"></span>
                <span>Access Solutions After Every Test</span>
              </li>
              <li className="mb-2 sm:mb-3 flex items-start text-[12px] sm:text-base font-normal text-[#444]">
                <span className="text-white mr-2 font-bold inline-flex items-center justify-center w-6 h-6 bg-[#C7FFE6] rounded-[30%] flex-shrink-0 relative before:content-['★'] before:text-[#2BBC7C] before:text-sm"></span>
                <span>24/7 Access to Your Test History and Progress Reports</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="flex-[0_0_100%] sm:flex-[0_0_197px] w-full sm:w-[197px] h-[180px] sm:h-[205px] bg-[#f9f9f9] p-2.5 rounded-[21px] text-center border border-[#f0f0f0] shadow-sm flex flex-col items-center justify-between">
          <h4 className="mb-3 sm:mb-4 text-[15px] sm:text-xl text-[#333] font-semibold">Exams Covered</h4>
          <div className="flex flex-col items-center w-full">
            <img src={logo} alt="TNPSC Logo" className="w-[130px] sm:w-[155px] h-[100px] sm:h-[116px] mb-2 object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;