import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlannerPage from "./pages/PlannerPage/PlannerPage";

//TODO: make Header, delete functionality for planters


function App() {
  return (
    <div className="body">
    <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<PlannerPage/>} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
