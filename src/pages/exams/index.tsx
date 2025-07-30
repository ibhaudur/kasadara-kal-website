import React from "react";
import Banner from "./components/Banner";
import TestList from "./components/TestList";
import Adscarousel from"./components/Adscarousel";
const Exams: React.FC = () => {
  return (
    <section>
      <Banner />
      <Adscarousel />
      <div className="p-4">
        <TestList />
      </div>
    </section>
  );
};

export default Exams;
