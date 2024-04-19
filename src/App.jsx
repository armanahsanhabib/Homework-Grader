import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/common/Sidebar";
import Error404 from "./pages/Error404";
import GradeSubmission from "./pages/GradeSubmission";
import HomeworkSubmission from "./pages/HomeworkSubmission";

const App = () => {
  return (
    <Router>
      <div className="app flex h-screen bg-[#fafafa]">
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomeworkSubmission />} />
          <Route path="/grade-submission" element={<GradeSubmission />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
