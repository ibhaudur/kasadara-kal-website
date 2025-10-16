export interface AuthLogin {
  email: string;
  password: string;
  role: string;
}
export interface UserDetails extends AuthLogin {
  _id?: string;
  name: string | undefined;
}

export interface ExamDetails {
  exam_id?: string;
  exam_name: string;
  total_marks: number;
  duration: number;
  total_questions: number;
  candidateCount?: number;
  status?: "draft" | "published" | "scheduled" | string; // extend as needed
  exam_type?: "free" | "paid" | string;
  cost?: string;
  discount_cost?: string;
  price?: string;
  valid_until?: string;
  published_on?: string;
  paid_status?: string;
  answered?: number;
  user_rank?: number;
  total_unique_attendees?: number;
}
export interface ExamFormValues {
  exam_name: string;
  status: string;
  examType: string;
  duration: string;
  totalmarks: string;
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
  total_marks: string;
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
export interface Credentials {
  name: string;
  email: string;
  newPassword: string;
  confirmPassword: string;
  otp: string;
}
