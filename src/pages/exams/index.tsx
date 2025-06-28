import React from "react";
import Banner from "./components/Banner";
import TestList from "./components/TestList";

const Exams: React.FC = () => {
  return (
    <section>
      <Banner />
      <div className="p-4">
        <TestList />
      </div>
    </section>
  );
};

export default Exams;
