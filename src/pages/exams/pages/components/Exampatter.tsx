import React from 'react';

const Exampattern: React.FC = () => {
  return (
    <div className="w-full mx-auto  font-['Segoe_UI',sans-serif] mt-5">
      <h2 className="text-2xl font-bold text-[#333] mb-3">Exam Pattern: TNPSC Group 4 (2025)</h2>
      
      <div className="border border-[#e0e0e0] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        <div className="flex p-3">
          <div className="flex-2 text-left text-[#666] text-base font-medium">Subjects</div>
          <div className="flex-1 text-left text-[#666] text-base font-medium">No of Questions</div>
          <div className="flex-1 text-center text-[#666] text-base font-medium">Marks</div>
        </div>
        
        <div className="flex p-3 relative after:content-[''] after:absolute after:bottom-0 after:left-5 after:right-5 after:h-[1px] after:bg-[#e0e0e0]">
          <div className="flex-2 text-left text-[#333] text-base font-normal">General Tamil</div>
          <div className="flex-1 text-left text-[#333] text-base font-normal">230</div>
          <div className="flex-1 text-center text-[#333] text-base font-normal">230</div>
        </div>
        
        <div className="flex p-3 relative after:content-[''] after:absolute after:bottom-0 after:left-5 after:right-5 after:h-[1px] after:bg-[#e0e0e0]">
          <div className="flex-2 text-left text-[#333] text-base font-normal">Aptitude</div>
          <div className="flex-1 text-left text-[#333] text-base font-normal">230</div>
          <div className="flex-1 text-center text-[#333] text-base font-normal">230</div>
        </div>
        
        <div className="flex p-3 relative">
          <div className="flex-2 text-left text-[#333] text-base font-normal">General Studies</div>
          <div className="flex-1 text-left text-[#333] text-base font-normal">230</div>
          <div className="flex-1 text-center text-[#333] text-base font-normal">230</div>
        </div>
      </div>
    </div>
  );
};

export default Exampattern;