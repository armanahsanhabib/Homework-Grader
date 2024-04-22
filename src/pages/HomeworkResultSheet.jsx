/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { BiSolidError } from "react-icons/bi";
import { toast } from "react-toastify";

const HomeworkResultSheet = (props) => {
  const [resultSheet, setResultSheet] = useState(
    JSON.parse(localStorage.getItem("resultSheet")) || [],
  );

  useEffect(() => {
    localStorage.setItem("resultSheet", JSON.stringify(resultSheet));
  }, [resultSheet]);

  const handleDeleteAllRecords = () => {
    localStorage.removeItem("resultSheet");
    setResultSheet([]);
    toast.success("All Records Deleted Successfully!", {
      position: "bottom-center",
      autoClose: 3000,
    });
  };

  return (
    <div className="h-screen w-full overflow-auto">
      {resultSheet.length > 0 ? (
        <main className="container mx-auto">
          <h1 className="mt-5 border-b-4 border-slate-400 pb-2 text-xl font-bold">
            Homework Analysis Sheet
          </h1>
          <div className="my-6 rounded-lg border bg-white p-6">
            <h3 className="mb-5 text-lg font-bold text-[#6151fb]">
              Total {resultSheet.length} records found!
            </h3>
            <table className="container mx-auto divide-y divide-gray-200 border border-gray-200">
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
                    className="border border-gray-200 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-gray-500"
                  >
                    Students Name
                  </th>
                  <th
                    scope="col"
                    className="border border-gray-200 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-gray-500"
                  >
                    Right Answers
                  </th>
                  <th
                    scope="col"
                    className="border border-gray-200 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-gray-500"
                  >
                    Wrong Answers
                  </th>
                  <th
                    scope="col"
                    className="border border-gray-200 px-6 py-3 text-center text-sm font-medium uppercase tracking-wider text-gray-500"
                  >
                    Obtained Marks
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
                      {result.rightAnswers}
                    </td>
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-4 text-center">
                      {result.wrongAnswers}
                    </td>
                    <td className="whitespace-nowrap border border-gray-200 px-6 py-4 text-center">
                      {result.marks}
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
          </div>
        </main>
      ) : (
        <main className="container mx-auto h-[calc(100%-83px)] gap-3 overflow-auto text-gray-800">
          <h1 className="mt-5 border-b-4 border-slate-400 pb-2 text-xl font-bold">
            Homework Analysis Sheet
          </h1>
          <div className="box my-6 flex items-center gap-3 rounded-lg border bg-white p-6">
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

export default HomeworkResultSheet;
