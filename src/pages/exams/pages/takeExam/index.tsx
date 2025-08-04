import { useLocation } from "react-router-dom";
import ExamIndicator from "./components/ExamIndicator";

const TakeExam = () => {
  const location = useLocation();
  const language = location.state?.language;

  return (
    <section>
      <ExamIndicator />
      Language: {language}
    </section>
  );
};

export default TakeExam;
