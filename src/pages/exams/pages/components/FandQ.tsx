import React, { useState } from "react";
import frame from "../../../../../public/images/Frame.png";
import { PiMinusBold, PiPlusBold } from "react-icons/pi";

interface FaqItem {
  question: string;
  answer: string;
}

const FandQ: React.FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    console.log(index);
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqData: FaqItem[] = [
    {
      question: "What is Kasadara kal?",
      answer:
        "Kasadara kal is a mock test platform designed to help you practice and prepare for various government exams with full-length tests, quick quizzes, and detailed performance analysis.",
    },
    {
      question: "Which exams are covered on the app?",
      answer:
        "We currently cover TNPSC, UPSC, Banking, and other government exams. More exam categories are being added regularly.",
    },
    {
      question: "Are the mock tests based on the latest exam patterns?",
      answer:
        "Yes, all our mock tests are designed according to the latest exam patterns and syllabus updates from the respective examination boards.",
    },
    {
      question: "Is there a time limit for attempting the mock tests?",
      answer:
        "Yes, our mock tests simulate the actual exam environment, including time constraints, to help you practice time management skills.",
    },
    {
      question: "Will I get detailed solutions after completing a test?",
      answer:
        "Yes, you will receive detailed solutions and explanations for all questions immediately after completing a test.",
    },
  ];

  return (
    <React.Fragment>
      <h2 className=" font-zoho text-2xl mt-8 font-bold leading-[100%] tracking-[-0.03em] text-[#333] mb-3">
        Frequently asked questions
      </h2>
      <div className="w-full mx-auto  font-['Segoe_UI',sans-serif] mt-5 flex">
        <div className="flex-1 max-w-[65%]">
          <div className="flex flex-col gap-[10px]">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-[#e0e0e0] rounded-2xl overflow-hidden bg-white mb-[10px] leading-[1.4]"
              >
                <div
                  className={`flex justify-between items-center p-3 cursor-pointer bg-white`}
                  onClick={() => toggleQuestion(index)}
                >
                  <h3
                    className={`text-md font-medium m-0 ${
                      openQuestion === index ? "text-[#2BBC7C]" : ""
                    }`}
                  >
                    {faq.question}
                  </h3>
                  <span className="text-[19px] text-[#3D3D3D] font-light">
                    {openQuestion === index ? <PiMinusBold /> : <PiPlusBold />}
                  </span>
                </div>

                {openQuestion === index && (
                  <div className="px-5 pb-[15px]">
                    <p className="m-0 text-[#555] text-base leading-[1.6]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 max-w-[30%] flex flex-col items-center border border-[#e0e0e0] rounded-3xl p-5 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.05)] h-fit self-start ml-15">
          <div className="mb-5 w-[150px] h-[150px]">
            <img src={frame} alt="FAQ" className="w-full h-auto" />
          </div>
          <div className="text-center">
            <p className="text-[#555] text-[15px] leading-[22px] font-normal mb-5">
              Your success in government exams starts here. Access
              expert-designed mock tests, instant results, and detailed
              performance analysis all in one powerful platform built for your
              journey.
            </p>
            <a
              href="mailto:support@kasadarakal.com"
              className="inline-block bg-[#2BBC7C] text-white py-3 px-6 rounded-2xl no-underline font-medium text-base transition-colors duration-300 w-[80%] text-center hover:bg-[#249d69]"
            >
              Shoot a Direct Mail
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FandQ;
