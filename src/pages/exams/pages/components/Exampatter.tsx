import React, { useState } from 'react';

const Exampattern: React.FC = () => {
  const [expandedSubject, setExpandedSubject] = useState<string | null>(null);

  const subjects = [
    { name: 'General Tamil', questions: 230, marks: 230 },
    { name: 'Aptitude', questions: 230, marks: 230 },
    { name: 'General Studies', questions: 230, marks: 230 }
  ];

  const toggleSubject = (subjectName: string) => {
    setExpandedSubject(expandedSubject === subjectName ? null : subjectName);
  };

  return (
    <div className="w-full mx-auto font-['Segoe_UI',sans-serif] mt-5">
      <h2 className="text-[16px] sm:text-2xl font-bold text-[#333] mb-3">Exam Pattern: TNPSC Group 4 (2025)</h2>
      
      {/* Desktop/Tablet View (>360px) */}
      <div className="hidden min-[361px]:block border border-[#e0e0e0] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        <div className="flex p-3">
          <div className="flex-2 text-left text-[#666] text-base font-medium">Subjects</div>
          <div className="flex-1 text-left text-[#666] text-base font-medium">No of Questions</div>
          <div className="flex-1 text-center text-[#666] text-base font-medium">marks</div>
        </div>
        
        {subjects.map((subject, index) => (
          <div 
            key={subject.name}
            className={`flex p-3 relative ${index !== subjects.length - 1 ? "after:content-[''] after:absolute after:bottom-0 after:left-5 after:right-5 after:h-[1px] after:bg-[#e0e0e0]" : ''}`}
          >
            <div className="flex-2 text-left text-[#333] text-base font-normal">{subject.name}</div>
            <div className="flex-1 text-left text-[#333] text-base font-normal">{subject.questions}</div>
            <div className="flex-1 text-center text-[#333] text-base font-normal">{subject.marks}</div>
          </div>
        ))}
      </div>

      {/* Mobile View (≤360px) */}
      <div className="block min-[361px]:hidden border border-[#e0e0e0] rounded-xl overflow-hidden shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
        <div className=" p-3 ">
          <div className="text-[#666] text-sm font-medium">Subjects</div>
        </div>
        
        {subjects.map((subject, index) => (
          <div key={subject.name}>
            <div 
              className={`p-3 cursor-pointer hover:bg-[#f8f9fa] transition-colors duration-200 ${index !== subjects.length - 1 ? 'border-b border-[#e0e0e0]' : ''}`}
              onClick={() => toggleSubject(subject.name)}
            >
              <div className="flex items-center justify-between">
                <div className="text-[#333] text-[14px] pl-3 sm:pl-0 sm:text-base font-normal">{subject.name}</div>


                {/* <div className="text-[#666] text-sm">
                  {expandedSubject === subject.name ? '▲' : '▼'}
                </div> */}
              </div>
              
              {expandedSubject === subject.name && (
                <div className="mt-3 pt-3 border-t border-[#e0e0e0]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[#666] pl-3 text-sm">No of Questions:</span>
                    <span className="text-[#333] text-sm font-medium">{subject.questions}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#666] pl-3 text-sm">Marks:</span>

                    <span className="text-[#333] text-sm font-medium">{subject.marks}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exampattern;