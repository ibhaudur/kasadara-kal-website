export interface AuthLogin {
  emailId: string;
  password: string;
}


export interface ExamDetails {
  examName: string;
  mark: string;
  hour: string;
  questionCount: string;
  candidateCount: number;
  status: "draft" | "published" | "scheduled" | string; // extend as needed
  type: "free" | "paid" | string;
  price?: string;
}
export interface ExamFormValues {
  examName: string;
  status: string;
  examType: string;
  duration: string;
  totalMarks: string;
  cost: string;
  discountCost: string;
  examStartDate: string;
  examStartTime: string;
  validityDate: string;
  validityTime: string;
}
export interface Question {
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
  };
  answer: string;
  description: string;
}
export interface QuestionItem {
  id: number;
  mark: string;
  english: Question;
  tamil: Question;
}
export interface QuestionFormProps {
  select: number;
  language: "english" | "tamil";
  questions: QuestionItem[];
  handleChange: (
    index: number,
    language: "english" | "tamil",
    field: keyof Question,
    value: string,
    optionKey?: keyof Question["options"]
  ) => void;
}
export interface StepsProps {
  questions: QuestionItem[];
  setSelect: (index: number) => void;
  select: number;
}
