import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DataProvider } from "./data/DataProvider";
import Banner from "./components/banner/Banner";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import VerticaNav from "./components/verticalnav/VerticalNav";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  return (
    <BrowserRouter>
      <Banner />
      <VerticaNav />
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard/:id" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
};

export default App;
