import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/common/Sidebar";
import Error404 from "./pages/Error404";
import GradeResultSheet from "./pages/GradeResultSheet";
import GradeSubmission from "./pages/GradeSubmission";
import HomeworkResultSheet from "./pages/HomeworkResultSheet";
import HomeworkSubmission from "./pages/HomeworkSubmission";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [resultSheet, setResultSheet] = useState(
    JSON.parse(localStorage.getItem("resultSheet")) || [],
  );
  const [gradeSheet, setGradeSheet] = useState(
    JSON.parse(localStorage.getItem("gradeSheet")) || [],
  );

  useEffect(() => {
    localStorage.setItem("resultSheet", JSON.stringify(resultSheet));
  }, [resultSheet]);

  useEffect(() => {
    localStorage.setItem("gradeSheet", JSON.stringify(gradeSheet));
  }, [gradeSheet]);

  return (
    <Router>
      <div className="app flex h-screen bg-[#c0d2e6]">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <Routes>
          <Route
            path="/"
            element={
              <HomeworkSubmission
                resultSheet={resultSheet}
                setResultSheet={setResultSheet}
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
            }
          />
          <Route
            path="/grade-submission"
            element={
              <GradeSubmission
                gradeSheet={gradeSheet}
                setGradeSheet={setGradeSheet}
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
            }
          />
          <Route
            path="/homework-sheet"
            element={
              <HomeworkResultSheet
                resultSheet={resultSheet}
                setResultSheet={setResultSheet}
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
            }
          />
          <Route
            path="/grade-sheet"
            element={
              <GradeResultSheet
                gradeSheet={gradeSheet}
                setGradeSheet={setGradeSheet}
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
            }
          />
          <Route
            path="*"
            element={
              <Error404
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
              />
            }
          />
        </Routes>
      </div>
      <ToastContainer />
    </Router>
  );
};

export default App;
