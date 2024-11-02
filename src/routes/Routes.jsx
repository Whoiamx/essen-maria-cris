import { BrowserRouter, Routes } from "react-router-dom";
import { HomePage } from "../ui/HomePage";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};
