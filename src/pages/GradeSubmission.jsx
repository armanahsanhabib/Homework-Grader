/* eslint-disable react/prop-types */
import { useState } from "react";
import { BiSolidErrorAlt } from "react-icons/bi";
import { BsCalculator } from "react-icons/bs";
import { toast } from "react-toastify";
import Header from "../components/common/Header";
import { calculateCGPA, calculateGrade } from "../utils/gradingFunctions";

const GradeSubmission = (props) => {
  const [formData, setFormData] = useState({
    roll: "",
    name: "",
    math: "",
    science: "",
    english: "",
    history: "",
    geography: "",
    grade: "",
    cgpa: 0,
  });
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setShowAnalysis(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { math, science, history, english, geography } = formData;

    const cgpa = calculateCGPA(math, science, english, history, geography);
    let grade = "";

    if (cgpa == 0) {
      grade = "Fail";
    } else if (cgpa <= 1.5) {
      grade = "Poor";
    } else if (cgpa <= 2.5) {
      grade = "Average";
    } else if (cgpa <= 3.5) {
      grade = "Good";
    } else {
      grade = "Excellent";
    }

    setFormData({ ...formData, cgpa, grade });
    setShowAnalysis(true);
  };

  const handleSaveResult = () => {
    const {
      name,
      roll,
      math,
      science,
      english,
      history,
      geography,
      grade,
      cgpa,
    } = formData;

    const newResult = {
      name,
      roll,
      math,
      science,
      english,
      history,
      geography,
      grade,
      cgpa,
    };

    const existingResultSheet =
      JSON.parse(localStorage.getItem("gradeSheet")) || [];

    const updatedResultSheet = [...existingResultSheet, newResult];

    props.setGradeSheet(updatedResultSheet);

    localStorage.setItem("gradeSheet", JSON.stringify(updatedResultSheet));

    toast.success("Grade Saved Successfully!", {
      position: "bottom-center",
      autoClose: 3000,
    });
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
            <div className="students_info grid grid-cols-3 gap-5">
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
            <div className="max-w-md">
              <table className="w-full border-collapse border border-gray-200">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-200 px-4 py-2">
                      Subject Name
                    </th>
                    <th className="border border-gray-200 px-4 py-2">Marks</th>
                  </tr>
                </thead>
                <tbody>
                  {["math", "science", "english", "history", "geography"].map(
                    (subject) => (
                      <tr key={subject} className="bg-white">
                        <td className="border border-gray-200 px-4 py-2 capitalize">
                          <label htmlFor={subject}>{subject}</label>
                        </td>
                        <td className="border border-gray-200 px-4 py-2">
                          <input
                            type="number"
                            name={subject}
                            id={subject}
                            value={formData[subject]}
                            onChange={handleChange}
                            required
                            className="w-full rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring focus:ring-blue-200"
                          />
                        </td>
                      </tr>
                    ),
                  )}
                </tbody>
              </table>
            </div>
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
          {!showAnalysis ||
          !formData.name ||
          !formData.roll ||
          !formData.math ||
          !formData.science ||
          !formData.english ||
          !formData.history ||
          !formData.geography ? (
            <div className="flex w-full justify-center xl:mt-8">
              <div className="item flex h-max flex-col items-center gap-3 rounded-lg bg-[#f9e5ea] p-8">
                <div className="icon">
                  <BiSolidErrorAlt className="text-5xl text-[#ef2b58]" />
                </div>
                <div className="text flex flex-col gap-2 text-center">
                  <h3 className="font-bold xl:text-xl">No Data to Show</h3>
                  <p className="text-sm text-gray-600 xl:text-base">
                    CGPA will show once calculated Grade!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-rose-600">
                Students Information:
              </h3>
              <table className="border-collapse border border-gray-300">
                <tr>
                  <th className="w-[200px] border border-gray-300 p-2 text-start">
                    Student Roll:
                  </th>
                  <td className="border border-gray-300 p-2">
                    {formData.roll}
                  </td>
                </tr>
                <tr>
                  <th className="w-[200px] border border-gray-300 p-2 text-start">
                    Student Name:
                  </th>
                  <td className="border border-gray-300 p-2">
                    {formData.name}
                  </td>
                </tr>
              </table>
              <h3 className="mt-3 font-semibold text-rose-600">
                Subject Wise Grade Sheet:
              </h3>
              <table>
                <tr>
                  <th className="w-[200px] border border-gray-300 p-2">
                    Subject
                  </th>
                  <th className="border border-gray-300 p-2">Marks</th>
                  <th className="border border-gray-300 p-2">Grade</th>
                </tr>
                <tr>
                  <th className="w-[200px] border border-gray-300 p-2 text-start">
                    Math:
                  </th>
                  <td className="border border-gray-300 p-2 text-center">
                    {formData.math}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {calculateGrade(formData.math)}
                  </td>
                </tr>
                <tr>
                  <th className="w-[200px] border border-gray-300 p-2 text-start">
                    Science:
                  </th>
                  <td className="border border-gray-300 p-2 text-center">
                    {formData.science}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {calculateGrade(formData.science)}
                  </td>
                </tr>
                <tr>
                  <th className="w-[200px] border border-gray-300 p-2 text-start">
                    English:
                  </th>
                  <td className="border border-gray-300 p-2 text-center">
                    {formData.english}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {calculateGrade(formData.english)}
                  </td>
                </tr>
                <tr>
                  <th className="w-[200px] border border-gray-300 p-2 text-start">
                    History:
                  </th>
                  <td className="border border-gray-300 p-2 text-center">
                    {formData.history}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {calculateGrade(formData.history)}
                  </td>
                </tr>
                <tr>
                  <th className="w-[200px] border border-gray-300 p-2 text-start">
                    Geography:
                  </th>
                  <td className="border border-gray-300 p-2 text-center">
                    {formData.geography}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {calculateGrade(formData.geography)}
                  </td>
                </tr>
              </table>
              <h3 className="mt-3 font-semibold text-rose-600">
                CGPA and Remarks:
              </h3>
              <table>
                <tr>
                  <th className="w-[200px] border border-gray-300 p-2 text-start">
                    CGPA:
                  </th>
                  <td className="border border-gray-300 p-2">
                    {formData.cgpa}
                  </td>
                </tr>
                <tr>
                  <th className="w-[200px] border border-gray-300 p-2 text-start">
                    Remarks:
                  </th>
                  <td className="border border-gray-300 p-2">
                    {formData.grade}
                  </td>
                </tr>
              </table>
              <p className="text-sm text-gray-600">* Representational Only!</p>
              <button
                type="button"
                className="mx-auto mt-3 w-max cursor-pointer rounded-lg bg-emerald-500 px-8 py-3 font-semibold text-white hover:bg-emerald-600"
                onClick={handleSaveResult}
              >
                Save the Result
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default GradeSubmission;
