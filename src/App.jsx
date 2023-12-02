import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Api from "./api/Api";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Footer from "./components/Footer";

const App = () => {
  const [data, setData] = useState(null);

  return (
    <BrowserRouter>
      <Banner />
      <Api setData={setData} />
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/home" element={<Home data={data} />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
