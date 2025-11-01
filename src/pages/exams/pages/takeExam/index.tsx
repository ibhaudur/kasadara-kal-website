import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ExamIndicator from "./components/ExamIndicator";
import { usePrompt } from "../../../../hooks/usePrompt";
import QuestionsandOptions from "./components/QuestionsandOptions";
import Validator from "./components/Validator";
import useApiCall from "../../../../hooks/useApiCall";
import {
  getExamQuestions,
  postSubmitAnswer,
} from "../../../../service/apiUrls";
import moment from "moment"; // ✅ for time formatting
import { ApiError, ApiResponse } from "../../../../types/apiservice.types";
import { toast } from "react-toastify";

const TakeExam = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<string>("English");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data } = useApiCall({
    key: `${getExamQuestions}/${id}?language=${
      language === "English" ? "en" : "ta"
    }`,
    url: `${getExamQuestions}/${id}?language=${
      language === "English" ? "en" : "ta"
    }`,
    method: "get",
  });
  const { mutate } = useApiCall({
    key: postSubmitAnswer,
    url: postSubmitAnswer,
    method: "post",
  });
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>([]);
  const [markedQuestions, setmarkedQuestions] = useState<number[]>([]);
  const [visitedQuestions, setVisitedQuestions] = useState<number[]>([0]);
  const [startTime, setStartTime] = useState<string>("");
  useEffect(() => {
    if (data?.questions?.length && answers.length === 0) {
      // Only initialize answers if they haven't been set yet
      setAnswers(Array(data.questions.length).fill(null));
    }
  }, [data?.questions, answers.length]);
  useEffect(() => {
    const now = moment().format("YYYY-MM-DD HH:mm:ss");
    setStartTime(now);
  }, []);

  const handleSetAnswer = (answer: string | null, index: number) => {
    setAnswers((prev) => {
      const updated = [...prev];
      updated[index] = answer;
      return updated;
    });
  };

  const handletotal_marksQuestion = (index: number) => {
    setmarkedQuestions((prev) =>
      prev.includes(index) ? prev.filter((q) => q !== index) : [...prev, index]
    );
  };

  const handleSetCurrentQuestion = (index: number) => {
    setCurrentQuestion(index);
    setVisitedQuestions((prev) =>
      prev.includes(index) ? prev : [...prev, index]
    );
  };

  const listenersAttached = useRef(false);

  function handleKeyDown(e: KeyboardEvent) {
    const key = e.key.toLowerCase();
    if (
      key === "f5" ||
      (e.ctrlKey && key === "r") ||
      (e.metaKey && key === "r")
    ) {
      e.preventDefault();
    }
  }

  function handleBeforeUnload(event: BeforeUnloadEvent) {
    event.preventDefault();
    event.returnValue =
      "Are you sure you want to leave the exam? All progress will be lost.";
  }

  useEffect(() => {
    if (!listenersAttached.current) {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("beforeunload", handleBeforeUnload);
      listenersAttached.current = true;
    }
    return () => {
      if (listenersAttached.current) {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("beforeunload", handleBeforeUnload);
        listenersAttached.current = false;
      }
    };
  }, []);

  usePrompt("Are you sure you want to leave the exam?", true);

  const formattedAnswers = answers.map((ans, index) => ({
    question_id: data?.questions[index]?.question_id,
    answer: ans,
  }));

  const handleSubmitExam = () => {
    const end = moment().format("YYYY-MM-DD HH:mm:ss");
    const payload = {
      exam_id: id,
      duration: data?.duration,
      start_time: startTime,
      end_time: end,
      answers: formattedAnswers,
    };
    mutate(payload, {
      onSuccess: (res: ApiResponse<any>) => {
        toast.success(res?.message);
        navigate(`/exams/result/${id}`);
      },
      onError: (err: ApiError) => {
        toast.error(err.response?.data?.message);
        setIsModalOpen(false);
      },
    });
  };

  return (
    <section className="bg-white h-screen">
      <ExamIndicator handleSubmitExam={handleSubmitExam} />
      <div className="flex">
        <QuestionsandOptions
          setAnswer={(ans) => handleSetAnswer(ans, currentQuestion)}
          answer={answers[currentQuestion]}
          setCurrentQuestion={handleSetCurrentQuestion}
          currentQuestion={currentQuestion}
          markedQuestions={markedQuestions}
          ontotal_marks={() => handletotal_marksQuestion(currentQuestion)}
          questions={data?.questions}
          setLanguage={setLanguage}
          language={language}
          setIsModalOpen={setIsModalOpen}
        />
        <Validator
          answers={answers}
          markedQuestions={markedQuestions}
          visitedQuestions={visitedQuestions}
          currentQuestion={currentQuestion}
          handleSetCurrentQuestion={handleSetCurrentQuestion}
          handleSubmitExam={handleSubmitExam}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </section>
  );
};

export default TakeExam;
