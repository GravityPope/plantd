import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlannerPage from "./pages/PlannerPage/PlannerPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

//TODO: make Header, delete functionality for planters

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<PlannerPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
