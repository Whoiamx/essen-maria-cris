import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../ui/HomePage";
import { ProductContainerMain } from "../components/products/ProductContainerMain";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/productos" element={<ProductContainerMain />} />
      </Routes>
    </BrowserRouter>
  );
};
