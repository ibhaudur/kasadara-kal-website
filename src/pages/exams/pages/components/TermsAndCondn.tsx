import React from "react";

const TermsAndCond: React.FC = () => {

  return (
    <div className="w-[100%] font-['Segoe_UI',Arial,sans-serif] text-[#333] leading-none mt-5">
      <h1 className="text-[16px] sm:text-2xl font-bold leading-[22px] mb:4   sm:mb-5 text-[#333]">
        Terms & Conditions
      </h1>

      {/* Desktop/Tablet View (>360px) - Original Layout */}
      <div className="hidden min-[361px]:block terms-content">
        <h2 className="text-[14px] sm:text-lg font-medium mb-5 sm:mb-6">General Instructions</h2>

        <div className="mb-6">
          <h3 className="text-base font-bold mb-2.5 leading-[31px]">
            1. Time Management:-
          </h3>
          <p className="mb-2.5 text-base font-normal">
            The timer on the screen will automatically count down the time left
            for your test. Once the timer reaches zero, your test will
            auto-submit. You do not need to manually end the test.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-base font-bold mb-2.5 leading-[31px]">
            2. Question Status Indicators:-
          </h3>
          <p className="mb-2.5 text-base font-normal">
            The Question Palette will display the status of each question using
            the following symbols:
          </p>
          <ul className="list-none pl-0 mb-4 text-[#8790A1]">
            <li className="flex items-center mb-2">
              <span className="inline-block w-4 h-4 rounded-full mr-2.5 bg-[#4CAF50]"></span>
              <span className="text-sm">
                Answered - You have answered the question.
              </span>
            </li>
            <li className="flex items-center mb-2">
              <span className="inline-block w-4 h-4 rounded-full mr-2.5 bg-[#F44336]"></span>
              <span className="text-sm">
                Not answered - You have seen the question but not answered it.
              </span>
            </li>
            <li className="flex items-center mb-2">
              <span className="inline-block w-4 h-4 rounded-full mr-2.5 bg-[#FF9800]"></span>
              <span className="text-sm">
                Currently attending - You are actively working on this question.
              </span>
            </li>
            <li className="flex items-center mb-2">
              <span className="inline-block w-4 h-4 rounded-full mr-2.5 border border-[#ccc] bg-transparent"></span>
              <span className="text-sm">
                Not attempted yet - You haven't opened or answered this question
                yet.
              </span>
            </li>
          </ul>

          <div className="bg-[#FFF8E6] border border-[#FFE082] rounded-xl px-5 py-3 my-4 flex items-start">
            <span className="text-lg mr-2.5 text-[#21272C]">ⓘ</span>
            <p className="m-0 text-sm font-medium leading-[100%]">
              Once you answer a question and click Save & Next, your answer will
              be locked and cannot be changed later. Please review your
              selection carefully before clicking Save & Next.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-base font-bold mb-2.5 leading-[31px]">
            3. Navigation Instructions:
          </h3>
          <ul className="list-none pl-0 mb-4 text-[#8790A1]">
            {[
              "Click on any question number from the left panel to jump directly to that question.",
              "If you wish to skip without answering, simply click Save & Next to move to the next question without saving any answer.",
              "Click Save & Next to save your selected answer and automatically move to the next question.",
            ].map((item, index) => (
              <li
                key={index}
                className="relative pl-4 mb-2 text-sm before:content-['•'] before:absolute before:left-0 before:text-[#666]"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-[#FFF8E6] border border-[#FFE082] rounded-xl px-5 py-3 my-4 flex items-start">
            <span className="text-lg mr-2.5 text-[#21272C]">ⓘ</span>
            <p className="m-0 text-sm font-medium leading-none">
              Note that your answer for the current question will not be saved,
              if you navigate to another question directly by clicking on a
              question number without saving the answer to the previous
              question.
            </p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-base font-bold mb-2.5 leading-[31px]">
            4. Answering a Question:-
          </h3>
          <p className="mb-2.5 text-base font-normal">
            Procedure for answering a multiple-choice (MCQ) type question:
          </p>
          <ul className="list-none pl-0 mb-4 text-[#8790A1]">
            {[
              "Select one answer from the options (A, B, C, D) displayed below the question by clicking on the circle (bubble) next to your chosen option.",
              "To deselect your selected answer, either click again on the same option or click the Clear Response button.",
              "To change your selected answer, simply click on the bubble next to a different option.",
              "To save your answer, you must click the Save & Next button.",
              "Once you click Save & Next, your answer will be locked and cannot be changed.",
            ].map((item, index) => (
              <li
                key={index}
                className="relative pl-4 mb-2 text-sm before:content-['•'] before:absolute before:left-0 before:text-[#666]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile View (≤360px) - Same content with smaller fonts */}
      <div className="block min-[361px]:hidden terms-content">
        <h2 className="text-sm font-medium mb-3">General Instructions</h2>

        <div className="mb-4">
          <h3 className="text-sm font-bold mb-2 leading-[20px]">
            1. Time Management:-
          </h3>
          <p className="mb-2 text-xs font-normal">
            The timer on the screen will automatically count down the time left
            for your test. Once the timer reaches zero, your test will
            auto-submit. You do not need to manually end the test.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-bold mb-2 leading-[20px]">
            2. Question Status Indicators:-
          </h3>
          <p className="mb-2 text-xs font-normal">
            The Question Palette will display the status of each question using
            the following symbols:
          </p>
          <ul className="list-none pl-0 mb-3 text-[#8790A1]">
            <li className="flex items-center mb-1.5">
              <span className="inline-block w-3 h-3 rounded-full mr-2 bg-[#4CAF50]"></span>
              <span className="text-xs">
                Answered - You have answered the question.
              </span>
            </li>
            <li className="flex items-center mb-1.5">
              <span className="inline-block w-4 sm:w-3 h-3 rounded-full mr-2 bg-[#F44336]"></span>
              <span className="text-xs">
                Not answered - You have seen the question but not answered it.
              </span>
            </li>
            <li className="flex items-center mb-1.5">
              <span className="inline-block w-4 sm:w-3 h-3 rounded-full mr-2 bg-[#FF9800]"></span>

              <span className="text-xs">
                Currently attending - You are actively working on this question.
              </span>
            </li>
            <li className="flex items-center mb-1.5">
              <span className="inline-block w-4 sm:w-3 h-3 rounded-full mr-2 border border-[#ccc] bg-transparent"></span>
              <span className="text-xs">
                Not attempted yet - You haven't opened or answered this question
                yet.
              </span>
            </li>
          </ul>

          <div className="bg-[#FFF8E6] border border-[#FFE082] rounded-lg px-3 py-2 my-3 flex items-start">
            <span className="text-sm mr-2 text-[#21272C]">ⓘ</span>
            <p className="m-0 text-xs font-medium leading-[100%]">
              Once you answer a question and click Save & Next, your answer will
              be locked and cannot be changed later. Please review your
              selection carefully before clicking Save & Next.
            </p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-bold mb-2 leading-[20px]">
            3. Navigation Instructions:
          </h3>
          <ul className="list-none pl-0 mb-3 text-[#8790A1]">
            {[
              "Click on any question number from the left panel to jump directly to that question.",
              "If you wish to skip without answering, simply click Save & Next to move to the next question without saving any answer.",
              "Click Save & Next to save your selected answer and automatically move to the next question.",
            ].map((item, index) => (
              <li
                key={index}
                className="relative pl-3 mb-1.5 text-xs before:content-['•'] before:absolute before:left-0 before:text-[#666]"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-[#FFF8E6] border border-[#FFE082] rounded-lg px-3 py-2 my-3 flex items-start">
            <span className="text-sm mr-2 text-[#21272C]">ⓘ</span>
            <p className="m-0 text-xs font-medium leading-none">
              Note that your answer for the current question will not be saved,
              if you navigate to another question directly by clicking on a
              question number without saving the answer to the previous
              question.
            </p>
          </div>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-bold mb-2 leading-[20px]">
            4. Answering a Question:-
          </h3>
          <p className="mb-2 text-xs font-normal">
            Procedure for answering a multiple-choice (MCQ) type question:
          </p>
          <ul className="list-none pl-0 mb-3 text-[#8790A1]">
            {[
              "Select one answer from the options (A, B, C, D) displayed below the question by clicking on the circle (bubble) next to your chosen option.",
              "To deselect your selected answer, either click again on the same option or click the Clear Response button.",
              "To change your selected answer, simply click on the bubble next to a different option.",
              "To save your answer, you must click the Save & Next button.",
              "Once you click Save & Next, your answer will be locked and cannot be changed.",
            ].map((item, index) => (
              <li
                key={index}
                className="relative pl-3 mb-1.5 text-xs before:content-['•'] before:absolute before:left-0 before:text-[#666]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TermsAndCond;