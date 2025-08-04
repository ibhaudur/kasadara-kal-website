import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import ExamIndicator from "./components/ExamIndicator";
import { usePrompt } from "../../../../hooks/usePrompt";
import QuestionsandOptions from "./components/QuestionsandOptions";

const TakeExam = () => {
  const location = useLocation();
  const language = location.state?.language;

  const listenersAttached = useRef(false);

  function handleKeyDown(e: KeyboardEvent) {
    const key = e.key.toLowerCase();
    if (
      key === "f5" ||
      (e.ctrlKey && key === "r") ||
      (e.metaKey && key === "r")
    ) {
      e.preventDefault();
      console.log("Reload key pressed, modal shown");
    }
  }

  function handleBeforeUnload(event: BeforeUnloadEvent) {
    console.log("beforeunload event fired");
    event.preventDefault();
    event.returnValue =
      "Are you sure you want to leave the exam? All progress will be lost.";
  }

  useEffect(() => {
    if (!listenersAttached.current) {
      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("beforeunload", handleBeforeUnload);
      listenersAttached.current = true;
      console.log("Listeners attached");
    }
    return () => {
      if (listenersAttached.current) {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("beforeunload", handleBeforeUnload);
        listenersAttached.current = false;
        console.log("Listeners detached");
      }
    };
  }, []);

  // Warn on React Router navigation
  usePrompt("Are you sure you want to leave the exam?", true);

  return (
    <section>
      <ExamIndicator />
      <div className="grid grid-cols-6">
        <QuestionsandOptions language={language} />
      </div>
    </section>
  );
};

export default TakeExam;
