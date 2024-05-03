import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlannerPage from "./pages/PlannerPage/PlannerPage";


function App() {
  return (
    <>
    <BrowserRouter>
    {/* <Header /> */}
    <Routes>
      <Route path="/" element={<PlannerPage/>} />
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
