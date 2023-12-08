import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import VerticaNav from "./components/VerticalNav";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Banner />
      <VerticaNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
