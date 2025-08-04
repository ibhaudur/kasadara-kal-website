import ScreenType from "../../../../../component/ScreenType";

const ExamIndicator = () => {
  return (
    <div
      className="bg-white w-full flex justify-between items-center border-b border-b-[#EBEBEB] p-3 sticky top-0"
      style={{ zIndex: "9999" }}
    >
      <h4 className="text-xl font-semibold">Group 4 Exam - Quick Test - 4 </h4>
      <div>
        <ScreenType />
      </div>
    </div>
  );
};

export default ExamIndicator;
