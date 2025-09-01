import { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Modal from "../../../../component/Modal/Modal";
import { formatMinutesToHours } from "../../../../utils/index.utils";

const AttendExam = () => {
  const { id } = useParams<{ id: string }>();
  const [agreed, setAgreed] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation().state;
  const [selectedLang, setSelectedLang] = useState<string>("Tamil");

  return (
    <section className="bg-white p-4">
      <Modal
        title="Select your preferred language"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <>
          <div className="flex gap-4">
            <label
              className={`flex flex-grow rounded-2xl p-3 min-w-42 items-center gap-2 cursor-pointer ${
                selectedLang === "Tamil" ? "bg-[#D6FFE7]" : "bg-[#F8F8F8]"
              }`}
            >
              <input
                type="radio"
                name="language"
                value="Tamil"
                checked={selectedLang === "Tamil"}
                onChange={() => setSelectedLang("Tamil")}
                className="w-5 h-5 accent-[#2C8C53] cursor-pointer"
              />
              <span className="text-base">Tamil</span>
            </label>
            <label
              className={`flex flex-grow rounded-2xl p-3 min-w-42 items-center gap-2 cursor-pointer ${
                selectedLang === "English" ? "bg-[#D6FFE7]" : "bg-[#F8F8F8]"
              }`}
            >
              <input
                type="radio"
                name="language"
                value="English"
                checked={selectedLang === "English"}
                onChange={() => setSelectedLang("English")}
                className="w-5 h-5 accent-[#2C8C53] cursor-pointer"
              />
              <span className="text-base">English</span>
            </label>
          </div>
          <div className="mt-6">
            <button
              onClick={() =>
                navigate(`/exams/take-exam/${id}`, {
                  state: { language: selectedLang },
                })
              }
              className="px-6 flex items-center gap-3 cursor-pointer justify-center py-2 w-full bg-[#2BBC7C] text-white rounded-3xl"
            >
              Start the exam <HiArrowNarrowRight />
            </button>
          </div>
        </>
      </Modal>
      <h5 className="text-3xl font-semibold">{location?.exam_name}</h5>
      <div className="flex gap-3 mt-3">
        <p className="bg-[#F8F8F8] text-sm rounded-xl p-3">
          Duration: <b>{formatMinutesToHours(Number(location?.duration))}</b>
        </p>
        <p className="bg-[#F8F8F8] text-sm rounded-xl p-3">
          Total marks: <b>{location?.total_marks} marks</b>
        </p>
      </div>
      <h6 className="text-[20px] font-semibold mt-4">General Instructions: </h6>
      <ul className="list-decimal mb-6 p-4 text-[15px]">
        <li className="mb-3">
          The clock will be set at the server. The countdown timer at the top
          right corner of screen will display the remaining time available for
          you to complete the examination. When the timer reaches zero, the
          examination will end by itself. You need not terminate the examination
          or submit your paper.
        </li>
        <li className="mb-3">
          <div>
            <b>
              The Question Palette displayed on the right side of screen will
              show the status of each question using one of the following
              symbols:{" "}
            </b>
          </div>
        </li>
        <li className="mb-3">
          <div>
            <b>Read the following instructions carefully.</b>
            <ul className="list-decimal p-3">
              <li className="mb-2">
                The Test has {location?.total_questions} questions.
              </li>
              <li className="mb-2">
                Each question has 4 options, only one is correct.
              </li>
              <li className="mb-2">
                You have to finish the test in{" "}
                {formatMinutesToHours(Number(location?.duration))}.
              </li>
              <li className="mb-2">
                You will be awarded 1 mark for each correct answer and 1 mark
                will be deducted for each wrong answer.
              </li>
              <li className="mb-2">
                There is no penalty for questions not attempted.
              </li>
              <li className="mb-2">
                Once you start the test, you cannot reattempt it. Make sure to
                complete the test before submitting or closing the browser.
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <div
        className="fixed bottom-0 left-0 w-full bg-white p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 z-10"
        style={{ boxShadow: "0px 0px 4px 0px #00000014" }}
      >
        <label className="flex items-center gap-2 text-sm flex-1">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="accent-[#3253EB] w-4 h-4 cursor-pointer"
          />
          I have read all the instructions carefully and have understood them. I
          agree not to cheat or use unfair means in this examination.
        </label>

        <div className="flex justify-end sm:justify-start">
          <button
            className={`px-6 py-2 flex gap-3 cursor-pointer items-center bg-[#2BBC7C] text-white rounded-3xl transition-opacity ${
              !agreed ? "bg-[#CED8D4] cursor-not-allowed" : ""
            }`}
            disabled={!agreed}
            onClick={() => setIsOpen(true)}
          >
            Ready to Start <HiArrowNarrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AttendExam;
