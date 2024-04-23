import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      {/* <Route path="/" element={<VideoPage/>} />
      <Route path="/videos/:videoId" element={<VideoPage/>} />
      <Route path="/upload" element={<UploadPage/>} />
      <Route path="*" element={<NotFound/>} /> */}
    </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
