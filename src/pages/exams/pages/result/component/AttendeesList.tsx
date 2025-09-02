import React from "react";
// import Pagination from "../../../../../component/UI/Pagination";

interface Attendee {
  candidate_name?: string;
  exam_name?: string;
  marks?: string;
  percentage?: string;
  rank?: number;
  obtained_marks?: string;
  total_marks?: string;
  answered?: number;
  correct_answered?: number;
  start_time?: string;
  end_time?: string;
}

interface AttendeesListProps {
  list: Attendee[];
}

const AttendeesList: React.FC<AttendeesListProps> = ({ list }) => {
  return (
    <div className="">
      <p className="text-3xl font-semibold py-5 text-center">
        Attendees marks & ranks
      </p>
      <small className="text-[#8790A1]">
        Total Candidates: <b>{list?.length ?? 0}</b>
      </small>
      <div className="overflow-x-auto rounded-2xl bg-white shadow">
        <table className="w-full border-collapse text-[14px] text-[#172B4D]">
          <thead className="bg-[#F8F9F9]">
            <tr>
              <th className="border-r border-[#E5E5E5] px-4 py-3 text-left font-semibold">
                Candidate
              </th>
              <th className="border-r border-[#E5E5E5] px-4 py-3 text-left font-semibold">
                Exam
              </th>
              <th className="border-r border-[#E5E5E5] px-4 py-3 text-left font-semibold">
                Marks
              </th>
              <th className="border-r border-[#E5E5E5] px-4 py-3 text-left font-semibold">
                Percentage (%)
              </th>
              <th className="px-4 py-3 text-left font-semibold">Rank</th>
            </tr>
          </thead>
          <tbody>
            {list?.map((row, idx) => (
              <tr
                key={idx}
                className={idx % 2 === 0 ? "bg-white" : "bg-[#F8F9F9]"}
              >
                <td className="border-r border-[#E5E5E5] px-4 py-3">
                  {row?.candidate_name ?? "-"}
                </td>
                <td className="border-r border-[#E5E5E5] px-4 py-3">
                  {row?.exam_name ?? "-"}
                </td>
                <td className="border-r border-[#E5E5E5] px-4 py-3">
                  {row?.marks
                    ? `${parseInt(row?.marks.split("/")[0] ?? "0")}/${parseInt(
                        row?.marks.split("/")[1] ?? "0"
                      )}`
                    : `${parseInt(row?.obtained_marks ?? "0")}/${parseInt(
                        row?.total_marks ?? "0"
                      )}`}
                </td>
                <td className="border-r border-[#E5E5E5] px-4 py-3">
                  {row?.percentage ?? "-"}
                </td>
                <td className="px-4 py-3">{row?.rank ?? "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* <div className="flex justify-end">
        <Pagination
          totalPages={10}
          onPageChange={(page) => console.log("Page:", page)}
        />
      </div> */}
    </div>
  );
};

export default AttendeesList;
