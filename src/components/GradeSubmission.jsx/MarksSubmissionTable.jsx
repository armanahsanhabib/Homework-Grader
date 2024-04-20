/* eslint-disable react/prop-types */
const MarksSubmissionTable = (props) => {
  const handleMarksChange = (subject, value) => {
    props.setMarks((prevMarks) => ({
      ...prevMarks,
      [subject]: value,
    }));
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
          {Object.keys(props.marks).map((subject) => (
            <tr key={subject} className="bg-white">
              <td className="border border-gray-200 px-4 py-2 capitalize">
                {subject}
              </td>
              <td className="border border-gray-200 px-4 py-2">
                <input
                  type="number"
                  className="w-full rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:ring focus:ring-blue-200"
                  value={props.marks[subject]}
                  onChange={(e) => handleMarksChange(subject, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MarksSubmissionTable;
