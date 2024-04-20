/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiSolidErrorAlt } from "react-icons/bi";
import { BsCalculator } from "react-icons/bs";
import MarksSubmissionTable from "../components/GradeSubmission.jsx/MarksSubmissionTable";
import Header from "../components/common/Header";

const GradeSubmission = (props) => {
  const [formData, setFormData] = useState({
    roll: "",
    name: "",
  });
  const [marks, setMarks] = useState({
    math: "",
    science: "",
    english: "",
    history: "",
    geography: "",
  });
  const [grade, setGrade] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMarks(Math.floor(Math.random() * 10) + 1);
    if (marks <= 5) {
      setGrade("Poor");
    } else if (marks <= 7) {
      setGrade("Good");
    } else {
      setGrade("Excellent");
    }
  };

  return (
    <div className="overflow-hidden p-3 xl:w-[calc(100%-300px)]">
      <Header
        title="Grade Submission"
        showSidebar={props.showSidebar}
        setShowSidebar={props.setShowSidebar}
      />
      <main className="grid h-[calc(100%-61px)] gap-5 overflow-auto sm:grid-cols-3">
        <div className="left h-full p-3 sm:col-span-2">
          <form onSubmit={handleSubmit}>
            <h3 className="mb-3 text-lg font-bold text-[#6151fb]">
              Student information
            </h3>
            <div className="studnets_info grid grid-cols-3 gap-5">
              <div className="">
                <label
                  htmlFor="roll"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Students Roll
                </label>
                <input
                  type="number"
                  id="roll"
                  name="roll"
                  onChange={handleChange}
                  value={formData.roll}
                  className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter roll..."
                  required
                />
              </div>
              <div className="col-span-2">
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-gray-900"
                >
                  Students Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  value={formData.name}
                  className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter name..."
                  required
                />
              </div>
            </div>
            <h3 className="my-3 text-lg font-bold text-[#6151fb]">
              Submit Grades
            </h3>
            <MarksSubmissionTable marks={marks} setMarks={setMarks} />
            <button
              type="submit"
              value="Analyze Homework"
              className="mt-8 flex cursor-pointer items-center justify-center gap-2 rounded bg-[#c64bf8] px-5 py-2 font-semibold text-white transition-all hover:bg-[#b132e4]"
            >
              <BsCalculator className="text-xl" /> <span>Calculate Grade</span>{" "}
            </button>
          </form>
        </div>
        <div className="right col-span-1 bg-white p-3 sm:border-l">
          <h2 className="my-3 border-b pb-2 text-lg font-bold text-[#6151fb]">
            Grade Analysis
          </h2>
          {!grade ? (
            <div className="mt-8 flex w-full justify-center">
              <div className="item flex flex-col items-center gap-3 rounded-lg bg-[#f9e5ea] p-8">
                <div className="icon">
                  <BiSolidErrorAlt className="text-5xl text-[#ef2b58]" />
                </div>
                <div className="text flex flex-col gap-2 text-center">
                  <h3 className="text-xl font-bold">Grades not available!</h3>
                  <p className="text-gray-600">
                    Grades will show once grade calculated!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="item">
                <span className="inline-block w-[150px] font-semibold">
                  Name of Student:
                </span>
                <span>{formData.name}</span>
              </div>
              <div className="item">
                <span className="inline-block w-[150px] font-semibold">
                  Roll No:
                </span>
                <span>{formData.roll}</span>
              </div>
              <div className="item">
                <span className="inline-block w-[150px] font-semibold">
                  Obtained Marks:
                </span>
                <span>
                  <span className="font-bold text-[#6151fb]">{marks}</span> out
                  of <span>10</span>
                </span>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default GradeSubmission;
