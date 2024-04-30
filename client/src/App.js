import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlannerPage from "./pages/PlannerPage/PlannerPage";
import TestPage from "./pages/TestPage/TestPage";

function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      {/* <Route path="/" element={<PlannerPage/>} /> */}
      <Route path="/test" element={<TestPage/>} />
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
