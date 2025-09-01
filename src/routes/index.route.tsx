import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoadingSpinner from "../component/LoadingSpinner";
import Layout from "../layout";
import AttendExam from "../pages/exams/pages/attendExam";
import TakeExam from "../pages/exams/pages/takeExam";
import ProtectedRoute from "../component/ProtectedRoutes";
import PrivacyPolicy from "../pages/privacy-policy";
import RefundCancellationPolicy from "../pages/refund-cancelation";
import TermsConditions from "../pages/terms-condition";
import ScrollToTop from "../component/ScrollToTop";
import Result from "../pages/exams/pages/result";
import AnswerReview from "../pages/exams/pages/answer-review";

const Exams = lazy(() => import("../pages/exams"));
const Dashboard = lazy(() => import("../pages/dashboard"));
const Attended = lazy(() => import("../pages/attended"));
const BuyExam = lazy(() => import("../pages/exams/pages/buyExam"));

const AllRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="exams" />} />
            <Route path="exams" element={<Exams />} />

            {/* 🔒 Wrap protected routes */}
            <Route
              path="exams/buy/:id"
              element={
                <ProtectedRoute>
                  <BuyExam />
                </ProtectedRoute>
              }
            />
            <Route
              path="exams/attend/:id"
              element={
                <ProtectedRoute>
                  <AttendExam />
                </ProtectedRoute>
              }
            />
            <Route
              path="exams/take-exam/:id"
              element={
                <ProtectedRoute>
                  <TakeExam />
                </ProtectedRoute>
              }
            />
            <Route
              path="exams/result/:id"
              element={
                <ProtectedRoute>
                  <Result />
                </ProtectedRoute>
              }
            />
            <Route
              path="exams/answer-review/:id"
              element={
                <ProtectedRoute>
                  <AnswerReview />
                </ProtectedRoute>
              }
            />
            <Route
              path="paid-attended"
              element={
                <ProtectedRoute>
                  <Attended />
                </ProtectedRoute>
              }
            />
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-and-condition" element={<TermsConditions />} />
            <Route
              path="refund-and-cancellation"
              element={<RefundCancellationPolicy />}
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AllRoutes;
