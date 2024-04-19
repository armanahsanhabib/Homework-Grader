import { useState } from "react";
import { BiSolidErrorAlt } from "react-icons/bi";
import { MdOutlineDocumentScanner } from "react-icons/md";
import Header from "../components/common/Header";

const GradeSubmission = () => {
  const [productImage, setProductImage] = useState(null);
  const [formData, setFormData] = useState({
    roll: "",
    name: "",
  });
  const [marks, setMarks] = useState("");
  const [grade, setGrade] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    // props.setFormData({ ...props.formData, product_image: file });

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setProductImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleImageRemove = () => {
    // Clear the file input field
    const fileInput = document.getElementById("product_image");
    fileInput.value = null;

    // Clear the image state
    setProductImage(null);

    // Clear the product image from productDetails
    // setFormData({ ...props.formData, product_image: null });
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
    <div className="w-[calc(100%-300px)] overflow-hidden p-3">
      <Header title="Grade Submission" />
      <main className="grid h-[calc(100%-61px)] grid-cols-3 gap-5 overflow-auto">
        <div className="left col-span-2 p-3">
          <form onSubmit={handleSubmit}>
            <h3 className="mb-3 text-lg font-bold text-[#6151fb]">
              Student information
            </h3>
            <div className="studnets_info grid grid-cols-4 gap-5">
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
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500"
                  placeholder="123001"
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
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>
            <h3 className="my-3 text-lg font-bold text-[#6151fb]">
              Submit Grades
            </h3>
            <div className="subjects grid grid-cols-3">
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
                  value="Mathmatics"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500"
                  placeholder="John Doe"
                  required
                  readOnly
                />
              </div>
            </div>
            <button
              type="submit"
              value="Analyze Homework"
              className="mt-8 flex cursor-pointer items-center justify-center gap-2 rounded bg-[#c64bf8] px-5 py-2 font-semibold text-white transition-all hover:bg-[#b132e4]"
            >
              <MdOutlineDocumentScanner className="text-2xl" />{" "}
              <span>Analyze Homework</span>{" "}
            </button>
          </form>
        </div>
        <div className="right col-span-1 border-l bg-white p-3">
          <h2 className="my-3 border-b pb-2 text-lg font-bold text-[#6151fb]">
            Homework Analysis Result
          </h2>
          {!grade ? (
            <div className="flex h-[calc(100%-50px)] w-full items-center justify-center">
              <div className="item flex flex-col items-center gap-3 rounded-lg bg-[#f9e5ea] p-8">
                <div className="icon">
                  <BiSolidErrorAlt className="text-5xl text-[#ef2b58]" />
                </div>
                <div className="text flex flex-col gap-2 text-center">
                  <h3 className="text-xl font-bold">
                    No Analysis Data to Show
                  </h3>
                  <p className="text-gray-600">
                    Analysis result will show once submitted homework!
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
