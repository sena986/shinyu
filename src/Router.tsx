import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Office from "./Routes/Office";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/office" element={<Office />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
