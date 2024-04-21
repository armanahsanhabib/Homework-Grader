/* eslint-disable react/prop-types */

const MarksSubmissionTable = ({ marks, setMarks }) => {
  const handleMarksChange = (subject, value) => {
    setMarks((prevMarks) => ({
      ...prevMarks,
      [subject]: value,
    }));
  };

  const SubjectRow = (props) => {
    return (
      <tr className="bg-white">
        <td className="border border-gray-200 px-4 py-2 capitalize">
          {props.subject}
        </td>
        <td className="border border-gray-200 px-4 py-2">
          <input
            type="number"
            className="w-full rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring focus:ring-blue-200"
            value={props.mark}
            onChange={(e) => handleMarksChange(props.subject, e.target.value)}
          />
        </td>
      </tr>
    );
  };

  return (
    <div className="max-w-md">
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-200 px-4 py-2">Subject Name</th>
            <th className="border border-gray-200 px-4 py-2">Marks</th>
          </tr>
        </thead>
        <tbody>
          <SubjectRow subject="math" mark={marks.math} />
          <SubjectRow subject="science" mark={marks.science} />
          <SubjectRow subject="english" mark={marks.english} />
          <SubjectRow subject="history" mark={marks.history} />
          <SubjectRow subject="geography" mark={marks.geography} />
        </tbody>
      </table>
    </div>
  );
};

export default MarksSubmissionTable;
