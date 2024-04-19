import { useEffect, useState } from "react";
import { BiSolidErrorAlt } from "react-icons/bi";
import { MdOutlineDocumentScanner } from "react-icons/md";
import Header from "../components/common/Header";

const HomeworkSubmission = () => {
  const [productImage, setProductImage] = useState(null);
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

  return (
    <div className="w-[calc(100%-300px)] overflow-hidden p-3">
      <Header title="Homework Submission" />
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
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Enter name..."
                  required
                />
              </div>
            </div>
            <h3 className="my-3 text-lg font-bold text-[#6151fb]">
              Submit Homework
            </h3>
            <div className="product_image">
              <label
                htmlFor="product_image"
                className="mb-2 block h-[400px] w-[400px] cursor-pointer"
              >
                {productImage ? (
                  <img
                    src={productImage}
                    alt="Product"
                    className="h-full w-full rounded-lg border bg-white object-contain"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-lg border-2 border-dashed bg-gray-100 object-cover">
                    <div className="rounded border border-blue-500 px-5 py-2 text-blue-600">
                      Click to Submit Homework
                    </div>
                  </div>
                )}
              </label>
              <input
                type="file"
                name="product_image"
                id="product_image"
                accept="image/*"
                onChange={handleImageChange}
                required
              />
            </div>
            {productImage && (
              <div className="">
                <button
                  type="button"
                  className="mt-5 cursor-pointer rounded bg-rose-500 px-5 py-2 text-sm text-white hover:bg-rose-600"
                  onClick={() => handleImageRemove()}
                >
                  X Remove Image
                </button>
              </div>
            )}
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
          {!showAnalysis ||
          !grade ||
          !marks ||
          !formData.name ||
          !formData.roll ? (
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
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default HomeworkSubmission;
