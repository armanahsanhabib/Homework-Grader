/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BiSolidErrorAlt } from "react-icons/bi";
import { IoCloudUpload } from "react-icons/io5";
import { MdDelete, MdOutlineDocumentScanner } from "react-icons/md";
import { toast } from "react-toastify";
import Header from "../components/common/Header";

const HomeworkSubmission = (props) => {
  const [homeworkFile, setHomeworkFile] = useState(null);
  const [formData, setFormData] = useState({
    roll: "",
    name: "",
  });
  const [marks, setMarks] = useState("");
  const [grade, setGrade] = useState("");
  const [showAnalysis, setShowAnalysis] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setShowAnalysis(false);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setHomeworkFile(file);
    }
  };

  const handleFileRemove = () => {
    const fileInput = document.getElementById("homework_file");
    fileInput.value = null;

    setHomeworkFile(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newMarks = Math.floor(Math.random() * 10) + 1;
    await setMarks(newMarks);
    setShowAnalysis(true);
  };

  useEffect(() => {
    if (marks <= 5) {
      setGrade("Poor");
    } else if (marks <= 7) {
      setGrade("Good");
    } else {
      setGrade("Excellent");
    }
  }, [marks]);

  const handleSaveResult = () => {
    const newResult = {
      name: formData.name,
      roll: formData.roll,
      marks: marks,
      grade: grade,
    };

    const existingResultSheet =
      JSON.parse(localStorage.getItem("resultSheet")) || [];

    const updatedResultSheet = [...existingResultSheet, newResult];

    props.setResultSheet(updatedResultSheet);

    localStorage.setItem("resultSheet", JSON.stringify(updatedResultSheet));

    toast.success("Result Saved Successfully!", {
      position: "bottom-center",
      autoClose: 3000,
    });
  };

  return (
    <div className="w-full overflow-hidden p-3 xl:w-[calc(100%-300px)]">
      <Header
        title="Homework Submission"
        showSidebar={props.showSidebar}
        setShowSidebar={props.setShowSidebar}
      />
      <main className="grid h-[calc(100%-61px)] gap-5 overflow-auto sm:grid-cols-3">
        <div className="left h-full p-3 sm:col-span-2 sm:overflow-auto">
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
              Submit Homework
            </h3>
            <div className="homework_file">
              <label
                htmlFor="homework_file"
                className="mb-2 block h-full w-full cursor-pointer overflow-auto"
              >
                {homeworkFile ? (
                  homeworkFile.type.startsWith("image/") ? (
                    <img
                      src={URL.createObjectURL(homeworkFile)}
                      alt="Homework"
                      className="h-[600px] w-full bg-gray-300 object-contain"
                    />
                  ) : (
                    <iframe
                      title="Homework PDF"
                      src={URL.createObjectURL(homeworkFile)}
                      className="h-[600px] w-full border-none"
                    />
                  )
                ) : (
                  <div className="flex h-[400px] w-full items-center justify-center rounded-lg border-2 border-dashed bg-gray-100 object-cover">
                    <div className="flex flex-col items-center justify-center text-gray-800">
                      <IoCloudUpload className="text-6xl text-gray-400" />
                      <h3 className="text-lg font-semibold">
                        Submit Your Homework (PDF or Image)
                      </h3>
                      <p className="text-sm text-gray-600">
                        Only .pdf, .jpg, .jpeg, .png files are allowed!
                      </p>
                    </div>
                  </div>
                )}
              </label>
              <input
                type="file"
                name="homework_file"
                id="homework_file"
                accept=".pdf, .jpg, .jpeg, .png"
                className="hidden"
                onChange={handleFileChange}
                required
              />
            </div>
            {homeworkFile && (
              <div className="">
                <button
                  type="button"
                  className="mx-auto mt-5 flex cursor-pointer items-center gap-2 rounded bg-rose-500 px-5 py-2 text-sm text-white hover:bg-rose-600"
                  onClick={() => handleFileRemove()}
                >
                  <MdDelete className="text-xl" /> Remove File
                </button>
              </div>
            )}
            <button
              type="submit"
              value="Analyze Homework"
              className="mx-auto mb-8 mt-5 flex cursor-pointer items-center justify-center gap-2 rounded bg-[#c64bf8] px-5 py-2 font-semibold text-white transition-all hover:bg-[#b132e4]"
            >
              <MdOutlineDocumentScanner className="text-2xl" />{" "}
              <span>Analyze Homework</span>{" "}
            </button>
          </form>
        </div>
        <div className="right col-span-1 bg-white p-3 sm:border-l">
          <h2 className="my-3 border-b pb-2 text-lg font-bold text-[#6151fb]">
            Homework Analysis Result
          </h2>
          {!showAnalysis ||
          !grade ||
          !marks ||
          !formData.name ||
          !formData.roll ? (
            <div className="flex w-full justify-center xl:mt-8">
              <div className="item flex h-max flex-col items-center gap-3 rounded-lg bg-[#f9e5ea] p-8">
                <div className="icon">
                  <BiSolidErrorAlt className="text-5xl text-[#ef2b58]" />
                </div>
                <div className="text flex flex-col gap-2 text-center">
                  <h3 className="font-bold xl:text-xl">
                    No Analysis Data to Show
                  </h3>
                  <p className="text-sm text-gray-600 xl:text-base">
                    Analysis result will show once submitted homework!
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <table className="border-collapse border border-gray-300">
                <tr>
                  <th className="w-[200px] border border-gray-300 p-2 text-start">
                    Student Name:
                  </th>
                  <td className="border border-gray-300 p-2">
                    {formData.name}
                  </td>
                </tr>
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
                    Obtained Marks:
                  </th>
                  <td className="border border-gray-300 p-2">
                    <span className="font-bold text-[#6151fb]">{marks}</span>{" "}
                    out of <span>10</span>
                  </td>
                </tr>
                <tr>
                  <th className="w-[200px] border border-gray-300 p-2 text-start">
                    Result Analysis:
                  </th>
                  <td className="border border-gray-300 p-2">
                    {grade} Performance
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

export default HomeworkSubmission;
