/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BiSolidError } from "react-icons/bi";
import { toast } from "react-toastify";
import Header from "../components/common/Header";

const GradeResultSheet = (props) => {
  const [resultSheet, setResultSheet] = useState(
    JSON.parse(localStorage.getItem("gradeSheet")) || [],
  );

  useEffect(() => {
    localStorage.setItem("gradeSheet", JSON.stringify(resultSheet));
  }, [resultSheet]);

  const handleDeleteAllRecords = () => {
    localStorage.removeItem("gradeSheet");
    setResultSheet([]);
    toast.success("All Records Deleted Successfully!", {
      position: "bottom-center",
      autoClose: 3000,
    });
  };

  return (
    <div className="w-full overflow-hidden p-3 xl:w-[calc(100%-300px)]">
      <Header
        title="Grade Submission Sheet"
        showSidebar={props.showSidebar}
        setShowSidebar={props.setShowSidebar}
      />
      {resultSheet.length > 0 ? (
        <main className="h-[calc(100%-61px)] overflow-auto">
          <table className="container mx-auto mt-5 divide-y divide-gray-200 border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="border border-gray-200 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-gray-500"
                >
                  Sl
                </th>
                <th
                  scope="col"
                  className="border border-gray-200 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-gray-500"
                >
                  Roll
                </th>
                <th
                  scope="col"
                  className="w-[300px] border border-gray-200 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-gray-500"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="border border-gray-200 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-gray-500"
                >
                  Math
                </th>
                <th
                  scope="col"
                  className="border border-gray-200 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-gray-500"
                >
                  Science
                </th>
                <th
                  scope="col"
                  className="border border-gray-200 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-gray-500"
                >
                  English
                </th>
                <th
                  scope="col"
                  className="border border-gray-200 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-gray-500"
                >
                  History
                </th>
                <th
                  scope="col"
                  className="border border-gray-200 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-gray-500"
                >
                  Geography
                </th>
                <th
                  scope="col"
                  className="border border-gray-200 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-gray-500"
                >
                  CGPA
                </th>
                <th
                  scope="col"
                  className="border border-gray-200 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-gray-500"
                >
                  Remarks
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {resultSheet?.map((result, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap border border-gray-200 px-6 py-4 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-200 px-6 py-4 text-center">
                    {result.roll}
                  </td>
                  <td className="border border-gray-200 px-6 py-4 text-center">
                    {result.name}
                  </td>
                  <td className="whitespace-nowrap border border-gray-200 px-6 py-4 text-center">
                    {result.math}
                  </td>
                  <td className="whitespace-nowrap border border-gray-200 px-6 py-4 text-center">
                    {result.science}
                  </td>
                  <td className="whitespace-nowrap border border-gray-200 px-6 py-4 text-center">
                    {result.english}
                  </td>
                  <td className="whitespace-nowrap border border-gray-200 px-6 py-4 text-center">
                    {result.history}
                  </td>
                  <td className="whitespace-nowrap border border-gray-200 px-6 py-4 text-center">
                    {result.geography}
                  </td>
                  <td className="whitespace-nowrap border border-gray-200 px-6 py-4 text-center">
                    {result.cgpa}
                  </td>
                  <td className="whitespace-nowrap border border-gray-200 px-6 py-4 text-center">
                    {result.grade}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={handleDeleteAllRecords}
            className="mx-auto mt-8 block cursor-pointer rounded-lg bg-rose-600 px-5 py-2 font-semibold text-white hover:bg-rose-700"
          >
            Delete All Records
          </button>
        </main>
      ) : (
        <main className="mt-5 h-[calc(100%-61px)] gap-3 overflow-auto text-gray-800">
          <div className="box flex items-center gap-3 rounded-lg border bg-white p-5">
            <BiSolidError className="text-5xl text-orange-400" />
            <div className="text">
              <h1 className="text-xl font-bold">
                Sorry, No data available to show!
              </h1>
              <p className="">
                Please &apos;save result analysis&apos; before accessing this
                page!
              </p>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default GradeResultSheet;
