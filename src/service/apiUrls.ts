export const postLogin = "customer/login";
export const postSignUp = "customer/signup";
export const postOtp = "customer/verify-otp";
export const postPassword = "customer/set-password";

export const getAllExams = "customer_exam/exam-list";
export const getExamById = "customer_exam/exam-detail"; //id
export const getExamQuestions = "customer_exam/exam_questions"; //id?language=en
export const postSubmitAnswer = "customer_exam/submit";
export const getExamAttendies = "customer_exam/exam-attendees"; //id
export const getExamReview = "customer_exam/exam-review"; //id
export const postInitiatePayment = "customer_exam/initiate-payment"; //id
export const postConfirmPayment = "customer_exam/confirm-payment";
export const getDashboardDetails = "customer_exam/customer-dashboard";
export const getAnswerReview = "customer_exam/answer-review"; //id

export const getPaymentStatus = "customer_exam/payment/callback?transaction_id=";
