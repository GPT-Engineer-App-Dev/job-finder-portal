import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import JobForm from "./pages/JobForm.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/post-job" element={<JobForm />} />
      </Routes>
    </Router>
  );
}

export default App;
