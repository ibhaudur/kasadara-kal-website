import { useState } from "react";
import QuestionsandOptions from "./component/QuestionsandOptions";
import Validator from "./component/Validator";
import useApiCall from "../../../../hooks/useApiCall";
import { getAnswerReview } from "../../../../service/apiUrls";
import { useParams } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const AnswerReview = () => {
  const [language, setLanguage] = useState("English");
  const { id } = useParams();
  const { data } = useApiCall({
    key: `${getAnswerReview}/${id}?language=${
      language === "English" ? "en" : "ta"
    }`,
    url: `${getAnswerReview}/${id}?language=${
      language === "English" ? "en" : "ta"
    }`,
    method: "get",
  });

  const details = data?.data;
  const [currentQuestion, setCurrentQuestion] = useState(0);

  if (!details) return null;

  const { questions, summary } = details;
  return (
    <section className="bg-white">
      <p className="flex items-center gap-2 text-[13px] text-[#8790A1] px-4 py-3">
        <span>Exams</span> <FaChevronRight />
        <span>{details?.exam_name}</span> <FaChevronRight />
        <span>Result</span> <FaChevronRight />
        <span className="text-[#2BBC7C]">Answer Review</span>
      </p>
      <div className="flex">
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold px-4 py-3">Answer Review</h2>

            <select
              onChange={(e) => setLanguage(e.target.value)}
              className="border-none hidden cursor-pointer outline-none me-2 p-2"
              value={language}
            >
              <option value="English">English</option>
              <option value="Tamil">Tamil</option>
            </select>
          </div>
          <QuestionsandOptions
            question={questions[currentQuestion]}
            totalQuestions={questions.length}
            currentQuestion={currentQuestion}
            handlePrev={() =>
              setCurrentQuestion((prev) => Math.max(0, prev - 1))
            }
            handleNext={() =>
              setCurrentQuestion((prev) =>
                Math.min(questions.length - 1, prev + 1)
              )
            }
          />
        </div>

        {/* Right Section */}
        <Validator
          questions={questions}
          currentQuestion={currentQuestion}
          handleSetCurrentQuestion={setCurrentQuestion}
          summary={summary}
        />
      </div>
    </section>
  );
};

export default AnswerReview;
