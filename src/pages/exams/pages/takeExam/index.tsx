import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import ExamIndicator from "./components/ExamIndicator";
import { usePrompt } from "../../../../hooks/usePrompt";
import QuestionsandOptions from "./components/QuestionsandOptions";
import Validator from "./components/Validator";
import { questions } from "./utils/index.utils";

const TakeExam = () => {
  const location = useLocation();
  const language = location.state?.language;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<(string | null)[]>(
    Array(questions.length).fill(null)
  );
  const [markedQuestions, setmarkedQuestions] = useState<number[]>([]);
  const [visitedQuestions, setVisitedQuestions] = useState<number[]>([0]); // start with Q1 visited

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

  // Ensure we track visited questions
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

  // Warn on React Router navigation
  usePrompt("Are you sure you want to leave the exam?", true);
  console.log(markedQuestions);
  console.log(answers, " answers");
  return (
    <section className="bg-white h-screen">
      <ExamIndicator />
      <div className="flex">
        <QuestionsandOptions
          language={language}
          setAnswer={(ans) => handleSetAnswer(ans, currentQuestion)}
          answer={answers[currentQuestion]}
          setCurrentQuestion={handleSetCurrentQuestion} // now tracks visited
          currentQuestion={currentQuestion}
          markedQuestions={markedQuestions}
          ontotal_marks={() => handletotal_marksQuestion(currentQuestion)}
        />
        <Validator
          answers={answers}
          markedQuestions={markedQuestions}
          visitedQuestions={visitedQuestions} // pass visited
          currentQuestion={currentQuestion}
          handleSetCurrentQuestion={handleSetCurrentQuestion}
        />
      </div>
    </section>
  );
};

export default TakeExam;
