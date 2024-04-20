import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/common/Sidebar";
import Error404 from "./pages/Error404";
import GradeSubmission from "./pages/GradeSubmission";
import HomeworkResultSheet from "./pages/HomeworkResultSheet";
import HomeworkSubmission from "./pages/HomeworkSubmission";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [resultSheet, setResultSheet] = useState(
    JSON.parse(localStorage.getItem("resultSheet")) || [],
  );

  useEffect(() => {
    localStorage.setItem("resultSheet", JSON.stringify(resultSheet));
  }, [resultSheet]);

  return (
    <Router>
      <div className="app flex h-screen gap-5 bg-[#fafafa]">
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
