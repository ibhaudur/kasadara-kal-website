import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoadingSpinner from "../component/LoadingSpinner";
import Layout from "../layout";

const Exams = lazy(() => import("../pages/exams"));
const Dashboard = lazy(() => import("../pages/dashboard"));
const Attended = lazy(() => import("../pages/attended"));
const BuyExam = lazy(() => import("../pages/exams/pages/buyExam"));

const AllRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate to="exams" />} />
            <Route path="exams" element={<Exams />} />
            <Route path="exams/buy/:id" element={<BuyExam />} />
            <Route path="paid-attended" element={<Attended />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AllRoutes;
